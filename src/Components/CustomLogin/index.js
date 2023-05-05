import React from "react";
import { ForgetPassword, FormLogin } from "../../SubComponents";
import { Container, Wrapper, FirstWrap, SeconsWrap, ImgCover } from "./Style";
import coverimg from "../../Assets/Images/loginback.jpg";
import { useSelector } from "react-redux";
const CustomLogin = () => {
 
  const status = useSelector(state => state.popups);
  return (
    <Container>
      <Wrapper>
        <FirstWrap>
          <FormLogin />
        </FirstWrap>
        <SeconsWrap>
          <ImgCover src={coverimg} alt="coverback" />
        </SeconsWrap>
        {status.isForgetPassword ? <ForgetPassword /> : <></>}
      </Wrapper>
    </Container>
  );
};

export default CustomLogin;
