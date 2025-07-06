/*
File: script.js
Purpose: Handles basic form submissions for login and register pages
*/

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // get the current page pathname
  const currentPage = window.location.pathname;

  // === Handle Login Page ===
  if (currentPage.includes("login.html")) {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual form submission

      // get form data
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      console.log("Login submitted with:");
      console.log("Username:", username);
      console.log("Password:", password);

      // you can add a redirect or fake authentication here later
      alert(`Welcome back, ${username}! (fake login for demo)`);
    });
  }

  // === Handle Register Page ===
  if (currentPage.includes("register.html")) {
    const registerForm = document.querySelector(".login-form");

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual form submission

      // get form data
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // simple password match validation
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      console.log("Registration submitted with:");
      console.log("Username:", username);
      console.log("Password:", password);

      // you can add real registration logic here later
      alert(`Account created for ${username}! (fake register for demo)`);

      // optionally redirect to login
      window.location.href = "login.html";
    });
  }

  // === Handle Index Page ===
  if (currentPage.endsWith("index.html") || currentPage === "/") {
    console.log("Index page loaded");
    // you can add index page scripts here later
  }
});
