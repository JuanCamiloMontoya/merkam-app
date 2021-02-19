import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./Sagas"
import rootReducers from './Reducers'

let sagaMiddleware = createSagaMiddleware()

const middleware = [
  ...getDefaultMiddleware({ thunk: false })
    .concat(sagaMiddleware)
]

const store = configureStore({
  reducer: rootReducers,
  middleware
})

sagaMiddleware.run(rootSaga)

export default store