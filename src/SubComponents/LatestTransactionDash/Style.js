import styled from "styled-components";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

export const ContainerTable = styled(TableContainer)`
background-color: ${({theme}) => theme.BACKGROUND2} !important;
width: 100% !important;
`;
export const TabTitleCell = styled(TableCell)`
color: ${({theme}) => theme.TEXTCOLOR2} !important;
font-weight: 600 !important;
`;
export const TabItemCell = styled(TableCell)`
color: ${({theme}) => theme.TEXTCOLOR1} !important;
`;
export const WrapperTabItemCell = styled.div`
display: flex;
align-items: center;
`;
export const ImageCustomer = styled.img`
width: 32px;
height: 32px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;
`;

export const StatusCustom = styled.span`
padding: 10px;
border-radius: 10px;
color: ${props => props.value === "Pending"? "#665200" : props.value === "Approved"? "#004d1a" : ""};
background-color: ${props => props.value === "Pending"? "#ffd633" :props.value === "Approved"? "#66ff66" : ""}; 

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
margin: 10px 5px;
border-radius: 10px;
color:${({theme}) => theme.TEXTCOLOR1};
transition: ${({theme}) => theme.TRANSITION};
&:hover {
    transition: ${({theme}) => theme.TRANSITION};
    background-color: ${({theme}) => theme.HOVERICON};
}
`;