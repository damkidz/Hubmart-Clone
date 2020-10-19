import {
  USER_LOADING,
  USER_LOADED_SUCCESS,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SHOW_MESSAGE
} from "../../actions/auth/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  currentUser: null,
  isLoading: false,
  errors: {},
  alertMessage: "",
  showMessage: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: payload,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
        currentUser: payload,
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        currentUser: null,
        token: null,
        error: payload,
      };
    case LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        currentUser: null,
        showMessage: true,
        alertMessage: 'You have logged out'
      };
    case SHOW_MESSAGE:
      return { ...state, alertMessage: payload, showMessage: true, isLoading: false };
    default:
      return state || INITIAL_STATE;
  }
};
