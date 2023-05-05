import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
`;
export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;

`;
export const WrapperBody = styled.div`
flex: 4;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
export const Title = styled.div`
font-weight: 500;
font-size: 28px;
letter-spacing: 1px;
color: ${({theme}) => theme.TEXTCOLOR1};
margin: 10px 0;
`;
export const SubTitle = styled.div`
font-weight: 400;
font-size: 15px;
letter-spacing: 1px;
color: ${({theme}) => theme.TEXTCOLOR2};
margin-bottom: 10px;
`;
export const WrapperInput = styled.div`
width: 60%;
height: 40px;
margin: 10px 0;
`
export const WrapperButton = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;


`;
export const Buttons = styled.button`
padding: 10px 20px;
border: none;
background-color: ${({theme,color}) => color? "transparent" : theme.ICONCOLOR};
color: ${({theme,color}) => color? theme.REDCOLOR : "#fff"};
border: 1px solid ${({color,theme}) => color? theme.REDCOLOR : theme.ICONCOLOR};
margin: 0 10px;
cursor: pointer;
border-radius: 15px;
transition: ${({theme}) => theme.TRANSITION};
&:hover {
    background-color: transparent;
    color: ${({theme,color}) => color? "" : theme.ICONCOLOR};
    transition: ${({theme}) => theme.TRANSITION};

}
`;
