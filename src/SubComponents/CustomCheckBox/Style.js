import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export const LabelCheckboxCustom = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.TEXTCOLOR1};
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border: 3px solid ${({ theme }) => theme.TEXTCOLOR2};
    border-radius: 50%;
    margin-right: 10px;
  }
  &:hover::before {
    background-color: ${({ theme }) => theme.BACKGROUND1};
  }
`;
export const CheckboxCustom = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:hover + ${LabelCheckboxCustom}::before,${LabelCheckboxCustom}:hover:before {
   background-color: ${({ theme }) => theme.BACKGROUND1};
  }
   
  &:checked + ${LabelCheckboxCustom}::before {
   
    background-color: ${({ theme }) => theme.ICONCOLOR};
   
  }
`;

