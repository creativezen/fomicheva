import showModel from "./showModel"
import showView from "./showView"

export function smi() {
    let model = new showModel()
    let view = new showView()

    if (!view.init()) return

    model.setTotalSmi(view.smi.cards.length)
    model.updateCounterSmi()
    
    setCounter()
    
    view.smi.button.addEventListener('click', function(e) {
        e.preventDefault()
        model.updateCounterSmi()
        setCounter()
    })
    
    function setCounter() {
        let count = model.smi.coun_total <= model.smi.count_init || model.smi.counter >= model.smi.coun_total
        if (count) view.hideButton()
        showCards()
    }

    function showCards() {
        let card
        
        for (let i = 0; i < model.smi.counter; i++) {
            card = view.smi.cards[i]
            card ? card.classList.remove('none') : false
        }
    }
}