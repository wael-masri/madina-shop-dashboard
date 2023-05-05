import React, { useState} from "react";
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
import SubCategoryApi from "../../Api/SubCategoryApi";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CustomAddSubCategory = () => {
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
      .required("SubCategory is Required !")
      .max(35, "SubCategory is Too Long!")
      .min(3, "SubCategory is Too Short!"),
      category: yup.string().required("Category is Required !"),
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
     let updateSubCategory = { ...data };
     updateSubCategory.status = inputData.status;
     try {
      const category = await SubCategoryApi.create(updateSubCategory);
     category && navigate(-1);
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
        <Title>Add SubCategory</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage></WrapperImage>
            <WrapperInfo>
              <SubTitle>SubCategory information</SubTitle>
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

export default CustomAddSubCategory;
