document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const isActive = accordionItem.classList.contains('active');

    document.querySelectorAll('.accordion-item.active').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      accordionItem.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});
const themeToggleBtn = document.querySelector('.theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
