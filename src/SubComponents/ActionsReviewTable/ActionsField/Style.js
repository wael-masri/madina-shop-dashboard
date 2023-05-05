import styled from "styled-components";
import {MdModeEditOutline,MdDeleteSweep} from "react-icons/md";
import {AiOutlineUserAdd,AiOutlineUserDelete } from "react-icons/ai";
import {Link} from "react-router-dom";
import {HiEye} from "react-icons/hi";
export const WrapperButtons = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;

`;


export const WrapperEdit = styled.div`
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

export const WrapperDel = styled.div`
width: 35px;
height: 35px;
background-color: ${({theme}) => theme.BACKGROUND2};
border: 1px solid ${({theme}) => theme.REDCOLOR};
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;


export const IconEdit = styled(MdModeEditOutline)`
vertical-align: middle;
color:${({theme}) => theme.ICONCOLOR};
font-size: 18px;
`;

export const IconDel = styled(MdDeleteSweep)`
vertical-align: middle;
color:${({theme}) => theme.REDCOLOR};
font-size: 18px;
`;
export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
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
export const WrapperActiveButton = styled.div`
min-width: 35px;
height: 35px;
background-color: ${({theme}) => theme.BACKGROUND2};
border: 1px solid ${({theme,active}) => !active? theme.REDCOLOR : theme.GREENCOLOR};
color:${({theme,active}) => !active? theme.REDCOLOR : theme.GREENCOLOR};
padding: 0 5px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
gap: 5px;
`;
export const IconInactive = styled(AiOutlineUserDelete)`
vertical-align: middle;
color:${({theme}) => theme.GREENCOLOR};
font-size: 18px;
`;
export const IconActive = styled(AiOutlineUserAdd)`
vertical-align: middle;
color:${({theme}) => theme.REDCOLOR};
font-size: 18px;
`;
