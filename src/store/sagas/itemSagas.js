import {put, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import axios from 'axios'

function* addItem(action) {

    const data = action.data
    const data1 = {login: true}
    yield put(actions.addItemSuccess(data1))
}

export function* AddItemSaga() {
    yield takeLatest(actionTypes.ADD_ITEM_START, addItem)
}

function* fetchItems(action) {

    try {
        let response = yield axios.get('http://jugadapi.zederp.net/api/item')
        console.log(" response ", response)
        const data = {hi: 2, lo: 56}
        yield put(actions.fetchItemsSuccess(response.data))

    } catch (e) {
        let error = {error: 'network error'}
        yield put(actions.fetchItemsFailure(error))
    }
}

export function* FetchItemsSaga() {
    yield takeLatest(actionTypes.FETCH_ITEMS_START, fetchItems)
}
