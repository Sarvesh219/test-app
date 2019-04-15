import { shallow } from 'enzyme';
import React from 'react';

import { checkProps, findByTestAttr } from './../../../testUtils';
import SharedButton from './index';

describe('SharedButton Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {}
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders a button', () => {
        let component;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {}
            };
            component = shallow(<SharedButton {...props} />);
        });

        it('Should render a button', () => {
            const button = findByTestAttr(component, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });
});


