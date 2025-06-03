function showLogin() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("email", document.getElementById("regEmail").value);
  localStorage.setItem("password", document.getElementById("regPassword").value);
  window.location.href = "home.html";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials");
  }
});