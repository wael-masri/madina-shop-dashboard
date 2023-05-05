import styled from "styled-components";
import { AiOutlineFieldNumber,AiOutlinePercentage } from "react-icons/ai";
import {BsCurrencyDollar,BsCalendarDate} from "react-icons/bs"
export const Container = styled.div`
  padding: 10px 5px;
  position: relative;
`;
export const WrapperTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.TEXTCOLOR2};
  position: relative;
  display: flex;
  justify-content: center;
  &::after {
    content: " ";
    top: 100%;

    position: absolute;
    height: 3px;
    background: ${({ theme }) => theme.ICONCOLOR};
    border-radius: 10px;
    width: 60%;
  }
`;


export const Wrapper = styled.div`
 // padding: 5px;
  display: flex;
  
  justify-content: space-between;
  margin: 10px 0;
  padding: ${({margin}) => margin ? "10px 0px" : "0px"};
`;
export const ImageEx = styled.img`
width: 60px;
position: absolute;
bottom: 0;
right:0;
`;
export const WrapperLabel = styled.div`
flex:1;
font-size: 15px;
padding: 5px 4px !important;
color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const WrapperInput = styled.div`
flex:1;
display: flex;
align-items: center;



`;

export const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => theme.TEXTCOLOR1};
  font-size: 16px;
  height: 100%;
width: 80%;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;
export const WrapperSign = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${({theme}) => theme.ICONCOLOR};
background-color: ${({theme}) => theme.ICONCOLOR};
border-top-right-radius:5px;
border-bottom-right-radius:5px;

flex: 1;
height: 100%;
`;

export const SignPc = styled(AiOutlineFieldNumber)`
font-weight: 600;
font-size: 20px;
color: ${({theme}) => theme.WHITECOLOR};
`;
export const Signpercen = styled(AiOutlinePercentage)`
font-weight: 600;
font-size: 20px;
color: ${({theme}) => theme.WHITECOLOR};
`;

export const Signprice = styled(BsCurrencyDollar)`
font-weight: 600;
font-size: 20px;
color: ${({theme}) => theme.WHITECOLOR};
`;


export const IconDate = styled(BsCalendarDate)`
font-weight: 600;
font-size: 20px;
color: ${({theme}) => theme.WHITECOLOR};
`;

export const FirstWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;


export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};
`;
export const WrapperErr = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;
export const HideDiscount = styled.div`
background-color: rgba(128,128,128,0.1) ;
width: 100%;
height: 100%;
position: absolute;
top: 0;
padding: 10px 0px;
`;

