import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import examsReducer from './examsReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
    usersReducer,
    examsReducer,
    questionsReducer,
})

export default rootReducer;