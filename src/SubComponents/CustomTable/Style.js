import styled from "styled-components";
import {RiImageAddLine} from "react-icons/ri";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {HiEye} from "react-icons/hi";
import {Link} from "react-router-dom";
import {MdModeEditOutline} from "react-icons/md"
import {
    DataGrid,
    GridToolbarExport,
  } from "@mui/x-data-grid";
export const DataGridStyled = styled(DataGrid)`
color:${({theme}) => theme.TEXTCOLOR1} !important;
//border-color: ${({theme}) => theme.ICONCOLOR} !important;
border: none !important;
`;
export const GridToolbarExportStyled = styled(GridToolbarExport)`
color:${({theme}) => theme.TEXTCOLOR2} !important;
`;  
export const IconSaveStyled = styled(MdModeEditOutline)`
font-size: 18px;
vertical-align: middle;
color: ${({theme}) => theme.ICONCOLOR};

`;
export const WrapperTable = styled.div`
height: 450px;
width: 100%;
`;



export const WrappperButtonAction = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;
export const ErrorDiv = styled.div`
color: ${({theme}) => theme.REDCOLOR};
font-weight: 600;
height: 50px;
display: flex;
align-items: center;
padding: 0 10px;
margin: 5px 0;
border-radius: 7px;
background-color: antiquewhite;
`;

export const WrapperImage = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;
export const Image = styled.img`
width:50px;
border-radius: 50%;
cursor :pointer ;
margin:10px 0px;
`;

export const UploadImage = styled(RiImageAddLine)`
vertical-align: middle;
font-size: 18px;
color: ${({theme}) => theme.TEXTCOLOR2};
cursor: pointer;
`;

export const IconRemoveCat = styled(IoMdRemoveCircleOutline)`
vertical-align: middle;
font-size: 18px;
color: ${({theme}) => theme.REDCOLOR};
background-color: antiquewhite;
padding: 5px;
border-radius: 50%;
`;
// actions button brands editable



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

export const WrapperDel = styled.div`
padding: 0 10px;
height: 35px;
background-color: ${({theme}) => theme.BACKGROUND2};
border: 1px solid ${({theme,active}) => active? theme.REDCOLOR : theme.GREENCOLOR};
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








// confirm delete category

export const WrapperConfirm = styled.div`

width: 400px;

display: flex;
align-items: center;
flex-direction: column;
padding: 40px;
box-shadow: 0 20px 75px rgb(0 0 0 / 23%);
&.popup-overlay {
  background-color: #1e4db7;
}
`;
export const TitleConfirm = styled.p`
font-size: 28px;
font-weight: 500;
color: #fff;
margin: 0;

`;
export const MessageConfirm = styled.p`
color: #fff;
`;
export const WrapperButtonDel = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 10px;

`;
export const Buttons = styled.div`
color: #fff;
flex:1;
display: flex;
justify-content: center;
padding: 5px;
align-items: center;
border: 2px solid #fff !important;
&:hover {
  border: 2px solid #A9A9A9 !important;
  color: #A9A9A9 !important;
}

`;

export const CustomLink = styled(Link)`
text-decoration: none;
color: inherit;
`;