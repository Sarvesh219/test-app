import { applyMiddleware, createStore } from 'redux';
import checkPropTypes from 'check-prop-types';

import { middlewares } from './../src/store';
import rootReducer from './../src/reducers';

export const findByTestAttr = (component, attr) => {
    const element = component.find(`[data-test='${attr}']`);
    return element;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = initialState => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};