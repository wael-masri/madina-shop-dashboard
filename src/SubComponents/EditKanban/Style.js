import  styled,{keyframes} from "styled-components";
import {AiOutlineClose,AiFillDelete} from "react-icons/ai";

const AnimationBoxSetting = keyframes`
 0% { transform: translateY(105vh); }
50% { transform: translateY(-25px); }
100% { transform: translateY(0px); }

 
 
`;

export const WrapperSetting = styled.div`
width: 100%;
height: 100vh;
background-color: rgba(0, 0, 0, 0.42);
position: absolute;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
z-index: 1565111;
`;
export const BoxSetting = styled.div`
width: 60%;
min-height: 80vh;
background-color: ${({theme}) => theme.BACKGROUND1};
animation-name: ${AnimationBoxSetting};
  animation-duration: 1.3s;
  z-index: 111111;

`;
export const Header = styled.div`
background-color: ${({theme}) => theme.BACKGROUND2};
border: 2px solid ${({theme}) => theme.BACKGROUND1};
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px;
position: relative;
`;
export const Main = styled.div`
background-color: ${({theme}) => theme.BACKGROUND2};
padding: 10px;
margin-top: 20px;
`;
export const LabelHeader = styled.div`
color: ${({theme}) => theme.TEXTCOLOR2};

`;
export const LabelMain = styled.div`
color: ${({theme}) => theme.TEXTCOLOR2};
margin-bottom: 10px;

`;
export const InputHeader = styled.div`
background-color: ${({theme}) => theme.BACKGROUND2};
margin-left: 10px;
width: 20%;
height: 30px;
`;
export const ContainerTextArea = styled.div`
width: 100%;
height: 120px;
margin-bottom: 5px;


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
color: ${({theme}) => theme.ICONCOLOR};
font-size: 22px;
font-weight: 600;
letter-spacing: 1px;
padding: 10px;
margin-bottom: 20px;
`;
export const Footer = styled.div`
background-color: ${({theme}) => theme.BACKGROUND1};
padding: 10px;
margin-top: 20px;
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
`;

export const ButtonAdd = styled.button`
all: unset;
background-color: ${({theme}) => theme.ICONCOLOR};
border-radius: 7px;
padding: 8px 13px;
width: max-content;

color:${({theme}) => theme.WHITECOLOR};
cursor: pointer;

`;
export const ButtonDel = styled.div`
all: unset;
background-color: ${({theme}) => theme.REDCOLOR};
border-radius: 7px;
padding: 8px 13px;
width: max-content;

color:${({theme}) => theme.WHITECOLOR};
cursor: pointer;

`;


export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};

`;

export const DelIcon = styled(AiFillDelete)`
color:${({theme}) => theme.REDCOLOR};
font-size: 23px;
position: absolute;
right: 5px;
cursor: pointer;

`;
