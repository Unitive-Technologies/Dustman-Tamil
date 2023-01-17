function showLoginOptions() {
  console.log("Clicked on login");
  document.getElementById("login-list-resp").classList.toggle("show");
}

document
  .getElementById("login-btn-resp")
  .addEventListener("click", showLoginOptions);