// producer.js

// Function to check if the phone number is 10-digit
function isValidPhoneNumber(phoneNumber) {
    var phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  }
  
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get the registration form element
    var form = document.getElementById('registrationForm');
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the form data
      var formData = new FormData(form);
  
      // Check if the phone number is valid
      var phoneNumberInput = document.getElementById('phone');
      var phoneNumber = phoneNumberInput.value.trim();
  
      if (!isValidPhoneNumber(phoneNumber)) {
        alert('Invalid phone number. Please enter a 10-digit number.');
        return;
      }
  
      // Check if the PDF name matches the serial number and the uploaded file name
      var pdfNameInput = document.getElementById('pdfname');
      var pdfFileInput = document.getElementById('pdfFile');
      var serialNumberInput = document.getElementById('serialNumber');
  
      var pdfName = pdfNameInput.value.trim();
      var uploadedFileName = pdfFileInput.files[0].name;
      var serialNumber = serialNumberInput.value.trim();
  
      if (pdfName !== serialNumber && pdfName !== uploadedFileName) {
        alert('PDF name must match the serial number and the uploaded file name.');
        return;
      }
  
      // Process the form data or make an AJAX request
      // ...
  
      // Reset the form
      form.reset();
  
      // Redirect to success.html
      window.location.href = 'success.html';
    });
  });