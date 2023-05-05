import styled from "styled-components";

export const Container = styled.div`

padding: 20px 20px;
`;

export const Wrapper = styled.div`
width: 100%;
`;
export const WrapperImage = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
 export const ImageProfile = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
border-radius: 50%;
margin-bottom: 20px;
`;
export const WrapperName = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
font-size: 28px;
font-weight: 500;
letter-spacing: 1px;
color: ${({theme}) => theme.TEXTCOLOR1};

`;
export const WrapperInfo = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 15px;
color: ${({theme}) => theme.TEXTCOLOR2};
`;
export const ContainerBox = styled.div`
width: 100%;
background-color: ${({theme}) => theme.BACKGROUND2};
padding: 20px 0;

`;
export const InfoBox = styled.div`
font-size: 16px;
color:${({theme}) => theme.TEXTCOLOR2};
margin-left: 20px;
display: flex;
justify-content: space-between;
padding: 10px;
text-transform: capitalize;


`;
export const Bolded = styled.div`
font-weight: 500;
color:${({theme}) => theme.ICONCOLOR};
margin-right: 5px;
`;

export const SecondInfo = styled.div`
font-size: 16px;
color:${({theme}) => theme.ICONCOLOR};
display: flex;
justify-content: space-between;
padding: 10px;


`;
export const Colored = styled.div`
font-weight: 500;
color:${({theme}) => theme.TEXTCOLOR2};
margin-right: 5px;
`;