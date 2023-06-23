function confirmFormSubmission() {
  return confirm("Are you sure you want to leave this page? You will need to resubmit the login form.");
}

function generatePuzzle() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operator = Math.random() < 0.5 ? '+' : '-';
  var calculation = num1 + ' ' + operator + ' ' + num2;

  document.getElementById("puzzle-calculation").textContent = calculation;
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
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

  if (puzzleAnswer === expectedAnswer) {
    if (loginType === "admin") {
      if (username === "admin" && password === "admin123") {
        window.location.href = "admin.html";
      } else {
        alert("Invalid admin credentials");
        location.reload(); // Reload the page
      }
    } else if (loginType === "producer") {
      if (username === "user" && password === "user123") {
        window.location.href = "producer.html";
      } else {
        alert("Invalid user credentials");
        location.reload(); // Reload the page
      }
    }
  } else {
    alert("Incorrect puzzle answer");
    location.reload(); // Reload the page
  }
  
  // Replace the current state with a new state to prevent navigation using back button
  history.pushState(null, document.title, location.href);
});

document.getElementById("signupButton").addEventListener("click", function() {
  window.location.href = "registration.html";
});

// Generate initial puzzle
generatePuzzle();

// Disable navigation using back button
history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function(event) {
  history.pushState(null, document.title, location.href);
});
