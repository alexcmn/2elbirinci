import { combineReducers } from 'redux';
import layout_reducer from './layout_reducer';
import cars_reducer from './cars_reducer';

const rootReducer = combineReducers({
    layout_reducer,
    cars_reducer
})

export default rootReducer;