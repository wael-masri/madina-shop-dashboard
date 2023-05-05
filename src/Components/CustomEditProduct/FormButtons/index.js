import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearImages } from "../../../Redux/Actions/OtherStateActions";
import { customConfirmation } from "../../../SubComponents/CustomConfirmation";
import { ButtonActions, Container, Wrapper, ButtonCancel } from "./Style";

const FormButtons = ({ imTyping, blockClick }) => {
  const dispatch = useDispatch();
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
      dispatch(clearImages());
    } else {
      navigate(-1);
      dispatch(clearImages());
    }
  };
  return (
    <Container>
      <Wrapper>
        <ButtonCancel type="button" cancel="cancel" onClick={handleCancel}>
          CANCEL
        </ButtonCancel>
        <ButtonActions type="submit" disabled={blockClick}>
          EDIT
        </ButtonActions>
      </Wrapper>
    </Container>
  );
};

export default FormButtons;
