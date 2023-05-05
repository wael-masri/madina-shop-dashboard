import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 5px;
 
`;

export const WrapperTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.TEXTCOLOR2};
  position: relative;
  display: flex;
  justify-content: center;
  &::after {
    content: " ";
    top: 100%;

    position: absolute;
    height: 3px;
    background: ${({ theme }) => theme.ICONCOLOR};
    border-radius: 10px;
    width: 60%;
  }
`;


export const WrapperInfo = styled.div`
width: 100%;
display: flex;
justify-content: ${({direction}) => direction === "left"? "flex-start" : "flex-end"};
margin-bottom: 5px;

`;
export const WrapperLabel = styled.div`
font-weight: 500;
color: ${({ theme }) => theme.TEXTCOLOR2};
`;
export const WrapperValue = styled.div`
margin-left: 5px;
display: flex;
justify-content: center;
align-items: center;
`;
export const Image = styled.img`
object-fit: cover;
width: 60px;
height: 60px;
border-radius: 50%;
`;