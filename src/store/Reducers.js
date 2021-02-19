import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from "../services/User/UserSlice"

const combineReducer = combineReducers({
  user: userReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout')
    state = undefined
  return combineReducer(state, action)
}

export default rootReducer