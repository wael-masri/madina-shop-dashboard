import styled from "styled-components";
import {Field } from "formik";
export const InputStyled = styled(Field)`
 border: none;
 width: 99%;
 height: 100%;
 
 font-size: 19px;
 color:${({theme}) => theme.ICONCOLOR};
  padding-left: 10px;
  border: 1px solid ${({theme}) => theme.TEXTCOLOR2};
  border-radius: 12px;
  &::placeholder {
  color: black;
  opacity: 0.3;
}
  &:focus{
   outline: none;
   border: 1px solid ${({theme}) => theme.ICONCOLOR};
   
  }
  
  
`;
export const ShowPass = styled.div`
  position: absolute;
  top: 12px;
  font-size: 14px;
  right: 5px;
  cursor: pointer;
  color: black;
  opacity: 0.5;
`;