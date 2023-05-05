import React from "react";
import { BoxForget, WrapperForget, WrapperStepper,WrapperContentStepper,StepperStyled } from "./Style";

import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FirstStepForget from "../FirstStepForget";
import SecondStepForget from "../SecondStepForget";
import ThirdStepForget from "../ThirdStepForget";

const steps = [
  "Forget Password",
  "Verify Email",
  "Reset Password",
];
const ForgetPassword = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <WrapperForget>
      <BoxForget>
        <WrapperStepper>
          <StepperStyled activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </StepperStyled>
          {activeStep === steps.length ? (
            <React.Fragment></React.Fragment>
          ) : (
            <WrapperContentStepper>
              {activeStep === 0 ? <FirstStepForget handleNext={handleNext} /> : ""}
              {activeStep === 1 ? <SecondStepForget handleBack={handleBack} handleNext={handleNext} /> : ""}
              {activeStep === 2 ? <ThirdStepForget handleBack={handleBack} handleNext={handleNext} /> : ""}
            </WrapperContentStepper>
          )}
        </WrapperStepper>
      </BoxForget>
    </WrapperForget>
  );
};

export default ForgetPassword;
