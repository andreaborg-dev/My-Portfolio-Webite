function SidebarMenuPhone() {
    var icon = document.getElementById("HamburgerMenu")
    var center = document.getElementById("center")
    var navbar = document.getElementById("mainnav")
        function showhidemenu() {
        center.classList.toggle("horizontalcenter")
        navbar.classList.toggle("navOFF")
        icon.classList.toggle("HamburgerMenuON")
        icon.classList.toggle("HamburgerMenuOFF")
}

icon.addEventListener("click", showhidemenu);
icon.addEventListener("touchend", showhidemenu);
}
SidebarMenuPhone()