import SubCategoryApi from "../../Api/SubCategoryApi";
import { FETCH_DATA_FAILURE_SUB, FETCH_DATA_REQUEST_SUB, FETCH_DATA_SUCCESS_SUB, REMOVE_ITEM_SUB, UPDATE_SUBCATEGORY_STATUS } from "../Types";

  
  export const fetchDataRequestSub = () => {
    const action = {
      type: FETCH_DATA_REQUEST_SUB,
    };
    return action;
  };
  export const fetchDataSuccessSub = (data) => {
    const action = {
      type: FETCH_DATA_SUCCESS_SUB,
      payload: data,
    };
    return action;
  };
  export const fetchDataFailureSub = (error) => {
    const action = {
      type: FETCH_DATA_FAILURE_SUB,
      payload : error
    };
    return action;
  };
  export const removeItemSub = (id) => {
    const action = {
      type: REMOVE_ITEM_SUB,
      payload : id
    };
    return action;
  };
  export const updateSubcategoryAction = async (dispatch,id,data) => {
    const res = await SubCategoryApi.update(id,data);

    if(res){
      const result = await SubCategoryApi.getAllWithPopulate();
     const action = {
       type: UPDATE_SUBCATEGORY_STATUS,
       payload: result.data
     };
    
     return dispatch(action);
    }
  
  };