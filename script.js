document.querySelectorAll('.code').forEach((input, index, inputs) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (!/^\d$/.test(value)) {
      e.target.value = ''; // Clear non-numeric input
      return;
    }
    if (index < inputs.length - 1) {
      inputs[index + 1].focus(); // Move focus to next input
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'backspace' && !e.target.value && index > 0) {
      inputs[index - 1].focus(); // Move focus to previous input on Backspace
    }
  });

  input.addEventListener('focus', () => {
    input.classList.add('active');
  });

  input.addEventListener('blur', () => {
    input.classList.remove('active');
  });
});
