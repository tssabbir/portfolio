
var menuBtn = document.querySelector(".menu-btn");
var ul = document.querySelector(".ul")



menuBtn.addEventListener("click", ()=>{
    ul.classList.toggle("ul-click");
   
});





// Get all buttons with class="btn" inside the container
var btn = ul.querySelectorAll(".a");


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn.length; i++) {
  btn.addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active");
    this.className += "active";
  });
}
git init