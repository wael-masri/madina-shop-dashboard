import styled from "styled-components";

export const Container = styled.div`
width: ${({full}) => full? "100vw" : "100%"};
height: ${({full}) => full? "100vh" : "100%"};
display: flex;
justify-content: center;
align-items: center;
background-color: ${({theme}) => theme.BACKGROUND1};
`;

export const ImageLoading = styled.img`
width: 200px;
`;