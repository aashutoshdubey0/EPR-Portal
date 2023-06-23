function validateEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  function confirmFormSubmission() {
    return confirm("Are you sure you want to leave this page? You will need to resubmit the registration form.");
  }
  
  function generatePuzzle() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var operator = Math.random() < 0.5 ? '+' : '-';
    var calculation = num1 + ' ' + operator + ' ' + num2;
  
    document.getElementById("puzzle-calculation").textContent = calculation;
  }
  
  function showProducerFields() {
    document.getElementById("producerFieldsContainer").classList.remove("hidden");
  }
  
  function hideProducerFields() {
    document.getElementById("producerFieldsContainer").classList.add("hidden");
  }
  
  function showAdminFields() {
    document.getElementById("adminFieldsContainer").classList.remove("hidden");
  }
  
  function hideAdminFields() {
    document.getElementById("adminFieldsContainer").classList.add("hidden");
  }
  
  function validateRegistrationForm() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var loginType = document.querySelector('input[name="login-type"]:checked').value;
    var puzzleAnswer = parseInt(document.getElementById("puzzle-answer").value);
  
    var num1 = parseInt(document.getElementById("puzzle-calculation").textContent.split(' ')[0]);
    var num2 = parseInt(document.getElementById("puzzle-calculation").textContent.split(' ')[2]);
    var operator = document.getElementById("puzzle-calculation").textContent.split(' ')[1];
  
    var expectedAnswer;
    if (operator === '+') {
      expectedAnswer = num1 + num2;
    } else {
      expectedAnswer = num1 - num2;
    }
  
    if (puzzleAnswer !== expectedAnswer) {
      alert("Incorrect puzzle answer");
      return false;
    }
  
    if (fullName === "") {
      alert("Please enter your full name.");
      return false;
    }
  
    if (username === "") {
      alert("Please enter a username.");
      return false;
    }
  
    if (password === "") {
      alert("Please enter a password.");
      return false;
    }
  
    if (confirmPassword === "") {
      alert("Please confirm your password.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }
  
    if (email === "") {
      alert("Please enter an email address.");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (phone === "") {
      alert("Please enter a phone number.");
      return false;
    }
  
    if (!validatePhoneNumber(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
  
    // Registration successful, redirect to appropriate page based on login type
    if (loginType === "admin") {
      window.location.href = "admin.html";
    } else if (loginType === "producer") {
      window.location.href = "producer.html";
    }
  
    return true;
  }
  
  document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "login.html";
  });
  
  document.getElementById("admin").addEventListener("change", function() {
    hideProducerFields();
    showAdminFields();
  });
  
  document.getElementById("producer").addEventListener("change", function() {
    hideAdminFields();
    showProducerFields();
  });
  
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (confirmFormSubmission()) {
      validateRegistrationForm();
    }
  });
  
  // Generate initial puzzle
  generatePuzzle();
  
  // Disable navigation using back button
  history.pushState(null, document.title, location.href);
  window.addEventListener('popstate', function(event) {
    history.pushState(null, document.title, location.href);
  });
  