import styled from "styled-components";
import { MdOutlineAdd, MdOutlineRemoveCircle } from "react-icons/md";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
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

export const WrapperInputTag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;
export const WrapperBoxInput = styled.div`
  width: 50%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const WrapperInput = styled.div`
  flex: 3;
`;
export const WrapperButtonInput = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.ICONCOLOR};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  border: none;
  padding: 5px 10px !important;
  width: 100%;
  font-size: 16px;
  height: 100%;
  color: ${({ theme }) => theme.TEXTCOLOR1};
  background-color: ${({ theme }) => theme.BACKGROUND2};
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;

export const IconAdd = styled(MdOutlineAdd)`
  color: ${({ theme }) => theme.BACKGROUND2} !important;
  font-size: 25px;
`;
export const WrapperTagsBox = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND2};
  margin: 10px 0;
  height: 50px;
  position: relative;
`;
export const WrapperTags = styled.div`
  width: 200px;
  margin: 0px 25px;
  height: 100%;
  min-width: 85%;
  overflow: auto;
  display: flex;
  align-items: center;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const BoxSliderUtils = styled.div`
  height: 100%;
  width: 25px;

  background-color: ${({ theme }) => theme.ICONCOLOR};
  position: absolute;
  left: ${({ direction }) => (direction === "left" ? "0px" : "auto")};
  right: ${({ direction }) => (direction === "right" ? "0px" : "auto")};
  border-top-right-radius: ${({ direction }) =>
    direction === "left" ? "50%" : "0%"};
  border-bottom-right-radius: ${({ direction }) =>
    direction === "left" ? "50%" : "0%"};
  border-top-left-radius: ${({ direction }) =>
    direction === "right" ? "50%" : "0%"};
  border-bottom-left-radius: ${({ direction }) =>
    direction === "right" ? "50%" : "0%"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1111;
`;

export const IconNext = styled(BsArrowRightShort)`
  color: ${({ theme }) => theme.BACKGROUND2} !important;
  font-size: 25px;
`;
export const IconPrev = styled(BsArrowLeftShort)`
  color: ${({ theme }) => theme.BACKGROUND2} !important;
  font-size: 25px;
`;

export const WrapperTagValue = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR1};
  background-color: ${({ theme }) => theme.BACKGROUND1};
  margin: 5px;
  width: fit-content;
  padding: 5px 10px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-size: 14px;
  position: relative;
`;

export const IconRemoveTag = styled(MdOutlineRemoveCircle)`
  position: absolute;
  top: -5px;
  right: -5px;
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 18px;
`;
