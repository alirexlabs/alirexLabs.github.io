// ==========================================================================
// 禅 (Zen) & 漆 (Urushi) テーマ切り替えスクリプト
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');

  // 保存されたテーマまたはOSの設定を判定
  const savedTheme = localStorage.getItem('alirex-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('alirex-theme', newTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon && themeLabel) {
      if (theme === 'dark') {
        themeIcon.textContent = '🌙';
        themeLabel.textContent = '漆 (Urushi)';
      } else {
        themeIcon.textContent = '☀️';
        themeLabel.textContent = '禅 (Zen)';
      }
    }
  }
});
