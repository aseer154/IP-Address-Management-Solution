import {combineReducers} from "redux";
import AuthReducer from "./AuthReducer";
import IpAddressReducer from "./IpAddressReducer";

const RootReducer = combineReducers({
    userAuth: AuthReducer,
    ipAddressData: IpAddressReducer,
});

export default RootReducer;