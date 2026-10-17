function validateEmail(inputId, errorId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);

  inputElement.addEventListener('input', function() {
    const emailValue = this.value;

    if (emailValue.includes("@")) {
      errorElement.textContent = "Looks good!";
    } else {
      errorElement.textContent = "Please enter a valid email address";
    }
  });
}

// Initialize validation
validateEmail('email', 'emailError');
