import styled from "styled-components";
import {FaCloudUploadAlt} from "react-icons/fa"
import { MdOutlineAdd, MdOutlineRemoveCircle } from "react-icons/md";
export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const BoxUpload = styled.div`
  width: 120px;
  padding: 10px;
  background-color: ${({ theme }) => theme.GRAYCOLOR};
  border: 3px dashed ${({ theme }) => theme.BACKGROUND1};
  height: 120px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const IconRemoveImage = styled(MdOutlineRemoveCircle)`
  position: absolute;
  top: -14px;
  right: -14px;
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 22px;
`;
// BOX IMAGE (JS) 
export const AddButtonImage = styled.div`
background-color: ${({theme}) => theme.ICONCOLOR};
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 5px;
cursor: pointer;
`;
export const LabelChooseImage = styled.div`
color: ${({theme}) => theme.ICONCOLOR};
font-size: 14px;

`;

export const UploadImageIcon = styled(FaCloudUploadAlt)`
color: ${({theme}) => theme.BACKGROUND1};
font-size: 20px;
`;

export const ImageMini =styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
