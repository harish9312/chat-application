import { Store, compose, createStore } from 'redux';
import { ICA } from '../interfaces';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/index';
import { applyMiddleware } from 'redux';

export function configureStore(initialState: Object = {}): Store<ICA> {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(...getMiddlewares())
        )
    );
    return store;
}

function getMiddlewares() {
    let middlewares = [
        thunk,
        promiseMiddleware()
    ];
    return middlewares;
}

export const store = configureStore();
