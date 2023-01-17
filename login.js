// login drop-down menu

function showLoginOptions() {
  console.log("Clicked on login");
  document.getElementById("login-list").classList.toggle("show");
}

document
  .getElementById("login-btn")
  .addEventListener("click", showLoginOptions);

window.onclick = function (event) {
  if (!event.target.matches(".login-btn")) {
    var dropdowns = document.getElementsByClassName("login-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};