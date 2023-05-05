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

export const changeStatusMenu = (stts) => {
  const action = { type: CHANGESTATUSMENU, stts };
  return action;
};
export const changeStatusMode = (stts) => {
  const action = { type: CHANGESTATUSMODE, stts };
  return action;
};
export const changeStatusProfile = (stts) => {
  const action = { type: CHANGESTATUSPROFILE, stts };
  return action;
};
export const changeStatusSetting = (stts) => {
  const action = { type: CHANGESTATUSSETTING, stts };
  return action;
};
export const changeStatusAddKanban = (stts) => {
  const action = { type: CHANGE_STATUS_ADD_KANBAN, stts };
  return action;
};
export const changeStatusImage = (stts) => {
  const action = { type: CHANGESTATUSIMAGE, stts };
  return action;
};
export const changeStatusForgetPassword = (stts) => {
  const action = { type: CHANGESTATUSFORGETPASSWORD, stts };
  return action;
};
export const changeStatusShowCategory = (stts) => {
  const action = { type: CHANGESTATUSFORSHOCATEGORY, stts };
  return action;
};
export const changeStatusShowBrand = (stts) => {
  const action = { type: CHANGESTATUSFORSHOWBRAND, stts };
  return action;
};
export const changeStatusEditKanban = (stts) => {
  const action = { type: CHANGE_STATUS_EDIT_KANBAN, stts };
  return action;
};


