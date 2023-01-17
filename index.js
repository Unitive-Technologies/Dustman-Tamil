// home page - What we do

var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");

for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    console.log("Clicked a li option");
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });

    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (item) {
      item.style.display = "none";
    });

    if (li_value == "cer-recycle") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "data-dest") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "it-refur") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "ewaste") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "doorto") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "reportto") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}