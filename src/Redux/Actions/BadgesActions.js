import {
  CHANGESTATUESBAR,
  CHANGESTATUSLINE,
  CHANGESTATUSHEADER,
  CHANGESTATUSPIE,
  CHANGESTATUSPROGRESS,
  CHANGESTATUSTOPCUSTOMERS,
  CHANGESTATUSTRANSACTIONS,
} from "../Types";

export const changeStatusHeader = (stts) => {
  const action = { type: CHANGESTATUSHEADER, stts };
  return action;
};
export const changeStatusBar = (stts) => {
  const action = { type: CHANGESTATUESBAR, stts };
  return action;
};
export const changeStatusPie = (stts) => {
  const action = { type: CHANGESTATUSPIE, stts };
  return action;
};
export const changeStatusProgress = (stts) => {
  const action = { type: CHANGESTATUSPROGRESS, stts };
  return action;
};
export const changeStatusTopCustomers = (stts) => {
  const action = { type: CHANGESTATUSTOPCUSTOMERS, stts };
  return action;
};
export const changeStatusLine = (stts) => {
  const action = { type: CHANGESTATUSLINE, stts };
  return action;
};
export const changeStatusTransactions = (stts) => {
  const action = { type: CHANGESTATUSTRANSACTIONS, stts };
  return action;
};
