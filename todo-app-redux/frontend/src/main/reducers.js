import {combineReducers} from 'redux'

import TodoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo: TodoReducer 
});

export default rootReducer;