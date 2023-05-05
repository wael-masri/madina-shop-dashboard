import styled from "styled-components";
import { MdDeleteSweep } from "react-icons/md";

export const WrapperDel = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border: 1px solid ${({ theme }) => theme.REDCOLOR};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;


export const IconDel = styled(MdDeleteSweep)`
  vertical-align: middle;
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 18px;
`;
export const WrappperButtonAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LabelStatus = styled.span`
color: ${({ theme,stat }) => stat === "valid"? theme.GREENCOLOR : theme.REDCOLOR};
`;