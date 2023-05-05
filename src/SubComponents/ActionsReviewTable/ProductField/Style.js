import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;

`;
export const ImageCover = styled.img`
object-fit: cover;
width: 40px;
height: 40px;
border-radius: 50%;
`;
export const TitleProduct = styled.div`
color: ${({theme}) => theme.TEXTCOLOR1};
display: flex;
justify-content: center;
margin-left: 5px;
align-items: center;
`;