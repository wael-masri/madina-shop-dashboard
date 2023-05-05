import React, { useState } from "react";
import {
  Container,
  Wrapper,
  WrapperBody,
  WrapperButton,
  Buttons,
  Title,
  SubTitle,
  WrapperInput,
  VerificationInputStyled,
} from "./Style";
import AuthApi from "../../Api/AuthApi";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { changeStatusForgetPassword } from "../../Redux/Actions/PopupsActions";

const SecondStepForget = ({ handleNext, handleBack }) => {
  const [code,setCode] = useState(0);
 
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const alertMsg = () => {
    enqueueSnackbar("This code is not valid!");
  };
  const handleSubmit = async () => {
    let newObject = {};
    const resetCode = code.trim();
    newObject = { resetCode };
    try {
      const res = await AuthApi.verifyPassword(newObject);
      res && handleNext();
    } catch (err) {
      console.log(err.data.message);
      err.data.message && alertMsg();
    }
    
  }

  return (
    <Container>
      <Wrapper>
        <WrapperBody>
          <Title>Verify Email</Title>
          <SubTitle>Verify your Account</SubTitle>
          <SubTitle action="true">This code valid for 10 minutes</SubTitle>
          <WrapperInput>
            <VerificationInputStyled onChange={(e) => setCode(e)} length={6} validChars={"0-9"} placeholder="" autoFocus={'true'} />
          </WrapperInput>
        </WrapperBody>
        <WrapperButton>
          <Buttons onClick={handleBack}>Back</Buttons>
          <Buttons onClick={handleSubmit}>Next</Buttons>
          <Buttons color="red" onClick={() => dispatch(changeStatusForgetPassword(false))}>
            Exit
          </Buttons>
        </WrapperButton>
      </Wrapper>
    </Container>
  );
};

export default SecondStepForget;
