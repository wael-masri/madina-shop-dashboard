import styled from "styled-components";
import { AiOutlineUnorderedList, AiOutlineAlert } from "react-icons/ai";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { SlSettings } from "react-icons/sl";
import { MdOutlineModeNight, MdOutlineLightMode } from "react-icons/md";
export const IconDark = styled(MdOutlineModeNight)`
  color: ${({ theme }) => theme.ICONCOLOR};
  font-size: 25px;
`;
export const IconLight = styled(MdOutlineLightMode)`
  color: ${({ theme }) => theme.ICONCOLOR};
  font-size: 25px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;
export const IconMenu = styled(AiOutlineUnorderedList)`
  color: ${({ theme }) => theme.ICONCOLOR};
  font-size: 25px;
`;

export const IconSetting = styled(SlSettings)`
  color: ${({ theme }) => theme.ICONCOLOR};
  font-size: 25px;
`;
export const IconAlert = styled(AiOutlineAlert)`
  color: ${({ theme }) => theme.ICONCOLOR};
  font-size: 25px;
`;
export const WrapperIcons = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    transition: ${({ theme }) => theme.TRANSITION};
    background-color: ${({ theme }) => theme.HOVERICON};
  }
`;
export const WrapperIconsBar = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
`;
export const WrapperProfile = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND2};
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 3px 6px;
  gap: 5px;
  cursor: pointer;
  z-index: 11111;
`;
export const ImageProfile = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;
export const InfoProfile = styled.div`
  color: ${({ theme }) => theme.TEXTCOLOR1};
`;
export const Bolded = styled.span`
  color: ${({ theme }) => theme.ICONCOLOR};
  font-weight: 600;
`;

export const IconDown = styled(BiChevronDown)`
  vertical-align: middle;
`;
export const IconUp = styled(BiChevronUp)`
  vertical-align: middle;
`;
