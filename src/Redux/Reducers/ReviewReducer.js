import {
  FETCH_DATA_FAILURE_REVIEW,
  FETCH_DATA_REQUEST_REVIEW,
  FETCH_DATA_SUCCESS_REVIEW,
  REMOVE_ITEM_REVIEW,
  UPDATE_REVIEW_USER_ACTION,
  UPDATE_USER_ACTION,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const ReviewReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_REVIEW:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS_REVIEW:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE_REVIEW:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    case REMOVE_ITEM_REVIEW:
      newState = { ...state };
      let updateState = newState.data.filter(
        (item) => item._id !== action.payload
      );
      newState = { ...state, data: updateState };
      return newState;
 
      case UPDATE_REVIEW_USER_ACTION:
        newState = { ...state };
        let posts = [...newState.data];
       
        const postIndex = posts.findIndex(
          (post) => post._id === action.payload._id
        );
        posts[postIndex] = action.payload;
       
        return { ...newState, data:posts };
    default:
      return state;
  }
};
export default ReviewReducer;
