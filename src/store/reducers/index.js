import {combineReducers} from "redux";

import {itemReducer} from './addItemReducer'
import {fetchItemsReducer} from "./fetchItemsReducer";

export const rootReducer = combineReducers({
    itemReducer,
    fetchItemsReducer
})


