import {all} from 'redux-saga/effects'

import {AddItemSaga, FetchItemsSaga} from './itemSagas'

export default function* rootSaga() {
    // console.log(" root saga")
    yield all(
        [
            AddItemSaga(),
            FetchItemsSaga()
        ]
    )
}
