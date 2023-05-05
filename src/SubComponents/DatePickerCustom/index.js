import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewEvent } from "../../Redux/Actions/OtherStateActions";
import { DatePickerStyled } from "./Style";
const DatePickerCustom = ({placeholdertext,action}) => {
    
    const dispatch = useDispatch();
    const otherState = useSelector(state => state.otherState);
  return (
    <DatePickerStyled
      placeholderText={placeholdertext}
      selected={action === "end" ?otherState.newEvent.end :action === "start"? otherState.newEvent.start : ""}
      onChange={(val) => action === "start"? dispatch(addNewEvent({ ...otherState.newEvent, start:val })) : action === "end"? dispatch(addNewEvent({ ...otherState.newEvent, end:val })) : ""}
    />
  );
};

export default DatePickerCustom;
