import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  //background-color: rgba(0, 0, 0);
  background-color: ${({theme}) => theme.GRAYCOLOR};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111111;
`;
export const WrapperCropped = styled.div`
  height: 90%;
  
  display: flex;
  flex-direction: column;
`;

export const BoxImage = styled.div`
  
  height: 90%;
  position: relative;
`;

export const WrapperButton = styled.div`
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
`;
export const ButtonCrop = styled.div`
  border: 1px solid ${({ theme }) => theme.GREENCOLOR};
  background-color: ${({ theme }) => theme.GREENCOLOR};
  color: ${({ theme }) => theme.WHITECOLOR};
  padding: 7px 15px;
  cursor: pointer;
`;
export const ButtonClose = styled.div`
  border: 1px solid ${({ theme }) => theme.REDCOLOR};
  color: ${({ theme }) => theme.REDCOLOR};
  padding: 7px 15px;
  cursor: pointer;
`;
