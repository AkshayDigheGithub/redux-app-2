import { GET_USER, GET_USER_LIST, UPDATE_EMAIL, SUBMIT_EMAIL } from '../Actions/usersAction';

const UserReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case GET_USER:
            return payload

        case GET_USER_LIST:
            return payload

        case UPDATE_EMAIL:
            return Object.assign({}, state, { email: payload })

        case SUBMIT_EMAIL:
            return payload

        default:
            return state
    }
}
export default UserReducer;