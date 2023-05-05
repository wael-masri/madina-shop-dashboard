import styled from "styled-components";


export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND2};
  min-height: 100vh;
  width: 100%;
  position: relative;
`;
export const Wrapper = styled.div`
  
  margin: 0 30px;
  display: flex;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.BACKGROUND1};
`;
export const WrapperSide = styled.div`
  flex: 1;
  border-right: 5px solid ${({ theme }) => theme.BACKGROUND2};
`;
export const WrapperInfo = styled.div`
  flex: 3;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 10px 30px;
  
  text-transform: capitalize;
`;

export const Line = styled.div`
width: 100%;
height: 3px;
background-color: ${({ theme }) => theme.BACKGROUND2};
`;
export const SubTitle = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 10px 0;
`;
export const CopyWrite = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
