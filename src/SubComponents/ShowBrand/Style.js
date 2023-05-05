import styled, { keyframes } from "styled-components";
import { GrClose } from "react-icons/gr";
const AnimationShowCategory = keyframes`
0% {
    transform: scale(0);
}

100% {
    transform: scale(1);
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 112233;

`;
export const Wrap = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  animation-name: ${AnimationShowCategory};
  animation-duration: 0.7s;
`;

export const WrapperCloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const CloseIconPop = styled(GrClose)`
  vertical-align: middle;
  font-size: 25px;
  background-color: ${({ theme }) => theme.WHITECOLOR} !important;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
`;
export const WrapperContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const WrapperImage = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;
export const WrapperInfo = styled.div`
  flex: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const WrapperSingleInfo = styled.div`
  width: 100%;
  margin: 10px 0;
`;
export const SingleInfoTitle = styled.span`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  font-weight: 500;
`;
export const SingleInfoText = styled.span`
  color: ${({ theme }) => theme.TEXTCOLOR2};
`;
export const WrapperPublish = styled.div`
  flex: 1;
`;
export const LabelStatus = styled.div`
  border: 1px solid ${({ theme }) => theme.GREENCOLOR};
  padding: 10px 0px;
  margin: 10px 7px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.GREENCOLOR};
  background-color: transparent;
`;
