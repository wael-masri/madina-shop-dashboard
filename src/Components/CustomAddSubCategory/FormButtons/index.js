import React from "react";
import { useNavigate } from "react-router-dom";
import { customConfirmation } from "../../../SubComponents/CustomConfirmation";
import { WrapperButtonActions, ButtonAction, ButtonCancel } from "./Style";
const FormButtons = ({ imTyping, blockClick }) => {
  const navigate = useNavigate();
  const handleLeave = () => {
    navigate(-1);
  };
  const handleCancel = () => {
    if (imTyping) {
      customConfirmation(
        handleLeave,
        "Are you sure?",
        "Are you sure to leave this page?"
      );
      
    } else {
      navigate(-1);
      
    }
  };
  return (
    <WrapperButtonActions>
      <ButtonCancel type="button" cancel={true} onClick={handleCancel}>
        CANCEL
      </ButtonCancel>
      <ButtonAction type="submit" disabled={blockClick}>CREATE</ButtonAction>
    </WrapperButtonActions>
  );
};

export default FormButtons;
