import { GET_EMPLOYEE } from '../Actions/employeeAction';
const EmployeeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case GET_EMPLOYEE:
            return payload

        default:
            return state
    }
}

export default EmployeeReducer;