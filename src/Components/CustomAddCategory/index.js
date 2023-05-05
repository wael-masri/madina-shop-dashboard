import React, { useState, useEffect } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import FormEdit from "./FormEdit";
import UploadImage from "./UploadImage";
import FormButtons from "./FormButtons";
import CategoryApi from "../../Api/CategoryApi";
import CropImage from "./CropImage";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CustomAddCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageUp, setImageUp] = useState(null);
  const [openCrop, setOpenCrop] = useState(false);
  const [imgAfterCrop, setImgAfterCrop] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [errFromDB, setErrFromDB] = useState([]);
  const [imTyping, setImTyping] = useState(false);
  const [blockClick, setBlockClick] = useState(false);
  const [inputData, setInputData] = useState({
    status: true,
  });
  const productSchema = yup.object().shape({
    name: yup
      .string()
      .required("Category is Required !")
      .max(35, "Category is Too Long!")
      .min(3, "Category is Too Short!"),
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
    let updateCategory = { ...data };
    updateCategory.status = inputData.status;
    let formData = new FormData();
    if (imgAfterCrop !== null) {
      formData.append("image", imgAfterCrop);
      const categoryImage = await CategoryApi.createImage(formData);
      categoryImage && (updateCategory.image = categoryImage.data);
    }
    try {
      const category = await CategoryApi.create(updateCategory);
     category && navigate(-1);
      category && setUrlImage(null);
      setImgAfterCrop(null);
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
        <Title>Add Category</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage></WrapperImage>
            <WrapperInfo>
              <SubTitle>Create Category picture</SubTitle>
              <Line />
              <UploadImage
                imageUp={imageUp}
                urlImage={urlImage}
                setUrlImage={setUrlImage}
                setImageUp={setImageUp}
                setOpenCrop={setOpenCrop}
                setImgAfterCrop={setImgAfterCrop}
                setImTyping={setImTyping}
              />

              <SubTitle>Category information</SubTitle>
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
        {openCrop ? (
          <CropImage
            setOpenCrop={setOpenCrop}
            setUrlImage={setUrlImage}
            setImageUp={setImageUp}
            imageUp={imageUp}
            setImgAfterCrop={setImgAfterCrop}
          />
        ) : null}
      </Container>
    </>
  );
};

export default CustomAddCategory;
