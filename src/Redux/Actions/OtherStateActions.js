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
  SET_ITEM_KANBAN
} from "../Types";

export const setEmailForgetPassword = (email) => {
  const action = {
    type: ADD_EMAIL_FORGET_PASSWORD,
    payload: email,
  };
  return action;
};

export const addToKanbanDo = (arr) => {
  const action = {
    type: ADD_KANBAN_DO,
    payload: arr,
  };
  return action;
};


export const setRowId = (payload) => {
  const action = {
    type: SET_ROW_ID,
    payload,
  };
  return action;
};

export const setErrorDataGrid = (payload) => {
  const action = {
    type: SET_ERROR_DATAGRID,
    payload,
  };
  return action;
};
export const setImageUrlPopup = (payload) => {
  const action = {
    type: SET_URL_IMAGE_POPUP,
    payload,
  };
  return action;
};
export const setUserLogin = (payload) => {
  const action = {
    type: SET_USER_LOGIN,
    payload,
  };
  return action;
};

export const setOpenCropImage = (payload) => {
  const action = {
    type: SET_OPEN_CROP_IMAGE,
    payload,
  };
  return action;
};
export const setImageAfterCrop = (payload) => {
  const action = {
    type: SET_IMAGE_AFTER_CROP,
    payload,
  };
  return action;
};
export const setImageUpload = (payload) => {
  const action = {
    type: SET_IMAGE_upload,
    payload,
  };
  return action;
};
export const setUrlImageAfterUpload = (payload) => {
  const action = {
    type: SET_URL_IMAGE_AFTER_CROP,
    payload,
  };
  return action;
};
export const setImageNb = (payload) => {
  const action = {
    type: SET_IMAGE_NB,
    payload,
  };
  return action;
};

export const setUrlImage1AfterUpload = (payload,nb) => {
  const action = {
    type: SET_URL_IMAGE1_AFTER_CROP,
    payload,
    nb
  };
  return action;
};
export const setImage1AfterCrop = (payload,nb) => {
  const action = {
    type: SET_IMAGE1_AFTER_CROP,
    payload,
    nb
  };
  return action;
};
export const clearImages = () => {
  const action = {
    type: CLEAR_ALL_IMAGES,
  };
  return action;
};

export const setDataShowCategory = (payload) => {
  const action = {
    type: SET_DATA_SHOW_CATEGORY,
    payload,
    
  };
  return action;
};
export const setDataShowBrand = (payload) => {
  const action = {
    type: SET_DATA_SHOW_BRAND,
    payload,
    
  };
  return action;
};
export const changeThemeColor = (payload) => {
  const action = {
    type: CHANGE_THEME_COLOR,
    payload,
    
  };
  return action;
};
export const setColumnKanban = (payload) => {
  const action = {
    type: SET_COLUMN_KANBAN,
    payload,
  };
  return action;
};
export const setItemKanban = (payload) => {
  const action = {
    type: SET_ITEM_KANBAN,
    payload,
  };
  return action;
};


