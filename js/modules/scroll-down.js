export default class ScrollDown {
    constructor(seta, scroll) {
        this.setinha = document.querySelector(seta)
        this.scrolar = document.querySelector(scroll)

        this.descer = this.descer.bind(this)
    }

    descer() {
        this.scrolar.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    addEvent() {
        this.setinha.addEventListener('click', this.descer)
    }


    init() {
        this.addEvent()
        return this
    }
}
