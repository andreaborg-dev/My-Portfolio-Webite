function SidebarMenuPhone() {
    var icon = document.getElementById("HamburgerMenu")
    var center = document.getElementById("center")
    var navbar = document.getElementById("mainnav")
    icon.addEventListener("touchstart", function() {
        center.classList.toggle("horizontalcenter")
        navbar.classList.toggle("navOFF")
        icon.classList.toggle("HamburgerMenuON")
        icon.classList.toggle("HamburgerMenuOFF")
    })
}
SidebarMenuPhone()