export default class showView {
    smi = {
        parent: document.getElementById('smi'),
        cards: null,
        button: null,
        footer: null
    }

    init() {
        if (!this.smi.parent) return this.initError('smi')

        this.smi.cards = this.smi.parent.querySelectorAll('.js-card-smi')
        this.smi.button = this.smi.parent.querySelector('.js-button-show-smi')
        this.smi.footer = this.smi.parent.querySelector('.js-footer-smi')

        this.hideCards()

        return true
    }

    hideCards() {
        this.smi.cards.forEach(card => card.classList.add('none'))
    }

    hideButton() {
        this.smi.button.classList.add('none')
    }

    initError(element) {
        console.log('---------------------------')
        console.log(`блок id="${element}" не был найден`)
        console.log('либо отключи данный скрипт, если он не используется...')
        console.log('---------------------------')
        return false
    }
}