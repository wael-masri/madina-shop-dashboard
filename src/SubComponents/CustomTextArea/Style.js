import styled from "styled-components";
export const TextArea = styled.textarea`
 border: none;
 width: 100%;
 font-size: 16px;
 resize: none;
 height: 100%;
 color: ${({ theme }) => theme.TEXTCOLOR1};
  border-bottom: 2px solid ${({theme}) => theme.GRAYCOLOR};;
  background-color: ${({theme}) => theme.BACKGROUND1};
  
  &:focus{
   outline: none;
   border-color: ${({theme}) => theme.ICONCOLOR};
   
  }
  
  
`;