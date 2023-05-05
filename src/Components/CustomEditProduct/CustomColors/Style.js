import styled from "styled-components";
import { MdOutlineAdd } from "react-icons/md";
export const Container = styled.div`
  padding: 10px 5px;
  position: relative;
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
export const WrapperColors = styled.div`
  padding: 5px;
  max-height: 100px;
  height: 100px;
  overflow: auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  
`;
export const InsideColor = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "none")};
  
`;
export const Colors = styled.div`
  width: 30px;
  cursor: pointer;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  margin: 5px 0;
  border: 3px solid ${({ theme,isFocus }) => isFocus?  theme.TEXTCOLOR2 : theme.BACKGROUND2};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AddIconColor = styled(MdOutlineAdd)`
  color: ${({ theme }) => theme.TEXTCOLOR2};
  font-size: 25px;
`;
export const WrapperPicker = styled.div`
position: absolute;
z-index: 111111;
`;
