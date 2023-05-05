import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const ImgCover = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
export const FirstWrap = styled.div`
  flex: 1;

  background-color: ${({ theme }) => theme.BACKGROUND2};
`;
export const SeconsWrap = styled.div`
  flex: 1;

  background-color: ${({ theme }) => theme.BACKGROUND1};
`;

