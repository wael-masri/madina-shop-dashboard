import styled from "styled-components";



export const WrapperColorPickers = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
margin: 70px 0;
`;
export const Wrapperpencilandswitch = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
gap:10px;
`;
export const Wrapperpencil = styled.div`
width: 200px;
height: 50px;
background-color: #7C4C1E;
border-right: 4px solid ${({theme}) => theme.BACKGROUND1};
border-bottom-left-radius: 15px;
border-top-left-radius: 15px;
position: relative;
margin-bottom: 100px;

&::after{
    content: "";
    position:absolute;
    width: 100%;
    height: 5px;
    background-color: ${({theme}) => theme.ICONCOLOR};
    top:15px;
}

`;
export const PencilHead = styled.div`
  width: 0; 
  height: 0; 
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  
  border-left: 60px solid ${({color}) => color? color : "#000"};

`;
export const PazelPencil = styled.div`
display: flex;
`;