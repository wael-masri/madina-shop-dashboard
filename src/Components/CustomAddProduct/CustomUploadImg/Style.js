import styled from "styled-components";

export const BoxUpload = styled.div`
  width: 90%;
  min-height: 460px;
  padding: 10px;
  background-color: ${({ theme }) => theme.GRAYCOLOR};
  border: 3px dashed ${({ theme }) => theme.BACKGROUND1};
  
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const LabelUpload = styled.div`
  color: ${({ theme }) => theme.WHITECOLOR};
`;
export const ButtonSelectFile = styled.div`
  color: ${({ theme }) => theme.WHITECOLOR};
  border: 1px solid ${({ theme }) => theme.ICONCOLOR};
  background-color:${({ theme }) => theme.ICONCOLOR};
  font-weight: 500;
  padding: 7px 13px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
  margin: 10px 0;
`;
export const Bolded = styled.div`
  font-weight: 600;
  margin: 10px 0;
`;
export const InputFile = styled.input``;

export const ImageCover = styled.img`
width: 400px;
height: 400px;
object-fit: cover;
border-radius: 5px;
`;

export const ErrMsg = styled.span`
font-size: 13px;
color:${({theme}) => theme.REDCOLOR};
`;