const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-theme');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light-theme');
  setTheme(isLight ? 'dark' : 'light');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('dark');
  }
});

const durationButtons = document.querySelectorAll('.duration-btn');

durationButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    durationButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

