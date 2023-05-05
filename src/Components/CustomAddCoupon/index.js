import React, { useState } from "react";
import {
  Container,
  Title,
  Wrapper,
  WrapperImage,
  WrapperInfo,
  SubTitle,
  Line,
  CopyWrite,
  ErrMsg,
} from "./Style";
import { useNavigate } from "react-router-dom";
import FormEdit from "./FormEdit";
import FormButtons from "./FormButtons";
import CouponApi from "../../Api/CouponApi";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CustomAddCoupon = () => {
  const navigate = useNavigate();
  const [errFromDB, setErrFromDB] = useState([]);
  const [imTyping, setImTyping] = useState(false);
  const [blockClick, setBlockClick] = useState(false);
  const [inputData, setInputData] = useState({
    status: true,
  });
  const productSchema = yup.object().shape({
    name: yup
      .string()
      .required("coupon is Required !")
      .max(35, "coupon is Too Long!")
      .min(3, "coupon is Too Short!"),
    discount: yup
      .number()
      .typeError('Discount must be a number !')
      .min(1, "min 1% !")
      .max(100, "min 100% !"),
    expire: yup.string().required("Expire is Required !"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const handleSubmitAddProduct = async (data) => {
     setBlockClick(true);
      let updateSubCoupon = { ...data };
   
      try {
      const coupon = await CouponApi.create(updateSubCoupon);
     coupon && navigate(-1);
    } catch (err) {
      err && err.data.errors && setErrFromDB(err.data.errors);
    }
     setBlockClick(false);
  };
  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };
  const formFocusHandler = (e) => {
    setImTyping(true);
  };
  return (
    <>
      <Container>
        <Title>Add Coupon</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage></WrapperImage>
            <WrapperInfo>
              <SubTitle>Coupon information</SubTitle>
              <Line />
              <FormEdit
                inputData={inputData}
                setInputData={setInputData}
                Controller={Controller}
                control={control}
                register={register}
                errors={errors}
              />
              <Line />
              <div>
                {errFromDB.map((val, index) => {
                  return <ErrMsg key={index}>{val.msg}</ErrMsg>;
                })}
              </div>
              <FormButtons imTyping={imTyping} blockClick={blockClick} />
            </WrapperInfo>
          </Wrapper>
        </form>
        <CopyWrite>© 2023 All Rights Reserved by WaelMasri</CopyWrite>
      </Container>
    </>
  );
};

export default CustomAddCoupon;
