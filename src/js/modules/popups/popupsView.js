export default class popupsView {
    element = {
        type: 'Это не отзыв',
        /* parent: document.getElementById('popups') || undefined, */
        buttons: document.querySelectorAll('.js-button-popup'),
        target: null,
        modal: {
            video: null,
            image: null,
            text: null,
            close: null
        }
    }

    init() {
        if (!this.element.buttons.length) return this.initError()

        /* сохранили контейнеры куда выводим отзыв в модальном окне */
        this.element.modal.video = document.getElementById('modal-video')
        this.element.modal.image = document.getElementById('modal-image')
        this.element.modal.text = document.getElementById('modal-text')

        return true
    }

    showPopup = (type, title, content) => {
        if (!type) return this.typeError()

        /* показываем вызываемый отзыв */
        switch (type) {
            case 'text': this.insertText(title)
            break
            case 'image': this.insertImage(content, title)
            break
            case 'youtube': this.insertVideo(content, title, 'youtube')
            break
            case 'rutube': this.insertVideo(content, title, 'rutube')
        }
        
    }
 
    /* показываем текстовый отзыв */
    insertText(title) {
        if (!title) return this.titleError()
        this.cleanModal('text')

        let text = document.querySelector(`[data-text="${title}"]`).innerHTML
        let html = `<h3>${title}</h3>${text}`

        this.element.modal.text.insertAdjacentHTML('beforeend', html)
    }
    
    /* показываем скриншот */
    insertImage(content, title) {
        if (!content) return this.contentError()

        this.cleanModal('image')

        let html = title
            ? `<h3>${title}</h3><img src="${content}">`
            : `<img src="${content}">`

        this.element.modal.image.insertAdjacentHTML('beforeend', html)
    }

    /* показываем видео отзыв */
    insertVideo(content, title, platform) {
        if (!content) return this.contentError()
            
        this.cleanModal('video')

        if (platform === 'youtube') {
            let html = title
                ? `<h3>${title}</h3><iframe src="https://www.youtube.com/embed/${content}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
                : `<iframe src="https://www.youtube.com/embed/${content}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

            this.element.modal.video.insertAdjacentHTML('beforeend', html)
        }

        if (platform === 'rutube') {
            let html = title 
                ? `<h3>${title}</h3><iframe src="https://rutube.ru/play/embed/${content}/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`
                : `<iframe src="https://rutube.ru/play/embed/${content}/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`

            this.element.modal.video.insertAdjacentHTML('beforeend', html)
        }
        
    }

    cleanModal(modal) {
        this.element.modal[modal].innerHTML = ''
    }

    initError() {
        console.log('---------------------------')
        console.log('элементы .js-button-popup" не были найден, проверь правильность разметки...')
        console.log('либо отключи данный скрипт, если он не используется...')
        console.log('---------------------------')
        return false
    }

    typeError() {
        console.log('---------------------------')
        console.log(this.element.target)
        console.log('не было передано значение data-type=" ??? "')
        console.log('содержимое попапа не будет показано. проверь правильность разметки...')
        console.log('---------------------------')
        return
    }

    contentError() {
        console.log('---------------------------')
        console.log(this.element.target)
        console.log('не было передано значение data-content=" ??? "')
        console.log('содержимое попапа не будет показано. проверь правильность разметки...')
        console.log('---------------------------')
        return
    }

    titleError() {
        console.log('---------------------------')
        console.log(this.element.target)
        console.log('не было передано значение data-title=" ??? "')
        console.log('для текстового попапа, данный атрибут является обязательным. проверь правильность разметки...')
        console.log('---------------------------')
        return
    }
}