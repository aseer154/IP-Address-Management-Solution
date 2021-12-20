import * as ActionTypes from '../ActionTypes';
import { RegisterUserService, LoginUserService, LogoutUserService } from '../../services/AuthServices';

export const RegisterAction = (credentials) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });

        RegisterUserService(credentials)
            .then((res) => {
                if (res.hasOwnProperty('success') && res.success === true)
                {
                    dispatch({ type: ActionTypes.SIGNUP_SUCCESS, res });
                }
                else if (res.hasOwnProperty('success') && res.success === false)
                {
                    dispatch({ type: ActionTypes.SIGNUP_ERROR, res });
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            })
    }
}

export const LoginAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });

        LoginUserService(credentials)
            .then((res) => {
                if (res.hasOwnProperty('succes') && res.succes === true)
                {
                    localStorage.setItem('user-token', res.access_token);
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS });
                    setTimeout(() => {
                        history.push('/user');
                    }, 1500);
                }
                else if (res.hasOwnProperty('success') && res.succes === false)
                {
                    dispatch({ type: ActionTypes.LOGIN_ERROR, res });
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            })
    }
}

export const LogoutAction = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });

        LogoutUserService()
            .then((res) => {
                if (res.hasOwnProperty('success') && res.success === true)
                {
                    dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
                }
                else if (res.hasOwnProperty('success') && res.success === false)
                {
                    dispatch({ type: ActionTypes.LOGOUT_ERROR });
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            })
    }
}