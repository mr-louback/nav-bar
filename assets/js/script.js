function showMenu() {
    let menu = document.querySelector('.menu')
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
        document.querySelector('.btn-span').textContent = "Menu"
    } else {
        menu.classList.add('open')
        document.querySelector('.btn-span').textContent = "Exit"
    }
}