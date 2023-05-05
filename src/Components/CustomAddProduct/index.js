import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductApi from "../../Api/ProductApi";
import CropImage from "./CropImage";
import CustomColors from "./CustomColors";
import CustomDetails from "./CustomDetails";
import CustomModel from "./CustomModel";
import CustomSizes from "./CustomSizes";
import CustomTags from "./CustomTags";
import CustomUploadImg from "./CustomUploadImg";
import CustomUploadImgs from "./CustomUploadImgs";
import FormButtons from "./FormButtons";
import FormProduct from "./FormProduct";
import {
  Container,
  Wrapper,
  WrapperInfo,
  WrapperSide,
  Title,
  Line,
  SubTitle,
  CopyWrite,
} from "./Style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { clearImages } from "../../Redux/Actions/OtherStateActions";
const CustomAddProduct = () => {
  const OtherState = useSelector((state) => state.otherState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errImage, setErrImage] = useState(null);
  const [imTyping, setImTyping] = useState(false);
  const [inputData, setInputData] = useState({
    color: [],
    size: [],
    model: [],
    tag: [],
    status: true,
    imageCover: null,
    images: [],
  });

  const formFocusHandler = (e) => {
    setImTyping(true);
  };

  const productSchema = yup.object().shape({
    title: yup
      .string()
      .required("Title is Required !")
      .min(3, "Title is Too Short!"),
    description: yup
      .string()
      .required("Description is Required !")
      .min(20, "Description is Too Short!"),
    quantity: yup.string().required("Quantity is Required !"),
    price: yup
      .string()
      .required("Price is Required !")
      .max(20000, "Price is Too long!"),
    category: yup.string().required("Category is Required !"),
    subCategories: yup.array().required("SubCategories is Required !"),
    brand: yup.string().required("Brand is Required !"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  const preparNewProduct = (newProduct) => {
    newProduct.title = newProduct.title.trim();
    newProduct.description = newProduct.description.trim();
    newProduct.imageCover = inputData.imageCover;
    if (inputData.images.length !== 0) {
      newProduct.images = inputData.images;
    }
    if (inputData.color.length !== 0) {
      newProduct.color = inputData.color;
    }
    if (inputData.size.length !== 0) {
      newProduct.size = inputData.size;
    }
    if (inputData.model.length !== 0) {
      newProduct.model = inputData.model;
    }
    if (inputData.tag.length !== 0) {
      newProduct.tag = inputData.tag;
    }
    if (inputData.priceAfterDiscount && inputData.expire) {
      newProduct.priceAfterDiscount = inputData.priceAfterDiscount;
      newProduct.expire = inputData.expire;
    }
    newProduct.status = inputData.status;
  };
  const handleSubmitAddProduct = async (data) => {
    if (inputData.imageCover !== null) {
      let newProduct = { ...data };
      let formData = new FormData();
      preparNewProduct(newProduct);
      formData.append("imageCover", newProduct.imageCover);
      if (newProduct.images && newProduct.images.length !== 0) {
        newProduct.images.forEach((element) =>
          formData.append("images", element)
        );
      }
      const productImage = await ProductApi.createImage(formData);
      if (productImage) {
        newProduct.imageCover = productImage.data.image;
        newProduct.images = productImage.data.images;
        const product = await ProductApi.create(newProduct);

        product && navigate(-1);
        product && dispatch(clearImages());
      }
    } else {
      setErrImage((prevState) => ({
        ...prevState,
        imageCoverErr: "Image Cover Is Required!",
      }));
    }
  };
  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };
  const ContainerPage = () => (
    <Container>
      <Title>Add Product</Title>
      <form
        onSubmit={handleSubmit(handleSubmitAddProduct)}
        onKeyDown={(e) => checkKeyDown(e)}
        onFocus={formFocusHandler}
      >
        <Wrapper>
          <WrapperSide>
            <CustomColors setInputData={setInputData} setImTyping={setImTyping} />
            <Line />
            <CustomSizes setInputData={setInputData} setImTyping={setImTyping} />
            <Line />
            <CustomModel setInputData={setInputData} setImTyping={setImTyping} />
            <Line />
            <CustomTags setInputData={setInputData} setImTyping={setImTyping} />
            <Line />
            <CustomDetails
              register={register}
              errors={errors}
              setInputData={setInputData}
              inputData={inputData}
            />
            <Line />
          </WrapperSide>
          <WrapperInfo>
            <SubTitle>Cover Product</SubTitle>
            <CustomUploadImg setImTyping={setImTyping} setInputData={setInputData} errImage={errImage} />
            <Line />
            <SubTitle>Second Images</SubTitle>
            <CustomUploadImgs setImTyping={setImTyping} setInputData={setInputData} />
            <Line />
            <SubTitle>Product Information</SubTitle>
            <FormProduct
              register={register}
              errors={errors}
              setInputData={setInputData}
              inputData={inputData}
              Controller={Controller}
              control={control}
              setImTyping={setImTyping}
            />
            <Line />
            <FormButtons imTyping={imTyping} />
          </WrapperInfo>
        </Wrapper>
      </form>

      <CopyWrite>© 2023 All Rights Reserved by WaelMasri</CopyWrite>
      {OtherState.openCropImage ? <CropImage /> : null}
    </Container>
  );

  return ContainerPage();
};

export default CustomAddProduct;
