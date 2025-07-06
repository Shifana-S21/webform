function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMsg = document.getElementById('errorMsg');
  
    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match.";
      return false;
    }
  
    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters.";
      return false;
    }
  
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    return true;
  }
