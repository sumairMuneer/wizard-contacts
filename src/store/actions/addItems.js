import * as actionTypes from '../actionTypes'

export const addItemStart = (data) => {
    return {
        type: actionTypes.ADD_ITEM_START,
        data: data
    }
}

export const addItemSuccess = (data) => {
    return {
        type: actionTypes.ADD_ITEM_SUCCESS,
        data: data
    }
}


