document.querySelectorAll('.cite-toggle').forEach((btn) => {
  const box = btn.closest('[data-cite]').querySelector('.bibtex-wrap');
  btn.addEventListener('click', () => {
    const open = box.hidden;
    box.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });
});

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.parentElement.querySelector('.bibtex').textContent;
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied';
    } catch {
      btn.textContent = 'Select to copy';
    }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
  });
});
