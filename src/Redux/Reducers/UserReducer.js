import {
  FETCH_DATA_FAILURE_USER,
  FETCH_DATA_REQUEST_USER,
  FETCH_DATA_SUCCESS_USER,
  UPDATE_USER_ACTION,
} from "../Types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const UserReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case FETCH_DATA_REQUEST_USER:
      newState = { ...state };
      newState.loading = true;
      return newState;

    case FETCH_DATA_SUCCESS_USER:
      newState = { ...state };
      newState.loading = false;
      newState.data = action.payload;
      return newState;

    case FETCH_DATA_FAILURE_USER:
      newState = { ...state };
      newState.loading = false;
      newState.error = action.payload;
      return newState;

    case UPDATE_USER_ACTION:
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
export default UserReducer;
