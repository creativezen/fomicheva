import servicesView from "./servicesView"

export function togglePrice() {
    const view = new servicesView()
 
    if (view.init() == false) initError()

    view.servicePrices.forEach(price => price.addEventListener('click', setPrice))

    function setPrice(e) {
        let thisPrice = e.target.closest('[data-service]') || false

        if (e.target.closest('.js-button-service')) return

        if (thisPrice && !thisPrice.classList.contains('active')) {
            view.toggleActive(thisPrice)
            view.showActive()
        }
    }

    function initError() {
        console.log('-------------------------')
        console.log('элементы .js-service-price в разметке не обнаружены...')
        console.log('проверь разметку, или отключи данный скрипт, либо проигнорируй это сообщение')
        console.log('-------------------------')
    }
}