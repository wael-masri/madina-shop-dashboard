import styled from "styled-components";

export const InputText = styled.input`
 border: none;
 width: 100%;
 font-size: 16px;
 height: 100%;
 color: ${({ theme }) => theme.TEXTCOLOR1};
 height: ${({height}) => height};
  border-bottom: 2px solid ${({theme}) => theme.GRAYCOLOR};;
  background-color: ${({theme}) => theme.BACKGROUND1};
  ::-webkit-outer-spin-button,::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
   outline: none;
   border-color: ${({theme}) => theme.ICONCOLOR};
   
  }
  
  
`;



