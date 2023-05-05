import styled from "styled-components";
import {BsReplyAll} from "react-icons/bs"
export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND2};
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 70%;
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
`;
export const ContainerTextArea = styled.div`
width: 90%;
height: 120px;
margin-bottom: 5px;


`;

export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};

`;
export const ButtonAction = styled.button`
all: unset;
padding: 4px 9px;
font-size: 15px;
border: 1px solid ${({theme}) => theme.ICONCOLOR};
color:${({theme}) =>theme.WHITECOLOR};
background-color: ${({theme}) => theme.ICONCOLOR};
margin: 0px 10px;
border-radius: 5px;
letter-spacing: 1px;
cursor: pointer;
box-shadow: ${({theme}) => theme.BOXSHADOW};

`;

export const IconReply = styled(BsReplyAll)`
color: inherit;
font-size: inherit;
`;