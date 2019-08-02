// noinspection ES6UnusedImports
import ChildComponent from './first.component.js';

export default class ParentComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        customElements
            .whenDefined('sfm-parent')
            .then(_ => this.render());
    }

    render() {
        console.log("Was called");
        this.root.innerHTML = `<sfm-child></sfm-child>`;
    }
}
customElements.define('sfm-parent', ParentComponent);