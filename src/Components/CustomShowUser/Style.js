import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import {
  MdAdminPanelSettings,
  MdAlternateEmail,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  min-height: 100vh;
`;
export const IconEdit = styled(FiEdit3)`
  vertical-align: middle;
  font-size: 20px;
  margin-right: 5px;
  color: ${({ theme }) => theme.ICONCOLOR};
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  transition: ${({ theme }) => theme.TRANSITION};
  &:hover {
    background-color: ${({ theme }) => theme.BACKGROUND1};
    transition: ${({ theme }) => theme.TRANSITION};
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;
export const WrapperImage = styled.div`
  flex: 1;
`;
export const WrapperInfo = styled.div`
  flex: 4;
  padding: 0 5px;
`;
export const Header = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.BACKGROUND1};
`;
export const ImageProfile = styled.img`
  position: absolute;
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: -100px;
  left: 30px;
`;
export const UsernameStyled = styled.div`
  font-size: 33px;
  font-weight: 500;
  color: ${({ theme }) => theme.ICONCOLOR};
  letter-spacing: 1px;
  margin: 20px 0;
  text-transform: capitalize;
`;
export const IconPhone = styled(BsTelephone)`
  color: ${({ theme }) => theme.ICONCOLOR};
`;
export const WrapperPhone = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 20px;
  margin: 5px 0;
`;
export const WrapperEmail = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 20px;
  margin: 5px 0;
`;
export const IconEmail = styled(MdAlternateEmail)`
  color: ${({ theme }) => theme.ICONCOLOR};
`;
export const WrapperRole = styled.div`
  border: 1px solid ${({ theme }) => theme.ICONCOLOR};
  padding: 10px;
  letter-spacing: 1px;
`;
export const IconBack = styled(MdOutlineKeyboardBackspace)`
  font-size: 35px;
  padding: 7px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  color: ${({ theme }) => theme.ICONCOLOR};
  margin: 10px;
  cursor: pointer;
`;
export const IconUser = styled(FaUserAlt)`
  vertical-align: middle;
  font-size: 20px;
  margin-right: 5px;
  color: ${({ theme }) => theme.ICONCOLOR};
`;
export const IconAdmin = styled(MdAdminPanelSettings)`
  vertical-align: middle;
  font-size: 20px;
  margin-right: 5px;
  color: ${({ theme }) => theme.ICONCOLOR};
`;
export const IconManager = styled(ImUserTie)`
  vertical-align: middle;
  font-size: 20px;
  margin-right: 5px;
  color: ${({ theme }) => theme.ICONCOLOR};
`;

export const WrapperHeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
