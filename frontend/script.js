/*
File: script.js
Purpose: Handles basic form submissions for login and register pages with backend integration
*/

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  // get the current page pathname
  const currentPage = window.location.pathname;

  // === Handle Login Page ===
  if (currentPage.includes("login.html")) {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // send POST request to backend
      fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          alert(data);
        })
        .catch((err) => {
          console.error("Login error:", err);
          alert("Something went wrong.");
        });
    });
  }

  // === Handle Register Page ===
  if (currentPage.includes("register.html")) {
    const registerForm = document.querySelector(".login-form");

    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // send POST request to backend
      fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      })
        .then((res) => res.text())
        .then((data) => {
          alert(data);
          window.location.href = "login.html";
        })
        .catch((err) => {
          console.error("Register error:", err);
          alert("Something went wrong.");
        });
    });
  }

  // === Handle Index Page ===
  if (currentPage.endsWith("index.html") || currentPage === "/") {
    console.log("Index page loaded");
    // you can add index page scripts here later
  }
});
