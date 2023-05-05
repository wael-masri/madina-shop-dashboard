import styled from "styled-components";

import {Link } from 'react-router-dom'


export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;
export const WrapperSidebar = styled.div`
  width: ${(props) => (props.activeMenu ? "320px" : "70px")};
  transition: all 0.3s ease;
  height: 100vh;
  background-color: antiquewhite;
  position: relative;
  background-color: ${({ theme }) => theme.BACKGROUND2};
`;
export const BoxSidebar = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &:hover {
    overflow: auto;
    scroll-behavior: smooth;
  }
`;
export const WrapperMain = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
export const WrapperMainsub = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.BACKGROUND1};
  overflow: auto;
  scroll-behavior: smooth;
`;
export const WrapperLogo = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 5px;
`;
export const Logo = styled.img`
  width: 150px;
  height: auto;
  display: ${(props) => (props.activeMenu ? "block" : "none")};
`;
export const TitleLinks = styled.div`
  padding-left: 10px;
  font-size: 13px;
  margin: 10px 0;
  color: ${({ theme }) => theme.TEXTCOLOR2};
  text-transform: uppercase;

  display: ${(props) => (props.activeMenu ? "block" : "none")};
`;
export const WrapperLinks = styled.div`
  display: flex;
  padding-left: 5px;
  font-size: 17px;
  color: ${({ theme }) => theme.TEXTCOLOR1};
  margin: 2px 10px;
  padding: 12px;
  border-radius: 10px;
  &.activemenu {
    background-color: ${({theme}) => theme.BACKGROUND1};
    color: ${({ theme }) => theme.TEXTCOLOR1};
    transition: ${({ theme }) => theme.TRANSITION};
  }
  &:hover {
    background-color: ${({ theme }) => theme.BACKGROUND1};
    transition: ${({ theme }) => theme.TRANSITION};
  }
`;
export const IconsWrap = styled.div`
  color: ${({ theme }) => theme.ICONCOLOR};
`;
export const LinksWrap = styled.div`
  margin-left: 15px;
  text-transform: capitalize;
  font-weight: 500;
  display: ${(props) => (props.activeMenu ? "block" : "none")};
`;
export const LinkTo = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
