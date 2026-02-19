"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function submit() {
    const v = email.trim();
    if (!isEmail(v)) {
      setStatus("error");
      setMessage("Add a valid email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: v }),
      });

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!res.ok || !data?.success) {
        setStatus("error");
        setMessage(data?.message || "Could not subscribe. Try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on. Keep eyes on your inbox for the good stuff.");
    } catch (e) {
      setStatus("error");
      setMessage("Could not subscribe. Try again.");
    }
  }

  if (status === "success") {
    return <p className="notice">{message}</p>;
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      <input
        className="input"
        type="email"
        name="email"
        autoComplete="email"
        placeholder={compact ? "Email for updates" : "Email address"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle") {
            setStatus("idle");
            setMessage("");
          }
        }}
        aria-label="Email address"
        required
      />
      <button className="btn primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining…" : "Join the list"}
      </button>
      {status === "error" ? <p className="notice">{message}</p> : null}
    </form>
  );
}
