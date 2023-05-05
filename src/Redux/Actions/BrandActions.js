import BrandApi from "../../Api/BrandApi";
import {
  FETCH_DATA_FAILURE_BRAND,
  FETCH_DATA_REQUEST_BRAND,
  FETCH_DATA_SUCCESS_BRAND,
  REMOVE_ITEM_BRAND,
  UPDATE_BRAND_STATUS,
} from "../Types";

export const fetchDataRequestBrand = () => {
  const action = {
    type: FETCH_DATA_REQUEST_BRAND,
  };
  return action;
};
export const fetchDataSuccessBrand = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_BRAND,
    payload: data,
  };
  return action;
};
export const fetchDataFailureBrand = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_BRAND,
    payload: error,
  };
  return action;
};
export const removeItemBrand = (id) => {
  const action = {
    type: REMOVE_ITEM_BRAND,
    payload: id,
  };
  return action;
};
export const updateBrandAction = async (dispatch,id,data) => {
  const res = await BrandApi.update(id,data);
  if(res){
   const action = {
     type: UPDATE_BRAND_STATUS,
     payload: res.data
   };
  
   return dispatch(action);
  }

};