import styled from "styled-components";
import {FiEdit2} from "react-icons/fi"


export const WrapperKanban = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;

`;
export const Line = styled.div`
width: 100%;

height: 2px;
background-color: ${({theme}) => theme.TEXTCOLOR2};
`;

export const ButtonAdd = styled.div`
margin-top: 35px;
margin-bottom: 10px;
padding: 5px 10px;
width: max-content;
border: 1px solid ${({theme}) => theme.TEXTCOLOR2};
color:${({theme}) => theme.TEXTCOLOR2};
cursor: pointer;
&:hover {
    border: 1px solid ${({theme}) => theme.ICONCOLOR};
color:${({theme}) => theme.ICONCOLOR};   
}
`;
export const WrapperTitleKanban = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 16px;
font-size: 18px;
font-weight: 500;
color: ${({theme,color}) => color? color : theme.TEXTCOLOR2};
`;
export const TitlesKanban = styled.div`


`;
export const WrapperBoxKanban = styled.div`

background-color: ${({snapshot,theme}) => snapshot.isDragging? theme.BACKGROUND1 : theme.BACKGROUND1};
border-radius: 5px;
margin: 10px 0;
padding: 5px 5px;
min-height: 50px;
`;
export const WrapperTitleiconkanban = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
color: ${({theme}) => theme.TEXTCOLOR2};


`;
export const TitleBoxKanban = styled.div`
font-size: 17px;
font-weight: 500;
color:${({theme}) => theme.ICONCOLOR};
`;
export const IconBoxKanban = styled(FiEdit2)`
font-size: 20px;
cursor: pointer;
&:hover {
    color:${({theme}) => theme.ICONCOLOR};
}

`;
export const DescBoxKanban = styled.div`
width: 100%;
color: ${({theme}) => theme.TEXTCOLOR1};
font-size: 15px;
padding: 0px;
margin: 0px;

`;
