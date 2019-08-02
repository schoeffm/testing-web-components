import {
    fixture,
    expect,
    html
} from '@open-wc/testing';
import { elementUpdated } from '@open-wc/testing-helpers';

import '../../js/components/first.component.js';

describe('First-Component', () => {
    let underTest;
    beforeEach(async () => {
        underTest = await fixture('<sfm-child></sfm-child>');
    });

    describe('When initialized', () => {
        it('will render', async () => {
            console.log(underTest.shadowRoot);
            await elementUpdated(underTest);
            console.log(underTest.data);
        });
    });
});