import  styled,{keyframes} from "styled-components";
import {AiOutlineClose} from "react-icons/ai";

const AnimationBoxSetting = keyframes`
 0% { transform: translateX(400px); }
50% { transform: translateX(-25px); }
100% { transform: translateX(0px); }

 
 
`;

export const WrapperSetting = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.42);
position: absolute;
display: flex;
justify-content: flex-end;
overflow: hidden;
`;
export const BoxSetting = styled.div`
width: 25%;
height: 100vh;
background-color: ${({theme}) => theme.BACKGROUND2};
animation-name: ${AnimationBoxSetting};
  animation-duration: 1s;
  z-index: 11111;
/* transform: translateX(400px); */

`;
export const WrapperCloseIcon = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;

`;
export const CloseIcon = styled(AiOutlineClose)`
font-size: 25px;
padding: 10px;
margin: 10px;
background-color: ${({theme}) => theme.BACKGROUND1};
color: ${({theme}) => theme.ICONCOLOR};
cursor: pointer;
transition: ${({theme}) => theme.TRANSITION};
&:hover {
    transition: ${({theme}) => theme.TRANSITION};
    background-color: ${({theme}) => theme.HOVERICON};
}

`;
export const WrapperTitle = styled.div`
width: 100%;
color: ${({theme}) => theme.TEXTCOLOR1};
font-size: 22px;
font-weight: 600;
letter-spacing: 1px;
padding: 10px;
margin-bottom: 20px;
`;
export const WrapperSubTitle = styled.div`
width: 100%;
color: ${({theme}) => theme.TEXTCOLOR2};
font-size: 16px;
font-weight: 600;
letter-spacing: 1px;
padding: 10px;
`;

export const WrapperThemeColor = styled.div`
width: 100%;
display: flex;
align-items: center;
margin: 10px 0;

`;
export const ThemeColor = styled.div`
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: ${({color}) => color};
margin-left: 10px;
cursor: pointer;
`;
export const WrapperCheckBox = styled.div`
margin: 10px;
width: 100%;
`;


