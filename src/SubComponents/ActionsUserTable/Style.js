
import styled from "styled-components";
import {FaRegUser} from "react-icons/fa";
import {MdModeEditOutline,MdOutlineAdminPanelSettings} from "react-icons/md"
import {HiEye} from "react-icons/hi";
import {AiOutlineUserAdd,AiOutlineUserDelete,AiOutlineCrown } from "react-icons/ai";
import {Link} from "react-router-dom"
// styled custom username field

export const ContainerField = styled.div`
width: 100%;
display: flex;
align-items: center;

`;
export const ImageField = styled.img`
object-fit: cover;
width: 40px;
height: 40px;
border-radius: 50%;

`;
export const WrapperName = styled.span`
margin-left: 10px;

`;

//CUSTOM ACTIVE STYLED
export const WrapperActive = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`;
export const WrapperBadge = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${({theme}) => theme.BACKGROUND1};
display: flex;
justify-content: center;
align-items: center;
`;
export const Badge = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${({active}) => active? "#28D60C" : "#FAE831"};
`;

// CUSTOM ROLE FIELD
export const WrapperRole = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
letter-spacing: 1px;
align-items: center;
text-transform: capitalize;

`;

export const IconRoleUser = styled(FaRegUser)`
vertical-align: bottom;
font-size: 20px;
margin-right: 5px;
color: ${({theme}) => theme.ICONCOLOR} !important;
`;
export const IconRoleAdmin = styled(MdOutlineAdminPanelSettings)`
vertical-align: bottom;
font-size: 20px;
margin-right: 5px;
color: ${({theme}) => theme.ICONCOLOR};
`;
export const IconRoleManager = styled(AiOutlineCrown)`
vertical-align: bottom;
font-size: 20px;
margin-right: 5px;
color: ${({theme}) => theme.ICONCOLOR};
`;

//CUSTOM ACTIONS USER
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

export const WrapperActiveButton = styled.div`
min-width: 35px;
height: 35px;
background-color: ${({theme}) => theme.BACKGROUND2};
border: 1px solid ${({theme,active}) => active? theme.REDCOLOR : theme.GREENCOLOR};
color:${({theme,active}) => active? theme.REDCOLOR : theme.GREENCOLOR};
padding: 0 5px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
gap: 5px;
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


export const IconInactive = styled(AiOutlineUserDelete)`
vertical-align: middle;
color:${({theme}) => theme.REDCOLOR};
font-size: 18px;
`;
export const IconActive = styled(AiOutlineUserAdd)`
vertical-align: middle;
color:${({theme}) => theme.GREENCOLOR};
font-size: 18px;
`;

export const WrappperButtonAction = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;
export const IconSaveStyled = styled(MdModeEditOutline)`
font-size: 18px;
vertical-align: middle;
color:${({theme}) => theme.ICONCOLOR};

`;