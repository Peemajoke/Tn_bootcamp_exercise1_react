import nameReducer from './nameReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  name: nameReducer
})

export default rootReducer