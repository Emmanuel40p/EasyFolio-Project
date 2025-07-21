let menu = document.querySelector('.menuBar')
let hamburger = document.querySelector('.hamburgerMenu')
let crossIcon = document.getElementById('cross-icon')
let icons = document.querySelector('.icons')
let menu_lists = document.querySelectorAll('menu_lists')
let lists = document.getElementById('lists')

// THIS IS THE DROPDOWN MENU BAR -------------------------------------

function dropDownMenu() {

    menu.setAttribute('style', 'display : block')
    hamburger.setAttribute('style', ' display : none')
    crossIcon.style.display = 'block'

}
function removeDdm() {
    menu.setAttribute('style', 'display : none')
    hamburger.setAttribute('style', 'display : flex')
    crossIcon.style.display = 'none'

}


function removeMenuOnClickLists() {
    menu.setAttribute('style', 'display:none')
    crossIcon.style.display = 'none'
    hamburger.setAttribute('style', 'display : flex')
}





// function hoverColour(hover) {
//     menu_lists.forEach
// }


