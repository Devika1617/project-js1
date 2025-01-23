// login.js

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simple validation check (you can use more robust validation)
    if (email && password) {
        // Mock login logic (replace with real authentication code)
        // If login is successful:
        alert('Login successful! Redirecting to home page...');
        window.location.href = 'index.html'; // Redirect to home page after login
    } else {
        alert('Please enter valid credentials.');
    }
});


     const guestLoginBtn = document.getElementById("guest-login-btn");


    // Handle guest login
    guestLoginBtn.addEventListener("click", function () {
        alert("Logged in as Guest with predefined credentials!");
        redirectToTypingTest();
    });

    // Redirect to typing test page (mock redirect)
    function redirectToTypingTest() {
        window.location.href = "./index.html";  // Change this to your typing test page URL
    };

