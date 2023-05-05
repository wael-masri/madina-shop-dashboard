import UserApi from "../../Api/UserApi";
import {
  FETCH_DATA_FAILURE_REVIEW,
  FETCH_DATA_REQUEST_REVIEW,
  FETCH_DATA_SUCCESS_REVIEW,
  REMOVE_ITEM_REVIEW,
  UPDATE_REVIEW_USER_ACTION
} from "../Types";

export const fetchDataRequestReview = () => {
  const action = {
    type: FETCH_DATA_REQUEST_REVIEW,
  };
  return action;
};
export const fetchDataSuccessReview = (data) => {
  const action = {
    type: FETCH_DATA_SUCCESS_REVIEW,
    payload: data,
  };
  return action;
};
export const fetchDataFailureReview = (error) => {
  const action = {
    type: FETCH_DATA_FAILURE_REVIEW,
    payload: error,
  };
  return action;
};
export const removeItemReview = (id) => {
  const action = {
    type: REMOVE_ITEM_REVIEW,
    payload: id,
  };
  return action;
};

export const updateUserReviewAction = async (dispatch,id,data,updated) => {
  const res = await UserApi.update(id,updated);
  if(res){
   const action = {
     type: UPDATE_REVIEW_USER_ACTION,
     payload: data
   };
  
   return dispatch(action);
  }

};
