import {
    fixture,
    expect
} from '@open-wc/testing';
import { aTimeout } from '@open-wc/testing-helpers';

import '../../js/components/parent.component.js';

describe('Parent-Component', () => {
    let underTest;
    beforeEach(async () => {
        underTest = await fixture('<sfm-parent></sfm-parent>');
    });

    describe('When initialized', () => {
        it('will render, fetch data and update child-component', async () => {
            await aTimeout(100); // wait for the network call
            const child = underTest.shadowRoot.querySelector('sfm-child');

            expect(child.firstname).to.be.eq('johann');
            expect(child.lastname).to.be.eq('doe');

            expect(underTest.shadowRoot.innerHTML).to.be.eq('<sfm-child firstname="johann" lastname="doe"></sfm-child>');
        });
    });
});