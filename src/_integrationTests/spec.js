import moxios from 'moxios';

import { fetchPosts } from './../actions';
import { testStore } from './../../testUtils';

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [{
            body: 'Example Body 1',
            title: 'Example Title 1'
        }, {
            body: 'Example Body 2',
            title: 'Example Title 2'
        }, {
            body: 'Example Body 3',
            title: 'Example Title 3'
        }];
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });
        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.posts).toBe(expectedState);
            })
    });
});