import { combineReducers } from 'redux';
import { demoReducer } from './demoReducer';
import { combineForms } from 'react-redux-form';
import { chatReducer } from './chatReducer';

let forms = combineForms({
    demoForm: {
        question1: false
    }
});

let reducer = combineReducers({
    demo: demoReducer,
    chat: chatReducer,
    forms
});

export const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return reducer(state, action);
};
