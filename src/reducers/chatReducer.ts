import { fromJS } from 'immutable';

export function chatReducer(state = fromJS({}), action) {
    switch (action.type) {
        case 'SAVE_AVATARS':
            return state.set('avatars', action.avatars);
        default:
            return state;
    }
}
