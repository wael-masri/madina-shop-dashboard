import {
  FETCH_DATA_FAILURE_BRAND,
  FETCH_DATA_REQUEST_BRAND,
  FETCH_DATA_SUCCESS_BRAND,
  REMOVE_ITEM_BRAND,
  UPDATE_BRAND_STATUS,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const BrandReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_BRAND:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS_BRAND:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE_BRAND:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    case REMOVE_ITEM_BRAND:
      newState = { ...state };
      let updateState = newState.data.filter(
        (item) => item._id !== action.payload
      );
      newState = { ...state, data: updateState };
      return newState;
      case UPDATE_BRAND_STATUS:
        newState = { ...state };
        let posts = [...newState.data];
  
        const postIndex = posts.findIndex(
          (post) => post._id === action.payload._id
        );
        posts[postIndex] = action.payload;
  
        return { ...newState, data: posts };
    default:
      return state;
  }
};
export default BrandReducer;
