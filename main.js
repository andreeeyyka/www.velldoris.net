var menuclicked = false
function burger() {
    if (!menuclicked) {
        menuclicked = true
        document.querySelector(".slide-menu").style += 'display:block;'
        document.querySelector(".slide-menu__wrapper").classList.add("slide-menu__wrapper_short")
        document.querySelector(".burger-menu").style += 'display:block;'
        document.querySelector(".catalog-menu").style += 'display:block;'
    } else {
        menuclicked = false
        document.querySelector(".slide-menu").style= 'display:none;'
        document.querySelector(".slide-menu__wrapper").classList.remove("slide-menu__wrapper_short")
        document.querySelector(".burger-menu").style= 'display:none;'
        document.querySelector(".catalog-menu").style= 'display:none;'
    }
}
