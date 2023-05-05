import styled from "styled-components";
import {BsReplyAll} from "react-icons/bs"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND1};
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND2};
  width: 70%;
  margin: 10px 0;
  padding: 5px;
`;
export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WrapperHeader1 = styled.div``;
export const WrapperHeader2 = styled.div``;
export const WrapperInHeader1 = styled.div`
  display: flex;
`;
export const WrapperInHeader1Image = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const WrapperInHeader1Info = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({color }) => color? 13 : 18}px;
  color: ${({ theme,color }) => color? theme.ICONCOLOR : theme.TEXTCOLOR1};
`;

export const BoxReviewText = styled.div`
border: 1px solid ${({ theme}) =>theme.ICONCOLOR};
color: ${({ theme}) => theme.TEXTCOLOR1};
min-height: 130px;
padding: 5px;
`;


export const WrapperFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  padding: 3px 5px;
  

`;
export const WrapperFooter1 = styled.div`
font-size: 15px;
color: ${({theme,deletee}) => deletee? theme.REDCOLOR : theme.ICONCOLOR};
cursor: pointer;
`;
export const WrapperFooter2 = styled.div`

`;
export const WrapperInFooter1 = styled.div`
  display: flex;
  gap: 5px;
`;
export const IconReply = styled(BsReplyAll)`
color: inherit;
font-size: inherit;
`;

