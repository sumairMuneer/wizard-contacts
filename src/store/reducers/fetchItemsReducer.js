import * as actionTypes from '../actionTypes'

const initialState = {
    data: null,
    loading: false,
    error: null
}

export const fetchItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ITEMS_START:
            return fetchItemsStartReducer(state, action)
        case actionTypes.FETCH_ITEMS_SUCCESS:
            return fetchItemsSuccessReducer(state, action)
        case actionTypes.FETCH_ITEMS_FAILURE:
            return fetchItemsFailureReducer(state, action)
        default:
            return state;
    }
}
const fetchItemsStartReducer = (state, action) => {
    return {...state, error: null, loading: true, data: null}
}
const fetchItemsSuccessReducer = (state, action) => {
    // console.log(" data ", action.data)
    return {...state, error: null, loading: false, data: action.data}
}
const fetchItemsFailureReducer = (state, action) => {
    return {...state, error: action.error, loading: false, data: null}
}

