import styled from "styled-components";

export const Container = styled.div`
width: 100%;

`;
export const Wrapper = styled.div`
display: flex;

width: 100%;
margin: 20px 0;
`;
export const WrapperLabel = styled.div`
flex: 1;
display: flex;
color: ${({ theme }) => theme.TEXTCOLOR1};
justify-content: flex-end;
padding-right: 15px;
`;

export const WrapperInputs = styled.div`
flex: 2;

`;

export const ContainerInput = styled.div`
width: 60%;
min-height: 40px;

`;
export const ContainerTextArea = styled.div`
width: 60%;
height: 120px;
margin-bottom: 5px;


`;
export const InputText = styled.input`
 border: none;
 width: 100%;
 font-size: 16px;
 height: 100%;
 height: ${({height}) => height};
  border-bottom: 2px solid ${({theme}) => theme.GRAYCOLOR};;
  background-color: ${({theme}) => theme.BACKGROUND2};
  ::-webkit-outer-spin-button,::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
   outline: none;
   border-color: ${({theme}) => theme.ICONCOLOR};
   
  }
  
  
`;
export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};

`;