import React from "react";
import { useNavigate } from "react-router-dom";
import { customConfirmation } from "../../../SubComponents/CustomConfirmation";
import { ButtonActions, Container, Wrapper,ButtonCancel } from "./Style";

const FormButtons = ({imTyping}) => {
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
    <Container>
      <Wrapper>
        <ButtonCancel
          type="button"
          cancel="cancel"
          onClick={() => handleCancel()}
        >
          Cancel
        </ButtonCancel>
        <ButtonActions type="submit">Create</ButtonActions>
      </Wrapper>
    </Container>
  );
};

export default FormButtons;
