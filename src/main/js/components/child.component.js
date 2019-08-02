export default class ChildComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});

    }

    set firstname(firstname) {
        this.setAttribute("firstname", firstname);
    }
    get firstname() {
        return this.getAttribute("firstname");
    }

    set lastname(lastname) {
        this.setAttribute("lastname", lastname);
    }
    get lastname() {
        return this.getAttribute("lastname");
    }

    connectedCallback() {
        customElements
            .whenDefined('sfm-child')
            .then(() => this.render());
    }

    render() {
        this.root.innerHTML = `<div>Hello ${this.firstname} ${this.lastname}</div>`;
    }
}

customElements.define('sfm-child', ChildComponent);