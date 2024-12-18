export default class Model {
    // Скорость - это свойство класса; однако оно не используется в текущем коде.
    speed = -40
    
    // Метод, возвращающий текущее вертикальное положение прокрутки окна
    getWinPosition() {
        return window.scrollY;
    }

    // Метод, возвращающий высоту видимой части документа (высота окна браузера)
    getDocHeight() {
        return document.documentElement.clientHeight;
    }
}
