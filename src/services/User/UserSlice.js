import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isAuthenticated: false,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers() { },
    setUsers(state, { payload }) {
      state.users = payload
      state.loading = false
    },
    setSession(state, { payload }) {
      state.isAuthenticated = payload
    },
    getUsersFail(state, { payload }) {
      state.error = payload
      state.loading = false
    },
  }
})

const userActions = userSlice.actions
const userReducer = userSlice.reducer

export { userActions, userReducer }