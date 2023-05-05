import styled,{keyframes} from "styled-components";
import {GrClose} from "react-icons/gr";

const AnimationPopupImage = keyframes`
0% {
    transform: scale(0);
}

100% {
    transform: scale(1);
}
`;
export const WrapperImage = styled.div`
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);
position: absolute;
z-index: 112233;
`;

export const WrapperCloseButton = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;

`;


export const CloseIconPop = styled(GrClose)`
vertical-align: middle;
font-size: 25px;
background-color: ${({theme}) => theme.WHITECOLOR} !important;
padding: 10px;
margin: 20px;
border-radius: 5px;

`;
export const WrapperImagePop = styled.div`
width: 100%;

display: flex;
justify-content: center;
align-items: center;

`;
export const ImagePop = styled.img`
width: 600px;
height: 600px;
object-fit: cover;
position: absolute;
top: 20px;
border-radius: 7px;
animation-name: ${AnimationPopupImage};
  animation-duration: .6s;

`;