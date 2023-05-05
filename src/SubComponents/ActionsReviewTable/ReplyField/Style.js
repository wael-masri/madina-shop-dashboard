import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const SpanColor = styled.span`
color: ${({theme,stts}) => stts === "done"? theme.GREENCOLOR : theme.REDCOLOR};

`;