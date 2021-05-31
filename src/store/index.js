import { combineReducers } from 'redux'
import Contact from './reducers/Contact'

const rootReducer = combineReducers({
  contact: Contact,
})

export default rootReducer
