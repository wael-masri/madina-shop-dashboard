import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND2};
  min-height: 100vh;
  padding: 0 30px;
  position: relative;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.BACKGROUND1};
`;
export const WrapperImage = styled.div`
  flex: 1;
  border-right: 5px solid ${({ theme }) => theme.BACKGROUND2};
`;
export const WrapperInfo = styled.div`
  flex: 3;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px 0;
  text-transform: capitalize;
`;
export const SubTitle = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 10px 0;
`;
export const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${({ theme }) => theme.BACKGROUND1};
  margin-bottom: 50px;
`;
export const CopyWrite = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};

`;
