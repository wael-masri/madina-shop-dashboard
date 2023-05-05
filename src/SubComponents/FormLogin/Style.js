import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const TitleLogin = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin: 45px 0;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.TEXTCOLOR2};
`;
export const Colored = styled.span`
color : ${({ theme }) => theme.ICONCOLOR};
font-weight: 600;
`;
export const LogoImg = styled.img`
position: absolute;
top:15px;
  width: 210px;
  height: auto;
  object-fit: cover;
`;
export const WrapperInput = styled.div`
  width: 45%;
  margin: 10px 0;
  height: 40px;
  position: relative;
`;
export const WrapperForget = styled.div`
width: 45%;
font-size: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ForgetPassword = styled.div`
  
  color: ${({ theme }) => theme.TEXTCOLOR1};
  transition: ${({ theme }) => theme.TRANSITION};
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: ${({ theme }) => theme.ICONCOLOR};
    transition: ${({ theme }) => theme.TRANSITION};
  }
`;
export const WrapperButton = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const ButtonLogin = styled.button`
  color: ${({ theme }) => theme.BACKGROUND1};
  background-color: ${({ theme }) => theme.ICONCOLOR};
  padding: 10px 80px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.ICONCOLOR};
  transition: ${({ theme }) => theme.TRANSITION};
  &:hover {
    border: 1px solid ${({ theme }) => theme.ICONCOLOR};
    background-color: transparent;
    color: ${({ theme }) => theme.ICONCOLOR};
    transition: ${({ theme }) => theme.TRANSITION};
  }
`;
export const CopyWrite = styled.div`
position: absolute;
bottom: 15px;
color:${({ theme }) => theme.TEXTCOLOR1};
`;

