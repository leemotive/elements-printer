window.addEventListener('beforeprint', () => {
  const selector = localStorage.getItem('print-element-selector') || '.print-element';
  localStorage.removeItem('print-element-selector');

  if (selector === '.print-element') {
    return;
  }

  document.querySelectorAll(selector).forEach(ele => {
    ele.classList.add('print-element-vrr0av0v5xe');
  });
});

window.addEventListener('afterprint', () => {
  document
    .querySelectorAll('.print-element-vrr0av0v5xe')
    .forEach(ele => ele.classList.remove('print-element-vrr0av0v5xe'));
});

export {};
