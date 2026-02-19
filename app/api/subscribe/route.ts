import { NextRequest, NextResponse } from "next/server";
import { LoopsClient } from "loops";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

/**
 * Newsletter subscribe endpoint.
 * - If LOOPS_API_KEY is set, we create or update a Loops contact server-side.
 * - If not set, we return success (demo mode for internal review).
 */
export async function POST(request: NextRequest) {
  try {
    const res = (await request.json().catch(() => ({}))) as { email?: string };
    const email = (res.email || "").trim();

    if (!email || !isEmail(email)) {
      return NextResponse.json({ success: false, message: "Invalid email." }, { status: 400 });
    }

    const apiKey = process.env.LOOPS_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ success: true });
    }

    const loops = new LoopsClient(apiKey);
    const resp: { success: boolean; id?: string; message?: string } = await loops.updateContact(
      email
    );

    if (!resp.success) {
      return NextResponse.json(
        { success: false, message: resp.message || "Subscription failed." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, message: "Server error." }, { status: 500 });
  }
}
