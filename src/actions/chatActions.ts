import { store } from '../store/index';
export function saveAvatars(avatars) {
    return store.dispatch({
        type: 'SAVE_AVATARS',
        avatars
    });
}
