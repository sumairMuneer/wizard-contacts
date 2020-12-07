import * as actionTypes from '../actionTypes'

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_START:
            return addItemStart(state, action)
        case actionTypes.ADD_ITEM_SUCCESS:
            return addItemSuccess(state, action)
        case actionTypes.ADD_ITEM_FAILURE:
            return addItemFailure(state, action)
        default:
            return state
    }
}

const addItemStart = (state, action) => {
    // console.log("addItemStart reducer ")
    return {...state, loading: true, error: null, data: null}
}

const addItemSuccess = (state, action) => {
    // console.log("addItemSuccess reducer ")
    return {...state, loading: false, error: null, data: action.data}
}

const addItemFailure = (state, action) => {
    return {...state, loading: false, error: null, data: action.data}
}
