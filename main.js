var menuclicked = true
var menuclic = false
function burger() {
    if (!menuclic) {
        menuclic = true
        document.querySelector(".slide-menu").style += 'display:block;'
        document.querySelector(".slide-menu__wrapper").classList.add("slide-menu__wrapper_short")
        document.querySelector(".burger-menu").style += 'display:block;'
        document.querySelector(".catalog-menu").style += 'display:block;'
    } else {
        menuclic = false
        document.querySelector(".slide-menu").style= 'display:none;'
        document.querySelector(".slide-menu__wrapper").classList.remove("slide-menu__wrapper_short")
        document.querySelector(".burger-menu").style= 'display:none;'
        document.querySelector(".catalog-menu").style= 'display:none;'
    }
}

function  status() {
    if (!menuclicked) {
        menuclicked = true
        document.querySelector(".catalog-filter__fields").style += 'max-height: 224px;padding: 15px 10px;'

    } else {
        menuclicked = false
        document.querySelector(".catalog-filter__fields").style = 'max-height:0px;padding:0;'
  
    }
} 

function tipe(){
    if (!menuclicked) {
        menuclicked = true
        document.querySelector(".cff-tipe").style += 'max-height: 152px;'

    } else {
        menuclicked = false
        document.querySelector(".cff-tipe").style = 'max-height:0px;'
    }
}

function color(){
    if (!menuclicked) {
        menuclicked = true
        document.querySelector(".cff-color").style += 'max-height: 260px;'

    } else {
        menuclicked = false
        document.querySelector(".cff-color").style = 'max-height:0px;'
    }
}
function styyle(){
    if (!menuclicked) {
        menuclicked = true
        document.querySelector(".cff-style").style += 'max-height: 332px;'

    } else {
        menuclicked = false
        document.querySelector(".cff-style").style = 'max-height:0px;'
    }
}

function coating(){
    if (!menuclicked) {
        menuclicked = true
        document.querySelector(".cff-coating").style += 'max-height: 332px;'

    } else {
        menuclicked = false
        document.querySelector(".cff-coating").style = 'max-height:0px;'
    }
}

