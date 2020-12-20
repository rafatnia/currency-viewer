import * as actionTypes from './../actions/actionTypes';
import { updateUpject } from './../tools'

const initialState = {
    data: null,
    loading: false,
    error: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENCY_START:
            return updateUpject(state, {loading: true, error: false});
        case actionTypes.GET_CURRENCY_SUCCESS:
            return updateUpject(state, {data: action.payload, loading: false});
        case actionTypes.GET_CURRENCY_FAILED:
            return updateUpject(state, {loading: false, error: true});
        default: return state;
    }
}


export default reducer;