// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('passInput');
    
    // Toggle the type attribute
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Form Submission handling
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    console.log("Login form submitted successfully.");
};