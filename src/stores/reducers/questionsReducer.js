import {
  GET_ALL_QUESTION,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_ERROR,
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR
} from '../../constant/index';

const nameInitialState = {
  questions: []
};

const getAllQuestionsReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case GET_ALL_QUESTION:
      return { ...state }
    case GET_ALL_QUESTION_SUCCESS:
      return {
        ...state,
        questions: action.data
      }
    case GET_ALL_QUESTION_ERROR:
      return { ...state }
    case DELETE_QUESTION:
      return { ...state }
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        questions: state.questions.filter(question => question.id !== action.data.id)
      }
    case DELETE_QUESTION_ERROR:
      return { ...state }
    default:
      return state
  }
}

export default getAllQuestionsReducer;