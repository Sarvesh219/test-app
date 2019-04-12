import { shallow } from 'enzyme';
import React from 'react';

import { checkProps, findByTestAttr } from './../../../testUtils';
import HeadLine from './index';

const setUp = (props={}) => {
    const component = shallow(<HeadLine {...props}/>);
    return component;
};

describe ('HeadLine Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                desc: 'Test Desc',
                header: 'Test Header',
                tempArr: [{
                    age: 23,
                    email: 'test@email.com',
                    fName: 'Test fName',
                    lName: 'Test lName',
                    onlineStatus: false
                }]
            };
            const propsErr = checkProps(HeadLine, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

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