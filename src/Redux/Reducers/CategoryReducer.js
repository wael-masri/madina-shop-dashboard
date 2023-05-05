import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  REMOVE_ITEM,
  UPDATE_CATEGORY_STATUS,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const CategoryReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    case REMOVE_ITEM:
      newState = { ...state };
      let updateState = newState.data.filter(
        (item) => item._id !== action.payload
      );
      newState = { ...state, data: updateState };
      return newState;

    case UPDATE_CATEGORY_STATUS:
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
export default CategoryReducer;
