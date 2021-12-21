import {AddIpAddressService, LoadIpAddressData} from '../../services/IpAddressServices';
import * as ActionTypes from '../ActionTypes';

export const LoadIpAddressesData = () => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.LOADING });

        LoadIpAddressData()
            .then((res) => {
                if (res.hasOwnProperty('success') && res.success === true)
                {
                    dispatch({ type: ActionTypes.LOAD_IP_ADDRESSES_SUCCESS, res });
                }
                else if (res.hasOwnProperty('success') && res.success === false)
                {
                    dispatch({ type: ActionTypes.LOAD_IP_ADDRESSES_ERROR, res });
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            });
    }
}

export const AddIpAddressData = (data, navigate) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });

        AddIpAddressService(data)
            .then((res) => {
                if (res.hasOwnProperty('success') && res.success === true)
                {
                    dispatch({ type: ActionTypes.ADD_IP_ADDRESS_SUCCESS, res });
                    setTimeout(() => {
                        navigate("/");
                    }, 1500);
                }
                else if (res.hasOwnProperty('success') && res.success === false)
                {
                    dispatch({ type: ActionTypes.ADD_IP_ADDRESS_ERROR, res })
                }
            }, error => {
                dispatch({ type: ActionTypes.CODE_ERROR, error });
            })
    }
}