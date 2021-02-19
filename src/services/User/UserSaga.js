import { takeLatest, all, put } from 'redux-saga/effects'

import { userActions } from './UserSlice'
import Api from '../../common/api/Api'

function* getUsers() {
  const response = yield Api.get('/users')
  if (response.ok) {
    yield put(userActions.setUsers(response.payload))
  } else {
    yield put(userActions.getUsersFail({ codigo: '', message: '' }))
  }
}

function* actionWatcher() {
  yield takeLatest(userActions.getUsers, getUsers)
}

export default function* usersSaga() {
  yield all([actionWatcher()])
}