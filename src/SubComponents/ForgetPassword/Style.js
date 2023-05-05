import styled,{keyframes} from "styled-components";
import Stepper from "@mui/material/Stepper";
const AnimationBoxForget = keyframes`
0% {
    transform: scale(0);
}

100% {
    transform: scale(1);
}
`;

export const WrapperForget = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.42);
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxForget = styled.div`
  width: 40%;
  height: 60%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  display: flex;
  justify-content: center;
  z-index: 11111;
  animation-name: ${AnimationBoxForget};
  animation-duration: .6s;
  /* transform: translateX(400px); */
`;
export const WrapperStepper = styled.div`
  width: 90%;
  padding: 20px 0;
`;
export const WrapperContentStepper = styled.div`
  width: 100%;
  height: 95%;
`;
export const StepperStyled = styled(Stepper)`
& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
    color: ${({ theme }) => theme.ICONCOLOR} !important;
}
& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
  color: ${({ theme }) => theme.ICONCOLOR} !important;
}
& .css-1hv8oq8-MuiStepLabel-label.Mui-active {
  color: ${({ theme }) => theme.ICONCOLOR} !important;
    font-weight: 500;
}
& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root {

  color: ${({ theme }) => theme.ICONCOLOR} !important;
}
& .css-1hv8oq8-MuiStepLabel-label {
  color: ${({ theme }) => theme.TEXTCOLOR1} !important;
}
`;