import React from "react";
import { Container, Wrapper, ContainerTextArea, ErrMsg,ButtonAction,IconReply } from "./Style";
import { CustomTextArea } from "../../../SubComponents";
const FormReply = ({ register, errors,blockClick }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <ContainerTextArea>
            <CustomTextArea
              placeholder="Reply.."
              register={register}
              name="reply"
            />
             <ErrMsg>{errors.reply?.message}</ErrMsg>
          </ContainerTextArea>
         
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
         <ButtonAction  type="submit"  disabled={blockClick} >Send <IconReply /></ButtonAction>
        </Wrapper>
      </Container>
    </>
  );
};

export default FormReply;
