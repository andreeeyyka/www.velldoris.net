var smb = false


function SlideMenuButton() {
    smb = true
    if (smb == true) {
        document.queryselector(".btn").classlist.add(".header__burger_active")
    } else {
        document.queryselector(".btn").classlist.remove(".header__burger_active")
    }
}