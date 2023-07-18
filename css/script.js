          // PASSWORD SHOW AND HIDE

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");
  var togglePassword = document.getElementById("togglePassword");
  
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
}

          // EMAIL AND PASSWORD VALIDATION

function validateForm(event) {
  event.preventDefault(); 
  
  var emailInput = document.getElementById("emailInput");
  var passwordInput = document.getElementById("passwordInput");
  var errorPassowrd = document.getElementById("errorPassowrd");
  var errorEmail = document.getElementById("errorEmail");
  var email = emailInput.value;
  var password = passwordInput.value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  errorPassowrd.innerHTML = "";
  errorEmail.innerHTML ="";
  emailInput.classList.remove("error_border_email");
  passwordInput.classList.remove("error_border_password");
  
  var isValid = true;
  if (!emailPattern.test(email)) {
    errorEmail.innerHTML += "Invalid email address<br>";
    emailInput.classList.add("error_border_email");
    isValid = false;
  }
  
  if (!passwordPattern.test(password)) {
    errorPassowrd.innerHTML += "Invalid Password<br>";
    passwordInput.classList.add("error_border_password");
    isValid = false;
  }
  if (isValid) {
    alert("Successfully Updated Email and Password");
 
  }
}


