import { shallow } from 'enzyme';
import React from 'react';

import { findByTestAttr } from './../../../testUtils';
import HeadLine from './index';
import { italic } from 'ansi-colors';

const setUp = (props={}) => {
    const component = shallow(<HeadLine {...props}/>);
    return component;
};

describe ('HeadLine Component', () => {
    describe('Have props', () => {
        let element;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            element = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(element, 'HeadLineComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAttr(element, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a description', () => {
            const p = findByTestAttr(element, 'desc');
            expect(p.length).toBe(1);
        });
    });

    describe('Have NO props', () => {
        let element;
        beforeEach(() => {
            element = setUp();
        });

        it('Should not render', () => {
            const component = findByTestAttr(element, 'HeadLineComponent');
            expect(component.length).toBe(0);
        });
    });
});