import * as actionTypes from './actionTypes';
import axios from 'axios';




const getCurrencyStart = () => {
    return {
        type: actionTypes.GET_CURRENCY_START,
    }
}

const getCurrencySuccess = (data) => {
    return {
        type: actionTypes.GET_CURRENCY_SUCCESS,
        payload: data
    }
}

const getCurrencyFailed = () => {
    return {
        type: actionTypes.GET_CURRENCY_FAILED,
    }
}

export const getCurrency = () => {
    return dispatch => {
        dispatch(getCurrencyStart())
        axios.get('https://currency.jafari.li/json')
        .then(response => {
            dispatch(getCurrencySuccess(response.data));
            console.log(response.data);
        }).catch(error => {
            dispatch(getCurrencyFailed())
            console.log(error);
        })
    }
}
