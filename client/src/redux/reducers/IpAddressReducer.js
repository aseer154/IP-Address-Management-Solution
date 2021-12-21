import * as ActionTypes from '../ActionTypes';
const initialState = {
    ipAddress: "",
};

const IpAddressReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionTypes.LOADING:
            return {
                ...state,
                ipAddress: "loading...",
            };
        case ActionTypes.LOAD_IP_ADDRESSES_SUCCESS:
            return {
                ...state,
                ipAddress: action.res,
            };
        case ActionTypes.LOAD_IP_ADDRESSES_ERROR:
            return {
                ...state,
                ipAddress: action.res,
            };
        case ActionTypes.ADD_IP_ADDRESS_SUCCESS:
            return {
                ...state,
                ipAddress: action.res,
            };
        case ActionTypes.ADD_IP_ADDRESS_ERROR:
            return {
                ...state,
                ipAddress: action.res,
            };
        case ActionTypes.CODE_ERROR:
            return {
                ...state,
                ipAddress: "There seems to be a problem, please refresh your browser",
            };
        default:
            return state;
    }
}

export default IpAddressReducer;