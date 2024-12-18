import Model from "./scrollModel"
import View from "./scrollView"

// Функция, управляющая видимостью кнопки "Наверх"
export function top() {
    // Создаем экземпляр Model для доступа к методам получения позиции и высоты
    let model = new Model()
    // Создаем экземпляр View для взаимодействия с элементами страницы
    let view = new View()

    // Инициализируем вид и прекращаем выполнение функции, если инициализация не удалась
    if (view.init() === false) return

    // Устанавливаем обработчик события scroll для окна
    window.addEventListener('scroll', toggleButton)

    // Функция для переключения видимости кнопки на основе позиции прокрутки
    function toggleButton() {
        // Вызываем метод trackScroll из view для определения видимости кнопки
        view.trackScroll(
            model.getWinPosition(), // передаем текущую позицию прокрутки
            model.getDocHeight()    // передаем высоту видимой части документа
        )
    }
}
