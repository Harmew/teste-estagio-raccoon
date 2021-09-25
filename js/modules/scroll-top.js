import debounce from "./debounce.js";

export default class scrollTop {
    constructor(elemento, subida) {
        this.seta = document.querySelector(elemento);
        this.subidaElement = document.querySelector(subida);
        this.distance = this.subidaElement.offsetHeight * 0.1;

        this.checkDistance = this.checkDistance.bind(this);
        this.checkDistance = debounce(this.checkDistance.bind(this), 20);
    }

    getDistance() {
        if (this.actualDistante > this.distance) {
            this.seta.classList.add("active");
        } else {
            this.seta.classList.remove("active");
        }
    }

    checkDistance() {
        this.actualDistante = window.pageYOffset;
        this.getDistance();
    }

    subindo() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    addEvents() {
        this.seta.addEventListener("click", this.subindo);
    }

    init() {
        if (this.seta && this.subidaElement) {
            this.addEvents();
            this.getDistance();
            window.addEventListener("scroll", this.checkDistance);
        }
        return this;
    }
}
