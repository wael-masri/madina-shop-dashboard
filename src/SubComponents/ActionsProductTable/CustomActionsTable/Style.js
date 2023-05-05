import styled from "styled-components";
import {MdModeEditOutline,MdDeleteSweep} from "react-icons/md"
import {HiEye} from "react-icons/hi";
import {Link} from "react-router-dom"
export const IconSaveStyled = styled(MdModeEditOutline)`
font-size: 18px;
vertical-align: middle;
color:${({theme}) => theme.ICONCOLOR};

`;
export const ButtonEdit = styled.div`
width: 35px;
height: 35px;
background-color: ${({theme}) => theme.BACKGROUND2};
border: 1px solid ${({theme}) => theme.ICONCOLOR};
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
export const WrappperButtonAction = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;
export const WrapperShow = styled.div`
width: 35px;
height: 35px;
background-color: ${({theme}) => theme.TEXTCOLOR1};
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
export const IconShowing = styled(HiEye)`
vertical-align: middle;
color:${({theme}) => theme.BACKGROUND2};
font-size: 18px;
`;
export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
`;
export const WrapperDel = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border: 1px solid ${({ theme }) => theme.REDCOLOR};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


export const IconDel = styled(MdDeleteSweep)`
  vertical-align: middle;
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 18px;
`;