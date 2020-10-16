import {
  USER_LOADING,
  USER_LOADED_SUCCESS,
  AUTH_ERROR,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "../../actions/auth/types";

const INITIAL_STATE = {
  token:{},
  isAuthenticated: null,
  currentUser: null,
  isLoading: false,
  error: {},
  initURL: "",
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        currentUser: action.payload,
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        currentUser: null,
        token: null,
      };
    case LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        currentUser: null,
      };
    default:
      return state || INITIAL_STATE;
  }
};
