import { fork, all } from 'redux-saga/effects'
import UserSaga from "../services/User/UserSaga"

export default function* rootSaga() {
    yield all([
        fork(UserSaga)
    ])
}