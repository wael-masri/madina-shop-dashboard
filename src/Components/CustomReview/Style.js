import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperButtonAdd = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonAdd = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.ICONCOLOR};
  border: 1px solid ${({ theme }) => theme.ICONCOLOR};
  padding: 9px 12px;
  transition: ${({theme}) => theme.TRANSITION};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.ICONCOLOR};
    color: ${({ theme }) => theme.WHITECOLOR};
    transition: ${({theme}) => theme.TRANSITION};
  }
`;

export const LinkTo = styled(Link)`
text-decoration: none;
color: inherit;
`;