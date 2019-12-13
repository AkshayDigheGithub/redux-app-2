import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import UserReducer from './Reducer/usersReducer';
import EmployeeReducer from './Reducer/employeeReducer';
import { logMiddleware } from './middleware/logmiddleware';

const allReducer = combineReducers({
    users: UserReducer,
    employee: EmployeeReducer
})


const initialState = {
    users: [],
    employee: []
}


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [thunk, logger, logMiddleware]

const store = createStore(allReducer, initialState, compose(applyMiddleware(...middleware), composeEnhancer));


export default store;