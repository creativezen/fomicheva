import View from './view'
import Model from './model'

export function mobile() {
	const view = new View
    const model = new Model

	view.init()

	view.menu.burger.addEventListener('click', function (e) {
        model.open ? closeMenu() : openMenu()
	})

    view.menu.mobile?.querySelectorAll('a').forEach(link => link.addEventListener('click', function(e) {

        // let id = e.target.getAttribute('href')
        // let element = document.querySelector(id)

        if (model.open) closeMenu()

        // window.scroll({
        //     behavior: 'smooth',
        //     left: 0,
        //     top: element.offsetTop
        //   })
    }))

    function openMenu() {
        // view.append()
		view.open()
        model.open = true
        // console.log(model.open)
    }

    function closeMenu() {
        view.close()
        model.open = false
        // console.log(model.open)
    }
}