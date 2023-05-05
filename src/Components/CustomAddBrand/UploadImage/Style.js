import styled from "styled-components";

export const BoxUpload = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.GRAYCOLOR};
  border: 3px dashed ${({ theme }) => theme.BACKGROUND1};
  min-height: 130px;
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
  border: 1px solid ${({ theme }) => theme.WHITECOLOR};
  padding: 7px 13px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
`;
export const Bolded = styled.div`
  font-weight: 600;
  margin: 10px 0;
`;
export const InputFile = styled.input``;

export const ImageName = styled.div`
  color: ${({ theme }) => theme.ICONCOLOR};
  margin: 10px 0;
`;
export const ImageProfile = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
border-radius: 50%;
margin-bottom: 20px;
`;