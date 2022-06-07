import nameReducer from './nameReducer'
import resultReducer from './resultReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  name: nameReducer,
  result: resultReducer
})

export default rootReducer