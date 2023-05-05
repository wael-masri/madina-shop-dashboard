import {
  FETCH_DATA_FAILURE_SUB,
  FETCH_DATA_REQUEST_SUB,
  FETCH_DATA_SUCCESS_SUB,
  REMOVE_ITEM_SUB,
  UPDATE_SUBCATEGORY_STATUS,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const SubCategoryReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_SUB:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS_SUB:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE_SUB:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    case REMOVE_ITEM_SUB:
      newState = { ...state };
      let updateState = newState.data.filter(
        (item) => item._id !== action.payload
      );
      newState = { ...state, data: updateState };
      return newState;
    case UPDATE_SUBCATEGORY_STATUS:
      newState = { ...state };
      let posts = [];
      posts = action.payload;
      return { ...newState, data: posts };
    default:
      return state;
  }
};
export default SubCategoryReducer;
