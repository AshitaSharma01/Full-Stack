const textarea = document.getElementById('text-input');
const countDisplay = document.getElementById('char-count');

textarea.addEventListener('input', () => {
  countDisplay.textContent = textarea.value.length;
});
