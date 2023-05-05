import styled from "styled-components";

export const Container = styled.div`
width: 100%;
`;
export const Wrapper = styled.div`
width: 100%;
padding: 10px 20px;
`;
export const WrapperIcons = styled.div`
padding: 15px;
width: 25px;
height: 25px;
margin-bottom: 15px;
border-radius: 50%;
font-size: 25px;
display: flex;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.BACKGROUND2};
background-color: ${props => props.back};
transition: ${({theme}) => theme.TRANSITION};
cursor: pointer;
&:hover{
    box-shadow: ${({theme}) => theme.BOXSHADOW};
    transition: ${({theme}) => theme.TRANSITION};

}
`;
export const Title = styled.div`
margin: 10px 0;
font-weight: 600;
font-size: 19px;


color: ${({theme}) => theme.TEXTCOLOR1};

`;
export const SubTitle = styled.div`
color: ${({theme}) => theme.TEXTCOLOR2};
text-transform: capitalize;
`;
export const Pourcentage = styled.span`
color: ${props => props.color > 0? "green" : "red"};
font-weight: 500;
margin-left: 5px;
font-size: 14px;
`;