import {fixture, expect} from '@open-wc/testing';

import '../../js/components/child.component.js';

describe('Child-Component', () => {
    let underTest;
    beforeEach(async () => {
        underTest = await fixture('<sfm-child firstname="Luke" lastname="Skywalker"></sfm-child>');
    });

    describe('When initialized', () => {
        it('will render given properties', async () => {
            expect(underTest.firstname).to.be.eq('Luke');
            expect(underTest.lastname).to.be.eq('Skywalker');
            expect(underTest.shadowRoot.innerHTML).to.be.eq('<div>Hello Luke Skywalker</div>')
        });
    });
});