import styled from "styled-components";


export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;

export const WrapperCircul = styled.div`
width: 150px;

`;
export const WrapperInfo = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
export const TotalPricesToday = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.TEXTCOLOR1};
font-size: 25px;
margin: 10px 0;
`;
export const TitlePrice = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: ${({theme}) => theme.TEXTCOLOR2};
font-weight: 600;
font-size: 18px;
margin: 10px 0;


`;