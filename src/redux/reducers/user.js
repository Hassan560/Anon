import {
  REGISTER_SUCCESSFULL,
  REGISTER_FAIL,
  FACEBOOK_SUCCESSFULL,
  FACEBOOK_FAIL,
  GOOGLE_SUCCESSFULL,
  GOOGLE_FAIL,
  APPLE_SUCCESSFULL,
  APPLE_FAIL,
  LOGIN_SUCCESSFULL,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from "../constant/AuthConstant";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFULL:
    case LOGIN_SUCCESSFULL:
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case FACEBOOK_SUCCESSFULL:
    // eslint-disable-next-line
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case GOOGLE_SUCCESSFULL:
    // eslint-disable-next-line
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case APPLE_SUCCESSFULL:
    // eslint-disable-next-line
    case LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        user: null,
      };

    case REGISTER_FAIL:
    case FACEBOOK_FAIL:
    case GOOGLE_FAIL:
    case APPLE_FAIL:
    case LOGIN_FAIL:
    case LOAD_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
