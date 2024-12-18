export default class View {
	menu = {
        header: null,
		burger: null,
        icon: null,
		main: null,
		mobile: null,
		list: null,
		links: null,
		close: null
	}

	init() {
        this.menu.header = document.getElementById('header')
		this.menu.burger = document.getElementById('menu-burger')
		/* this.menu.main = document.getElementById('main-navigation') */
		this.menu.mobile = document.getElementById('mobile-navigation')
        this.menu.icon = document.getElementById('menu-icon')
		this.menu.list = document.getElementById('mobile-navigation-list')
	}

	/* duplicate() {
		this.menu.links = this.menu.main.querySelectorAll('a')
		return this.menu.links
	} */

	/* append() {
		this.menu.links.forEach(link => {
			let linkHTML = `
				<a href="${link.href}">${link.textContent}</a>
			`
			this.menu.list.insertAdjacentHTML('beforeend', linkHTML)
		})
	} */

	open() {
        this.menu.mobile.classList.add('active')
        this.menu.burger.classList.add('active')
        this.menu.icon.classList.add('active')
        /* Делаем фон шапки прозрачным */
        /* this.menu.header.classList.add('transparent') */
        /* Прячем основную панель навигации */
        /* this.menu.main.classList.add('visually-hidden') */
	}
    
	close() {
        this.menu.mobile.classList.remove('active')
        this.menu.burger.classList.remove('active')
        this.menu.icon.classList.remove('active')
        /* Делаем фон шапки прозрачным */
        /* this.menu.header.classList.remove('transparent') */
        /* Возвращаем основную панель навигации */
        /* this.menu.main.classList.remove('visually-hidden') */
	}
}
