import Inputmask from 'inputmask'
import View from './view'
import Model from './model'

// INPUTMASK FOR PHONE
export const mask = () => {
  const telInputArray = Array.from(document.querySelectorAll('input[type="tel"]'))
  if (telInputArray.length) {
    telInputArray.forEach((input) => {
      const inputMask = new Inputmask('+7 (999) 999-99-99')
      inputMask.mask(input)
    })
  }
}

export const service = () => {
    const view = new View()
    const model = new Model()

    view.init()

    // проверяем наличие нужной формы
    if (view.form.service.parent === undefined) {
        console.log('Форма для заказа консультации по услугам не обнаружена')
        return false
    }

    // проверяем наличие нужных кнопок
    if (view.form.service.buttons === undefined) {
        console.log('Кнопки для вызова формы с консультацией по услугам не обнаружены')
        return false
    }

    // слушаем кнопки вызова формы для консультации по услугам
    view.form.service.buttons.forEach(button => {
        button.addEventListener('click', getServiceTitle)
    })
    
    function getServiceTitle(e) {
        let thisButton = e.target.closest('.js-button-service')
        // сохраняем в модель название услуги
        model.form.service.title = thisButton.dataset.title
        // обновляем данные в размекте
        view.form.service.name.value = model.form.service.title
        view.form.service.title.textContent = model.form.service.title
    }
}