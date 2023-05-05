import styled from "styled-components";
import {RiSaveFill} from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";

// styled custom subcategory field

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

export const IconSaveStyled = styled(RiSaveFill)`
  vertical-align: middle;
  color: ${({ theme }) => theme.BACKGROUND2};
  font-size: 18px;
`;


export const WrappperButtonAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LabelActive = styled.label`
color: ${({theme}) => theme.GREENCOLOR};
cursor: pointer;
`;
export const LabelInActive = styled.label`
color: ${({theme}) => theme.REDCOLOR};
cursor: pointer;
`;
//NEW

export const ButtonSave = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.TEXTCOLOR1};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ disable }) => (disable ? "none" : "")};
  opacity: ${({ disable }) => (disable ? 0.6 : 1)};
  cursor: pointer;
`;

export const WrapperDel = styled.div`
 padding: 0px 10px;
  height: 35px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border: 1px solid ${({theme,active}) => active? theme.REDCOLOR : theme.GREENCOLOR};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;



