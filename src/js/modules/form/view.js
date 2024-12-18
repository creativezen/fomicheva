export default class View {
    form = {
        service: {
            parent: null, // сама форма
            buttons: null, // кнопки вызываеющее форму
            name: null, // поле name формы
            title: null, // заголовок формы
        }
    }
    
    init() {
        // инициализация формы для консультации по услугам
        this.form.service.parent = document.getElementById('form-service') || undefined
        this.form.service.buttons = document.querySelectorAll('.js-button-service') || undefined
        this.form.service.name = document.getElementById('form-service-value') || undefined
        this.form.service.title = document.getElementById('form-service-title') || undefined

        return this.form
    }
}