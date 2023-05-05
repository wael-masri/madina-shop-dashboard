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
import { useSnackbar } from "notistack";
import CustomInputLogin from "../CustomInputLogin";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ErrorMsg } from "../../Assets/Theme";
import AuthApi from "../../Api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusForgetPassword } from "../../Redux/Actions/PopupsActions";
import { setEmailForgetPassword } from "../../Redux/Actions/OtherStateActions";
const ThirdStepForget = ({ handleBack }) => {
 
    const dispatch = useDispatch();
    const otherState = useSelector(state => state.otherState)

  const resetPasswordSchema = Yup.object().shape({
    password: Yup.string().min(8, "Too Short!").required("Password Required!"),
    confirmPassword: Yup.string()
      .min(8, "Too Short!")
      .required("Confirm Password Required!")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const { enqueueSnackbar } = useSnackbar();

  const alertMsg = () => {
    enqueueSnackbar("The email you entered is incorrect!");
  };
  const handleSubmit = async (values) => {
    let newObject = {};
    const newPassword = values.password.trim();
    const email = otherState.emailForgetPassword;

    newObject = { email, newPassword };
    try {
      const res = await AuthApi.resetPassword(newObject);
      res && dispatch(setEmailForgetPassword(null));
      res && dispatch(changeStatusForgetPassword(false));
    } catch (err) {
      console.log(err.data.message);
      err.data.message && alertMsg();
    }
  };
  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={resetPasswordSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%", height: "100%" }}>
              <WrapperBody>
                <Title>Reset Password</Title>
                <SubTitle>
                  Reset Password to:
                  <br /> {otherState.emailForgetPassword}
                </SubTitle>
                <WrapperInput>
                  <CustomInputLogin
                    type="password"
                    name="password"
                    action="password"
                    placeholder="new password"
                  />
                  {errors.password && touched.password ? (
                    <ErrorMsg width="65%">{errors.password}</ErrorMsg>
                  ) : null}
                </WrapperInput>
                <WrapperInput>
                  <CustomInputLogin
                    type="password"
                    name="confirmPassword"
                    action="password"
                    placeholder="confirm password"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <ErrorMsg width="65%">{errors.confirmPassword}</ErrorMsg>
                  ) : null}
                </WrapperInput>
              </WrapperBody>
              <WrapperButton>
                <Buttons onClick={handleBack}>Back</Buttons>
                <Buttons type="submit">Reset password</Buttons>
                <Buttons
                  color="red"
                  onClick={() => dispatch(changeStatusForgetPassword(false))}
                >
                  Exit
                </Buttons>
              </WrapperButton>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default ThirdStepForget;
