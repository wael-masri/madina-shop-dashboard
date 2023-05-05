import styled from "styled-components";

export const Container = styled.div`

width: 100%;
`;
export const TitleBadge = styled.div`

font-size: 20px;
color: ${({theme}) => theme.TEXTCOLOR2};
padding:15px 10px;
font-weight: 600;
`;
export const WrapperTopTitles = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
background-color: ${({theme}) => theme.BACKGROUND1};
padding: 15px 0;
`;
export const WrapperItems = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({theme}) => theme.BACKGROUND2};
padding: 15px 0;
margin: 0 10px;

border-bottom: 2px solid ${({theme}) => theme.HOVERICON};
transition: ${({theme}) => theme.TRANSITION};
&:hover {
    transition: ${({theme}) => theme.TRANSITION};
    background-color: ${({theme}) => theme.HOVERICON};
}
`;
export const TopTitles = styled.div`
color: ${({theme}) => theme.TEXTCOLOR2};
font-size: 15px;
font-weight: 600;
`;

export const Item = styled.div`
flex:1;
color: ${({theme,color}) => color? theme.ICONCOLOR : theme.TEXTCOLOR1};
font-weight: ${({color}) => color? "600" : ""};
font-size: 15px;
display: flex;
justify-content: flex-start;


`;
export const ButtonMore = styled.div`

background-color: ${({theme}) => theme.BACKGROUND1};
display: flex;
font-size: 15px;
font-weight: 600;
justify-content: center;
cursor: pointer;
align-items: center;
padding: 10px 0;
margin: 0 5px;
border-radius: 10px;
color:${({theme}) => theme.TEXTCOLOR1};
transition: ${({theme}) => theme.TRANSITION};
&:hover {
    transition: ${({theme}) => theme.TRANSITION};
    background-color: ${({theme}) => theme.HOVERICON};
}
`;