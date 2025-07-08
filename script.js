function handleSignup() {
document.getElementById("login-button").addEventListener("click", function () {
    const Email = "hasham14fw@gmail.com";
    const Password = "BCT-115";
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    if (email === Email && password === Password) {
      alert("Sign up successful!");
      window.location.href = "login.html";
    } else {
        alert("Sign up successful!");
      window.location.href = "login.html";
    }
  })};

  function handlelogin() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    const adminEmail = "ahmad14fw@gmail.com";
    const adminPassword = "APZ-22-2414";
    errorMessage.textContent = "";
    if (email === adminEmail && password === adminPassword) {
        window.location.href = "admin.html";
    } else {
        errorMessage.textContent = "Invalid email or password. Please try again.";
        errorMessage.style.color = "red"; 
    }
}

function handlelogin_cus() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const validUsername = "hasham14fw@gmail.com";
    const validPassword = "BCT-115";
    const errorDiv = document.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    if (username === validUsername && password === validPassword) {
        window.location.href = "home.html";
    } else {
        const form = document.querySelector('form');
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '10px';
        errorMessage.textContent = "Invalid username or password. Please try again.";
        form.appendChild(errorMessage);
    }
}


    function submitFeedback() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const feedbackMessage = document.getElementById("feedback-message");
    
        if (name && email && message) {
            alert("Thank you for your feedback, " + name + "!");
            document.getElementById("feedback-form").reset();
            window.location.href = 'home.html'
        } else {
            alert("Please fill out all fields before submitting.");
        }
    }
    function confirmPayment() {
        alert("Thank you for your payment! We will process your order shortly.");
        window.location.href = 'home.html';
    }

document.getElementById('cash-on-delivery').addEventListener('click', function () {
    alert('Thank you! You have selected Cash on Delivery. Please ensure to have the exact amount ready.');
});
