import styled, { keyframes } from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineTableRows } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
const AnimationBoxProfile = keyframes`
 0% { transform: translateX(400px); }
50% { transform: translateX(-25px); }
100% { transform: translateX(0px); }

 
 
`;

export const WrapperProfile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.42);
  position: absolute;
  overflow: hidden;
`;
export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
`;
export const BoxProfile = styled.div`
  right: 25px;
  top: 55px;
  width: 200px;
  position: absolute;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  animation-name: ${AnimationBoxProfile};
  animation-duration: 1s;
  z-index: 11111;
  /* transform: translateX(400px); */
`;
export const ItemProfile = styled.li`
  list-style: none;
  cursor: pointer;

  padding: 7px 7px;
  font-weight: 500;
  line-height: 2;
  color: ${({ theme, action }) => (action ? theme.REDCOLOR : theme.ICONCOLOR)};
  transition: ${({ theme }) => theme.TRANSITION};
  display: flex;

  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.BACKGROUND1};
    transition: ${({ theme }) => theme.TRANSITION};
  }
`;
export const IconProfile = styled(HiOutlineUser)`
  vertical-align: middle;
  margin-right: 10px;
  font-size: 20px;
`;
export const IconOrders = styled(MdOutlineTableRows)`
  vertical-align: middle;
  margin-right: 10px;
  font-size: 20px;
`;
export const IconHelp = styled(FiHelpCircle)`
  vertical-align: middle;
  margin-right: 10px;
  font-size: 20px;
`;
export const IconSignout = styled(FaSignOutAlt)`
  vertical-align: middle;
  margin-right: 10px;
  font-size: 18px;
`;
