import styled from "styled-components"
import DatePicker from "react-datepicker";

export const DatePickerStyled = styled(DatePicker)`
border: none;
width: 100%;
border-bottom: 2px solid ${({theme}) => theme.TEXTCOLOR2};
background-color: transparent;
&:focus-visible {
    border:none !important;
    outline: none;
    border-bottom: 2px solid red !important;
}

`;