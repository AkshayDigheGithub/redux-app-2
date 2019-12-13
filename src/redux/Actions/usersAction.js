import Axios from 'axios';

export const GET_USER = "GET_USER";
export const GET_USER_LIST = "GET_USER_LIST";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const SUBMIT_EMAIL = "SUBMIT_EMAIL";


export const get_user = (dispatch) => {
    Axios.get('https://reqres.in/api/users')
        .then(res => dispatch({ type: GET_USER, payload: res.data.data }))
}

export const get_user_list = dispatch => {
    Axios.get('https://reqres.in/api/users/2')
        .then(res => dispatch({ type: GET_USER_LIST, payload: res.data.data })
        )
}

export const update_email = (value) => {

    return { type: UPDATE_EMAIL, payload: value }
}

export const submit_email = (data) => {
    return (dispatch) => {
        Axios.put('https://reqres.in/api/users/2', data)
            .then(res => {
                dispatch({ type: SUBMIT_EMAIL, payload: res.data })
            })
    }
}


