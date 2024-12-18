export default class view {
    // Объект element хранит ссылки на элементы страницы
    element = {
        // Кнопка "Наверх" для вертикального перемещения пользователя
        topId: document.getElementById('up'),
        // Кнопка, которая должна появляться по достижении определенной позиции прокрутки
        buttonTop: document.getElementById('button-top')
    }

    // Метод инициализации для проверки наличия необходимых элементов на странице
    init() {
        if (this.element.topId === null) return this.initError('up')
        if (this.element.buttonTop === null) return this.initError('button-top')
        return true // Успешная инициализация
    }

    // Метод trackScroll управляет видимостью кнопки buttonTop
    trackScroll = (position, height) => {
        // Если вертикальная позиция прокрутки более чем в четыре раза превышает высоту окна,
        // добавляем класс 'active', чтобы сделать кнопку видимой
        position > (height * 2)
            ? this.element.buttonTop.classList.add('active')
            : this.element.buttonTop.classList.remove('active')
    }

    // Логирует ошибку и возвращает false, если элемент не найден на странице
    initError(id) {
        console.log('--------------------------------')
        console.log(`Элемент с id=#${id} не найден, проверь правильность разметки...`)
        console.log('Либо отключи данный скрипт, если он не используется...')
        console.log('--------------------------------')
        return false
    }
}
