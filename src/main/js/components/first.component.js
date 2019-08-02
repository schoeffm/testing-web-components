export default class ChildComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.data = {};
    }

    async connectedCallback() {

        fetch('/sfm/api/customers')
            .then(res => res.json())
            .then(data => this.data = data);

        customElements
            .whenDefined('sfm-child')
            .then(_ => this.render());
    }

    render() {
        this.root.innerHTML = `<div>Hello Child</div>`;
    }
}

customElements.define('sfm-child', ChildComponent);