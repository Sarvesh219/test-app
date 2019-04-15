import { shallow } from 'enzyme';
import React from 'react';

import { checkProps, findByTestAttr } from './../../../testUtils';
import ListItem from './index';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', ()=> {
            const expectedProps = {
                desc: 'Some Text',
                title: 'Example Tilte'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('ListItem Component Renders', () => {
        let component;
        beforeEach(() => {
            const props = {
                desc: 'Some Text',
                title: 'Example Tilte'
            };
            component = shallow(<ListItem {...props} />);
        });

        it('Should render without error', () => {
            const list = findByTestAttr(component, 'listItemComponent');
            expect(list.length).toBe(1);
        });

        it('Should render a title', () => {
            const title = findByTestAttr(component, 'title');
            expect(title.length).toBe(1);
        });

        it('Should render a description', () => {
            const desc = findByTestAttr(component, 'description');
            expect(desc.length).toBe(1);
        });
    });

    describe('Title should NOT render', () => {
        let component;
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            };
            component = shallow(<ListItem {...props} />);
        });

        it('Component should not render', () => {
            const comp = findByTestAttr(component, 'listItemComponent');
            expect(comp.length).toBe(0);
        });
    });
});
