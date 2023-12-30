import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../constants/userConstant';
import { GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS } from '../constants/userConstant';

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const userActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null, // Reset error when starting a new operation
        // You can update state properties related to messages here
      };

    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };

    case SEND_MESSAGE_FAILURE:
    case GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userActionReducer;
