import createSagaMiddleWare from 'redux-saga'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleWare()
const localStorageName = 'wizard_contacts'


export default class PersistedStore {

    static defaultStore = null

    static getDefaultStore() {
        if (PersistedStore.defaultStore === null) {
            PersistedStore.defaultStore = new PersistedStore()
        }
        return PersistedStore.defaultStore
    }

    // redux store

    _store = null

    constructor() {
        this.initStore()
    }

    initStore() {
        this._store = createStore(rootReducer, PersistedStore.loadState(), applyMiddleware(sagaMiddleware));
        sagaMiddleware.run(rootSaga)
        this._store.subscribe(() => {
            PersistedStore.saveState(this._store.getState());
        });
    }

    get store() {
        return this._store
    }

    static loadState() {
        try {
            let serializedState = localStorage.getItem(localStorageName)
            if (serializedState) {
                return JSON.parse(serializedState)
            }

        } catch (e) {
            return PersistedStore.initialState()
        }

    }

    static saveState(state) {
        try {
            let serializedState = JSON.stringify(state)
            localStorage.setItem(localStorageName, serializedState)
        } catch (e) {

        }
    }

    static initialState() {
        return {}
    }

}
