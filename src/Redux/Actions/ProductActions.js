import {
    FETCH_DATA_FAILURE_PRODUCT,
    FETCH_DATA_REQUEST_PRODUCT,
    FETCH_DATA_SUCCESS_PRODUCT,
    REMOVE_ITEM_PRODUCT
  } from "../Types";
 
  export const fetchDataRequestProduct = () => {
    const action = {
      type: FETCH_DATA_REQUEST_PRODUCT,
    };
    return action;
  };
  export const fetchDataSuccessProduct = (data) => {
    const action = {
      type: FETCH_DATA_SUCCESS_PRODUCT,
      payload: data,
    };
    return action;
  };
  export const fetchDataFailureProduct = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_PRODUCT,
      payload: error,
    };
    return action;
  };
  export const removeProduct = (id) => {
    const action = {
      type: REMOVE_ITEM_PRODUCT,
      payload : id
    };
    return action;
  };
 
   
  
  