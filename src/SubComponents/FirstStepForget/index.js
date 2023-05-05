import React from "react";
import {
  Container,
  Wrapper,
  WrapperBody,
  WrapperButton,
  Buttons,
  Title,
  SubTitle,
  WrapperInput,
} from "./Style";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInputLogin from "../CustomInputLogin";

import { ErrorMsg } from "../../Assets/Theme";
import AuthApi from "../../Api/AuthApi";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { changeStatusForgetPassword } from "../../Redux/Actions/PopupsActions";
import { setEmailForgetPassword } from "../../Redux/Actions/OtherStateActions";
const forgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email required!"),
});
const FirstStepForget = ({ handleNext }) => {
 
  
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const alertMsg = () => {
    enqueueSnackbar("The email you entered is incorrect!");
  };
  const handleSubmit = async (values) => {
    let newObject = {};
    const email = values.email.trim();
    dispatch(setEmailForgetPassword(email));
    newObject = { email };
    try {
      const res = await AuthApi.forgetPassword(newObject);
      res && handleNext();
    } catch (err) {
      console.log(err.data.message);
      err.data.message && alertMsg();
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgetPasswordSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ width: "100%", height: "100%" }}>
            <Wrapper>
              <WrapperBody>
                <Title>Forgot Password</Title>
                <SubTitle>Please enter your email address</SubTitle>

                <WrapperInput>
                  <CustomInputLogin
                    type="text"
                    placeholder="@.."
                    name="email"
                  />
                </WrapperInput>
                {errors.email && touched.email ? (
                  <ErrorMsg width="60%">{errors.email}</ErrorMsg>
                ) : null}
              </WrapperBody>
              <WrapperButton>
                <Buttons type="submit">Next</Buttons>
                <Buttons
                  color="red"
                  onClick={() => dispatch(changeStatusForgetPassword(false))}
                >
                  Exit
                </Buttons>
              </WrapperButton>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FirstStepForget;
