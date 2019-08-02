// noinspection ES6UnusedImports
import ChildComponent from './child.component.js';

export default class ParentComponent extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        customElements
            .whenDefined('sfm-parent')
            .then(() => this.render())
            .then(() => this.root.querySelector('sfm-child'))
            .then((node) => this._loadData(node));
    }

    render() {
        this.root.innerHTML = `<sfm-child></sfm-child>`;
    }

    _loadData(node) {
        fetch('/sfm/api/customers')
            .then(res => res.json())
            .then(({firstname, lastname})=> {
                node.firstname = firstname;
                node.lastname = lastname;
            });
    }
}
customElements.define('sfm-parent', ParentComponent);