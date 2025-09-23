function SidebarMenuPhone() {
    var icon = document.getElementById("HamburgerMenu")
    var close_icon = document.getElementById("close")
    var center = document.getElementById("center")
    var navbar = document.getElementById("mainnav")
        function showhidemenu() {
        navbar.classList.toggle("navOFF")
}


icon.addEventListener("click", showhidemenu);
icon.addEventListener("touchend", showhidemenu);
close_icon.addEventListener("click", showhidemenu);
close_icon.addEventListener("touchend", showhidemenu);
}
SidebarMenuPhone()