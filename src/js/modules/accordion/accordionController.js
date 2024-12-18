import accordionView from './accordionView'


export function programm() {
    let view = new accordionView()

    if (view.init() === false) return

    view.element.programm.items.forEach(item => {
        item.addEventListener('click', (e) => {
            view.toggleItem(e.target.closest('.js-programm-accordion'))
        })
    })
}