import * as authActions from './types'
import axios from 'axios'
import {stopSubmit} from 'redux-form'


export const tokenConfig = getState => {
    // get token from state
    const token = getState().authReducer.token;

    // header config
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    };
    if(token){
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};

// LOADUSER DATA
export const loadUser = () => async(dispatch, getState) =>{
    
    dispatch({type: authActions.USER_LOADING});

    try {
        const data = await axios.get('api/auth/users', tokenConfig(getState))
        dispatch({type: authActions.USER_LOADED_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type: authActions.AUTH_ERROR, payload:error.message})
    }
}

// LOGIN USER
export const loginUser = ({username, password}) => async dispatch =>{
    //dispatch(loadUser());
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    const body = JSON.stringify({username, password});
      try {
        const res = await axios.post('/api/auth/login', body, config );
        dispatch({
          type: authActions.LOGIN_SUCCESS,
          payload: res.data
        });
      } catch (error) {
        dispatch({type:authActions.LOGIN_FAIL, payload:error.response.data});
        dispatch(stopSubmit('loginSignupForm', error.response.data));
      }
    };

    export const logoutUser = () => async (dispatch, getState) => {
        await axios.post('/api/auth/logout', null, tokenConfig(getState));
        dispatch({
          type: authActions.LOGOUT_SUCCESS
        });
      }; 
