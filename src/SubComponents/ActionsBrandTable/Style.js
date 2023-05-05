import styled from "styled-components";
import {MdModeEditOutline,MdDeleteSweep} from "react-icons/md"
import {HiEye} from "react-icons/hi";
import {Link} from "react-router-dom";
// styled custom Brand name field

export const ContainerField = styled.div`
width: 100%;
display: flex;
align-items: center;

`;
export const IconShowing = styled(HiEye)`
vertical-align: middle;
color:${({theme}) => theme.BACKGROUND2};
font-size: 18px;
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
export const ImageField = styled.img`
object-fit: cover;
width: 40px;
height: 40px;
border-radius: 50%;

`;
export const WrapperName = styled.span`
margin-left: 10px;

`;

// actions button brands editable
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
padding: 0px 10px;
height: 35px;
background-color: ${({theme}) => theme.BACKGROUND2};
border: 1px solid ${({theme,active}) => active? theme.REDCOLOR : theme.GREENCOLOR};
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

export const LabelActive = styled.label`
color: ${({theme}) => theme.GREENCOLOR};
cursor: pointer;
`;
export const LabelInActive = styled.label`
color: ${({theme}) => theme.REDCOLOR};
cursor: pointer;
`;
export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
`;