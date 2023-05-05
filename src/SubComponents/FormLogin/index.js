import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { Formik, Form } from "formik";
import CustomInputLogin from "../CustomInputLogin";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../Api/AuthApi";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import {
  Container,
  Wrapper,
  LogoImg,
  WrapperInput,
  TitleLogin,
  ForgetPassword,
  WrapperButton,
  ButtonLogin,
  WrapperForget,
  Colored,
  CopyWrite,
} from "./Style";
import { ErrorMsg } from "../../Assets/Theme";
import { useDispatch } from "react-redux";
import { changeStatusForgetPassword } from "../../Redux/Actions/PopupsActions";
const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password is too short!")
    .required("Password Required!"),
  email: Yup.string().email("Invalid email!").required("Email Required!"),
});
const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (msg) => {
    enqueueSnackbar(msg);
  };
  const handleSubmit = async (values) => {
    let newObject = {};
    const email = values.email.trim();
    const password = values.password.trim();
    newObject = { email, password };
    try {
      const res = await AuthApi.signin(newObject);

      if (
        (res && res.role === "admin" && res.active) ||
        (res && res.role === "manager" && res.active)
      ) {
        localStorage.setItem("tokenMadinaShop", res.token);
        navigate("/dashboard");
      } else {
        handleClick("This account is not allowed to login");
      }
    } catch (err) {
      err && err.data.message && handleClick("Username or Password incorrect");
    }
  };
  return (
    <Container>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%", height: "100%" }}>
            <Wrapper>
              <LogoImg src={logo} alt="logopic" />
              <TitleLogin>
                Welcom to dashboard <Colored>MadinaShop</Colored>
              </TitleLogin>

              <WrapperInput>
                <CustomInputLogin
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                />
              </WrapperInput>
              {errors.email && touched.email ? (
                <ErrorMsg width="45%">{errors.email}</ErrorMsg>
              ) : null}
              <WrapperInput>
                <CustomInputLogin
                  type="password"
                  placeholder="PasCode"
                  action="password"
                  name="password"
                />
              </WrapperInput>
              {errors.password && touched.password ? (
                <ErrorMsg width="45%">{errors.password}</ErrorMsg>
              ) : null}
              <WrapperForget>
                <ForgetPassword
                  onClick={() => dispatch(changeStatusForgetPassword(true))}
                >
                  Forget your password?
                </ForgetPassword>
              </WrapperForget>
              <WrapperButton>
                <ButtonLogin type="submit">Login</ButtonLogin>
              </WrapperButton>
              <CopyWrite>© 2023 All Rights Reserved by WaelMasri</CopyWrite>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormLogin;
