
//Get the menu icon 
var menuIcon = document.querySelector(".menu-icon");
//Get the sidebar
var sidebar = document.querySelector(".sidebar");

//onclick, this function will toggle the small-sidebar class
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
}
