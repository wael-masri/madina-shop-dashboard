import {
  FETCH_DATA_FAILURE_USER,
  FETCH_DATA_REQUEST_USER,
  FETCH_DATA_SUCCESS_USER,
  UPDATE_USER_ACTION,
} from "../Types";
import UserApi from "../../Api/UserApi";
export const fetchDataRequestUser = () => {
  const action = {
    type: FETCH_DATA_REQUEST_USER,
  };
  return action;
};
export const fetchDataSuccessUser = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_USER,
    payload: data,
  };
  return action;
};
export const fetchDataFailureUser = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_USER,
    payload: error,
  };
  return action;
};
export const updateUserAction = async (dispatch,id,data) => {
   const res = await UserApi.update(id,data);
   if(res){
    const action = {
      type: UPDATE_USER_ACTION,
      payload: res.data
    };
   
    return dispatch(action);
   }
 
};
