
import {
  CHANGESTATUESBAR,
  CHANGESTATUSHEADER,
  CHANGESTATUSLINE,
  CHANGESTATUSPIE,
  CHANGESTATUSPROGRESS,
  CHANGESTATUSTOPCUSTOMERS,
  CHANGESTATUSTRANSACTIONS,
} from "../Types";

const initialState = {
  header: true,
  bar: true,
  pie: true,
  progressCircule: true,
  topCustomers: true,
  line: true,
  transactions: true,
};

const BadgesReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case CHANGESTATUSHEADER:
      newState = { ...state };
      newState.header = action.stts;
      return newState;
    case CHANGESTATUESBAR:
      newState = { ...state };
      newState.bar = action.stts;
      return newState;
    case CHANGESTATUSPIE:
      newState = { ...state };
      newState.pie = action.stts;
      return newState;
    case CHANGESTATUSPROGRESS:
      newState = { ...state };
      newState.progressCircule = action.stts;
      return newState;
    case CHANGESTATUSTOPCUSTOMERS:
      newState = { ...state };
      newState.topCustomers = action.stts;
      return newState;
    case CHANGESTATUSLINE:
      newState = { ...state };
      newState.line = action.stts;
      return newState;
    case CHANGESTATUSTRANSACTIONS:
      newState = { ...state };
      newState.transactions = action.stts;
      return newState;
    default:
      return state;
  }
};
export default BadgesReducer;
