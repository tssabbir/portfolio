

//menu-btn
var menuBtn = document.querySelector(".menu-btn");
var ul = document.querySelector(".ul")

menuBtn.addEventListener("click", ()=>{
    ul.classList.toggle("ul-click");
    menuBtn.classList.toggle("hide-menu");

});






//activ

var btns = document.querySelectorAll(".a");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active");
    this.className += " active";
  });
}

