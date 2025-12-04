const form = document.getElementById("loginForm");
const emailEl = document.getElementById("email");
const passEl = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Email validation
  if (emailEl.value.trim() === "") {
    setError(emailEl, "Email is required");
    valid = false;
  } else {
    clearError(emailEl);
  }

  // Password validation
  if (passEl.value.trim() === "") {
    setError(passEl, "Password is required");
    valid = false;
  } else {
    clearError(passEl);
  }

  // Successful login animation
  if (valid) {
    animateButton();
    setTimeout(() => {
      alert("Login Successful!");
    }, 700);
  }
});

function setError(input, message) {
  const container = input.parentElement;
  const errorEl = container.querySelector(".error-text");
  errorEl.textContent = message;
  input.classList.add("shake");
  setTimeout(() => input.classList.remove("shake"), 400);
}

function clearError(input) {
  const container = input.parentElement;
  const errorEl = container.querySelector(".error-text");
  errorEl.textContent = "";
}

function animateButton() {
  const btn = document.querySelector(".auth-btn");
  btn.classList.add("btn-press");
  setTimeout(() => btn.classList.remove("btn-press"), 300);
}

/****** Micro-interaction animation ******/
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", () => {
    input.style.transform = "scale(1.02)";
  });
  input.addEventListener("blur", () => {
    input.style.transform = "scale(1)";
  });
});
