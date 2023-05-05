import CategoryApi from "../../Api/CategoryApi";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  REMOVE_ITEM,
  UPDATE_CATEGORY_STATUS,
} from "../Types";

export const fetchDataRequest = () => {
  const action = {
    type: FETCH_DATA_REQUEST,
  };
  return action;
};
export const fetchDataSuccess = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
  return action;
};
export const fetchDataFailure = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE,
    payload : error
  };
  return action;
};
export const removeItem = (id) => {
  const action = {
    type: REMOVE_ITEM,
    payload : id
  };
  return action;
};

export const updateCategoryAction = async (dispatch,id,data) => {
  const res = await CategoryApi.update(id,data);
  if(res){
   const action = {
     type: UPDATE_CATEGORY_STATUS,
     payload: res.data
   };
  
   return dispatch(action);
  }

};
