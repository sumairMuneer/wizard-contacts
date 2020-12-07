import * as actionTypes from '../actionTypes'

export const fetchItems = () => {
    return {
        type: actionTypes.FETCH_ITEMS_START
    }
}
export const fetchItemsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_ITEMS_SUCCESS,
        data
    }
}
export const fetchItemsFailure = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAILURE
    }
}
