/* TODO: требует доработки */

export default class accordionView {
    element = {
        programm: {
            items: document.querySelectorAll('.js-programm-accordion')
        }
    }

    toggleItem(target) {
        if (!target.querySelector('details')) return

        target.querySelector('details').toggleAttribute('open')
        target.classList.toggle('active')
    }

    init() {
        if (!this.element.programm.items.length) return this.initError('.js-programm-accordion')
    }

    initError(selector) {
        console.log('---------------------------')
        console.log(`элементы ${selector} не были найден, проверь правильность разметки...`)
        console.log('либо отключи данный скрипт, если он не используется...')
        console.log('---------------------------')
        return false
    }
}