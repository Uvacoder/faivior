import { combineReducers } from 'redux'
import UserData from './reducers/User'
import DashStats from './reducers/DashStats'


const rootReducer = combineReducers({
  user: UserData,
  dashStats: DashStats
})

export default rootReducer
