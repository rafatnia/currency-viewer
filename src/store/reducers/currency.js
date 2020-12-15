import * as actionTypes from './../actions/actionTypes';
import { updateUpject } from './../tools'

const initialState = {
    data: null,
    loading: false,
    error: null,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENCY_SUCCESS:
            return updateUpject(state, {data: action.payload})
        default: return state;
    }
}


export default reducer;