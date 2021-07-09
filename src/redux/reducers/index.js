import state from './user'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    state,
})

export default rootReducer