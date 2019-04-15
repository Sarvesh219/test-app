import { shallow } from 'enzyme';
import React from 'react';

import { findByTestAttr, testStore } from './../testUtils';
import App from './App';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;
};

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                body: 'Some Text',
                title: 'Example Title 1'
            }, {
                body: 'Some Text',
                title: 'Example Title 2'
            }, {
                body: 'Some Text',
                title: 'Example Title 3'
            }]
        };
        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
});