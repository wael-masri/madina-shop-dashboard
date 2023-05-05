import styled from "styled-components";

export const WrapperButtonActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
`;
export const ButtonAction = styled.button`
all: unset;
padding: 10px 30px;
width: 50px;
text-align: center;
font-size: 16px;
border: 1px solid ${({theme}) => theme.ICONCOLOR};
color:${({theme}) =>theme.WHITECOLOR};
background-color: ${({theme}) => theme.ICONCOLOR};
margin: 0px 10px;
border-radius: 7px;
letter-spacing: 1px;
cursor: pointer;
box-shadow: ${({theme}) => theme.BOXSHADOW};

`;
export const ButtonCancel = styled.div`
padding: 10px 30px;
min-width: 50px;
text-align: center;
font-size: 16px;
border: 1px solid ${({theme}) => theme.ICONCOLOR};
color:${({theme}) => theme.ICONCOLOR};
background-color: ${({theme,cancel}) => cancel? "transparent" : theme.ICONCOLOR};
margin: 0px 10px;
border-radius: 7px;
letter-spacing: 1px;
cursor: pointer;

`;