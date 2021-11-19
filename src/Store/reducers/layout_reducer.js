import { OPEN_SIDEBAR } from 'Store/types';

const initialState = {
    sideBarOpen: false
};

export default function layout_reducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {
                ...state,
                sideBarOpen: !state.sideBarOpen
            }
        default:
            return state;
    }
}