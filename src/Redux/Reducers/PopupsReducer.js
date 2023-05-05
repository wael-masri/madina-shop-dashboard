import {
  CHANGESTATUSFORGETPASSWORD,
  CHANGESTATUSFORSHOCATEGORY,
  CHANGESTATUSIMAGE,
  CHANGESTATUSMENU,
  CHANGESTATUSMODE,
  CHANGESTATUSPROFILE,
  CHANGESTATUSSETTING,
  CHANGESTATUSFORSHOWBRAND,
  CHANGE_STATUS_ADD_KANBAN,
  CHANGE_STATUS_EDIT_KANBAN
} from "../Types";

const initialState = {
  isMenu: true,
  isMode: false,
  isProfile: false,
  isSetting: false,
  isKanbanWork: false,
  isImage: false,
  isForgetPassword: false,
  isShowCategory: false,
  isShowBrand: false,
  isKanbanEdit:false
};

const PopupsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case CHANGESTATUSMENU:
      newState = { ...state };
      newState.isMenu = action.stts;
      return newState;
    case CHANGESTATUSMODE:
      newState = { ...state };
      newState.isMode = action.stts;
      return newState;
    case CHANGESTATUSPROFILE:
      newState = { ...state };
      newState.isProfile = action.stts;
      return newState;
    case CHANGESTATUSSETTING:
      newState = { ...state };
      newState.isSetting = action.stts;
      return newState;
    case CHANGE_STATUS_ADD_KANBAN:
      newState = { ...state };
      newState.isKanbanWork = action.stts;
      return newState;
    case CHANGESTATUSIMAGE:
      newState = { ...state };
      newState.isImage = action.stts;
      return newState;
    case CHANGESTATUSFORGETPASSWORD:
      newState = { ...state };
      newState.isForgetPassword = action.stts;
      return newState;
    case CHANGESTATUSFORSHOCATEGORY:
      newState = { ...state };
      newState.isShowCategory = action.stts;
      return newState;
    case CHANGESTATUSFORSHOWBRAND:
      newState = { ...state };
      newState.isShowBrand = action.stts;
      return newState;
      case CHANGE_STATUS_EDIT_KANBAN :
        newState = { ...state };
        newState.isKanbanEdit = action.stts;
        return newState;
    default:
      return state;
  }
};
export default PopupsReducer;
