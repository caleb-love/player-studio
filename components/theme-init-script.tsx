/** Runs before hydration to avoid theme flash. */
export function ThemeInitScript() {
  const code = `(function () {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        document.documentElement.dataset.theme = stored;
        return;
      }
      // Default: dark (regardless of OS preference)
      document.documentElement.dataset.theme = 'dark';
    } catch (e) {}
  })();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
