import {
  ADD_EMAIL_FORGET_PASSWORD,
  CLEAR_ALL_IMAGES,
  SET_ERROR_DATAGRID,
  SET_IMAGE1_AFTER_CROP,
  SET_IMAGE_AFTER_CROP,
  SET_IMAGE_NB,
  SET_IMAGE_upload,
  SET_OPEN_CROP_IMAGE,
  SET_ROW_ID,
  SET_URL_IMAGE1_AFTER_CROP,
  SET_URL_IMAGE_AFTER_CROP,
  SET_URL_IMAGE_POPUP,
  SET_USER_LOGIN,
  SET_DATA_SHOW_CATEGORY,
  SET_DATA_SHOW_BRAND,
  CHANGE_THEME_COLOR,
  ADD_KANBAN_DO,
  SET_COLUMN_KANBAN,
  SET_ITEM_KANBAN,
} from "../Types";

const initialState = {
  emailForgetPassword: null,
  kanbanDo: [],
  imageUrlPopup: "",
  rowId: null,
  errorDataGrid: "",
  userLogin: {},
  dataShowCategory: {},
  dataShowBrand: {},
  openCropImage: false,
  imageAfterCrop: null,
  imageUpload: null,
  urlImageAfterUpload: null,
  imageNb: null,
  urlImage1AfterUpload: null,
  urlImage2AfterUpload: null,
  urlImage3AfterUpload: null,
  urlImage4AfterUpload: null,
  urlImage5AfterUpload: null,
  image1AfterCrop: null,
  image2AfterCrop: null,
  image3AfterCrop: null,
  image4AfterCrop: null,
  image5AfterCrop: null,
  themeColor: null,
  columnKanban: null,
  itemKanban: null,
};

const OtherStateReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case ADD_EMAIL_FORGET_PASSWORD:
      newState = { ...state };
      newState.emailForgetPassword = action.payload;
      return newState;
    case SET_COLUMN_KANBAN:
      newState = { ...state };
      newState.columnKanban = action.payload;
      return newState;
    case SET_ITEM_KANBAN:
      newState = { ...state };
      newState.itemKanban = action.payload;
      return newState;
    case ADD_KANBAN_DO:
      newState = { ...state };
      newState.kanbanDo = action.payload;
      return newState;
    case SET_ROW_ID:
      newState = { ...state };
      newState.rowId = action.payload;
      return newState;
    case SET_ERROR_DATAGRID:
      newState = { ...state };
      newState.errorDataGrid = action.payload;
      return newState;
    case SET_URL_IMAGE_POPUP:
      newState = { ...state };
      newState.imageUrlPopup = action.payload;
      return newState;
    case SET_USER_LOGIN:
      newState = { ...state };
      newState.userLogin = action.payload;
      return newState;
    case SET_OPEN_CROP_IMAGE:
      newState = { ...state };
      newState.openCropImage = action.payload;
      return newState;
    case SET_IMAGE_AFTER_CROP:
      newState = { ...state };
      newState.imageAfterCrop = action.payload;
      return newState;
    case SET_IMAGE_upload:
      newState = { ...state };
      newState.imageUpload = action.payload;
      return newState;
    case SET_URL_IMAGE_AFTER_CROP:
      newState = { ...state };
      newState.urlImageAfterUpload = action.payload;
      return newState;
    case SET_IMAGE_NB:
      newState = { ...state };
      newState.imageNb = action.payload;
      return newState;
    case CLEAR_ALL_IMAGES:
      newState = { ...state };
      newState.imageAfterCrop = null;
      newState.imageUpload = null;
      newState.urlImageAfterUpload = null;
      newState.imageNb = null;
      newState.urlImage1AfterUpload = null;
      newState.urlImage2AfterUpload = null;
      newState.urlImage3AfterUpload = null;
      newState.urlImage4AfterUpload = null;
      newState.urlImage5AfterUpload = null;
      newState.image1AfterCrop = null;
      newState.image2AfterCrop = null;
      newState.image3AfterCrop = null;
      newState.image4AfterCrop = null;
      newState.image5AfterCrop = null;
      return newState;
    case SET_URL_IMAGE1_AFTER_CROP:
      newState = { ...state };
      if (action.nb === 1) {
        newState.urlImage1AfterUpload = action.payload;
      } else if (action.nb === 2) {
        newState.urlImage2AfterUpload = action.payload;
      } else if (action.nb === 3) {
        newState.urlImage3AfterUpload = action.payload;
      } else if (action.nb === 4) {
        newState.urlImage4AfterUpload = action.payload;
      } else if (action.nb === 5) {
        newState.urlImage5AfterUpload = action.payload;
      }

      return newState;
    case SET_IMAGE1_AFTER_CROP:
      newState = { ...state };
      if (action.nb === 1) {
        newState.image1AfterCrop = action.payload;
      } else if (action.nb === 2) {
        newState.image2AfterCrop = action.payload;
      } else if (action.nb === 3) {
        newState.image3AfterCrop = action.payload;
      } else if (action.nb === 4) {
        newState.image4AfterCrop = action.payload;
      } else if (action.nb === 5) {
        newState.image5AfterCrop = action.payload;
      }

      return newState;
    case SET_DATA_SHOW_CATEGORY:
      newState = { ...state };
      newState.dataShowCategory = action.payload;
      return newState;
    case SET_DATA_SHOW_BRAND:
      newState = { ...state };
      newState.dataShowBrand = action.payload;
      return newState;

    case CHANGE_THEME_COLOR:
      newState = { ...state };
      newState.themeColor = action.payload;
      return newState;

    default:
      return state;
  }
};
export default OtherStateReducer;
