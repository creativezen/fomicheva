import popupsView from "./popupsView"

export function standart() {
    const view = new popupsView()

    if (view.init() === false) return

    view.element.buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            /* получили все данные вызываемого окна */
            let thisTarget = e.target.closest('.js-button-popup')
            /* получили тип отзыва */
            let type = thisTarget.dataset.type
            /* получили заголовок отзыва */
            let title = thisTarget.dataset.title
            /* получили содержимое отзыва */
            let content = thisTarget.dataset.content

            /* сохранили целевой элемент во view */ 
            view.element.target = thisTarget

            /* вызвали генерацию разметки и ее вывод в окне */
            view.showPopup(type, title, content)
        })
    })
}