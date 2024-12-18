export default class servicesView {
    servicePrices = document.querySelectorAll('.js-service-cta') || undefined
    currentPrice = null
    serviceButtons = null
    currentButton = null

    init() {
        if (this.servicePrices === undefined) return false

        return true
    }
    
    toggleActive(priceTarget) {
        this.currentPrice = priceTarget.closest('.js-service-cta')
        this.currentButton = this.currentPrice.querySelector(`[data-price="${priceTarget.dataset.service}"]`)
        this.currentPrice.querySelector('.active[data-service]').classList.remove('active')
        this.serviceButtons = this.currentPrice.querySelectorAll('[data-price]')

        priceTarget.classList.add('active')
    }

    showActive() {
        this.serviceButtons.forEach(button => button.classList.add('none'))
        this.currentButton.classList.remove('none')
        this.currentPrice.querySelector('[data-]')
    }
}