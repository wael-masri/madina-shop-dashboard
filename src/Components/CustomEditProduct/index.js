import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
  LineMain,
} from "./Style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { clearImages } from "../../Redux/Actions/OtherStateActions";
import { Loading } from "../../SubComponents";
const CustomEditProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const OtherState = useSelector((state) => state.otherState);
  const navigate = useNavigate();
  const [errImage, setErrImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [oldData, setOldData] = useState(null);
  const [imTyping, setImTyping] = useState(false);
  const [blockClick, setBlockClick] = useState(false);
  const [inputData, setInputData] = useState({
    color: [],
    size: [],
    model: [],
    tag: [],
    status: true,
    imageCover: null,
    images: [],
  });
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
  useEffect(() => {
    const checkDate = async () => {
      const dataOfProduct = await location.state;
      if (!dataOfProduct) {
        navigate(-1);
      } else {
        setLoading(false);
        setOldData(dataOfProduct);
        let objReset = {};
        let {
          brand,
          category,
          description,
          price,
          quantity,
          subCategories,
          title,
        } = dataOfProduct;
        objReset = {
          brand,
          category,
          description,
          price,
          quantity,
          subCategories,
          title,
        };
        let arrSubCat = [];
        objReset.category = dataOfProduct.category._id;
        objReset.brand = dataOfProduct.brand._id;
        dataOfProduct.subCategories.forEach((element) => {
          arrSubCat.push(element._id);
        });
        objReset.subCategories = arrSubCat;
        reset(objReset);
      }
    };
    checkDate();
  }, []);
  const preparNewProduct = (updateProduct) => {
    updateProduct.title = updateProduct.title.trim();
    updateProduct.description = updateProduct.description.trim();
    updateProduct.imageCover = inputData.imageCover;
    if (inputData.color.length !== 0) {
      updateProduct.color = inputData.color;
    }
    if (inputData.size.length !== 0) {
      updateProduct.size = inputData.size;
    }
    if (inputData.model.length !== 0) {
      updateProduct.model = inputData.model;
    }
    if (inputData.tag.length !== 0) {
      updateProduct.tag = inputData.tag;
    }

    if(inputData.priceAfterDiscount > 0 && inputData.expire){
      updateProduct.priceAfterDiscount = inputData.priceAfterDiscount;
      updateProduct.expire = inputData.expire;
    }else{
      updateProduct.priceAfterDiscount = 0;
      updateProduct.expire = "";
    }

    updateProduct.status = inputData.status;
  };
  const preparImages = (updateProduct, formData) => {
    var arrImages = inputData.images.filter((val) => val !== "noImage");
    if (arrImages.length !== 0) {
      var arrBlob = arrImages.filter(
        (val) => typeof val === "object" && val !== null
      );
      let arrStr = arrImages.filter((val) => typeof val === "string");
      if (arrBlob.length !== 0) {
        updateProduct.images = [];
        arrBlob.forEach((element) => formData.append("images", element));
      }
      if (arrStr.length !== 0) {
        let URL = "http://localhost:5000/products/";
        let filterArr = arrStr.map((val) => val.replace(URL, ""));
        updateProduct.images = filterArr;
      }
    } else {
      updateProduct.images = [];
    }
  };
  const preparImageCover = (updateProduct, formData) => {
    if (
      typeof inputData.imageCover === "object" &&
      inputData.imageCover !== null
    ) {
      formData.append("imageCover", inputData.imageCover);
      updateProduct.imageCover = null;
    } else {
      let URL = "http://localhost:5000/products/";
      let images = inputData.imageCover.replace(URL, "");
      updateProduct.imageCover = images;
    }
  };
  const handleSubmitAddProduct = async (data) => {
    setBlockClick(true);
    if (inputData.imageCover !== null) {
      let updateProduct = { ...data };
      let formData = new FormData();
      preparImages(updateProduct, formData);
      preparNewProduct(updateProduct);
      preparImageCover(updateProduct, formData);
      const productImage = await ProductApi.createImage(formData);
      if (productImage) {
        productImage.data.image &&
          (updateProduct.imageCover = productImage.data.image);
        productImage.data.images &&
          (updateProduct.images = [
            ...updateProduct.images,
            ...productImage.data.images,
          ]);
      }
      const product = await ProductApi.update(oldData._id, updateProduct);
      product && navigate(-1);
      product && dispatch(clearImages());
    } else {
      setErrImage((prevState) => ({
        ...prevState,
        imageCoverErr: "Image Cover Is Required!",
      }));
    }
    setBlockClick(false);
  };
  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };
  const formFocusHandler = (e) => {
    setImTyping(true);
  };
  const ContainerPage = () =>
    loading ? (
      <Loading full={true} />
    ) : (
      <Container>
        <Title>Edit Product</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperSide>
              <CustomColors
                setInputData={setInputData}
                setImTyping={setImTyping}
                oldData={oldData.color && oldData.color}
              />
              <Line />
              <CustomSizes
                setInputData={setInputData}
                setImTyping={setImTyping}
                oldData={oldData.size && oldData.size}
              />
              <Line />
              <CustomModel
                setInputData={setInputData}
                setImTyping={setImTyping}
                oldData={oldData.model && oldData.model}
              />
              <Line />
              <CustomTags
                setInputData={setInputData}
                setImTyping={setImTyping}
                oldData={oldData.tag && oldData.tag}
              />
              <Line />
              <CustomDetails
                register={register}
                errors={errors}
                setInputData={setInputData}
                inputData={inputData}
                oldData={oldData && oldData}
              />
              <Line />
            </WrapperSide>
            <WrapperInfo>
              <SubTitle>Cover Product</SubTitle>
              <CustomUploadImg
                setImTyping={setImTyping}
                setInputData={setInputData}
                errImage={errImage}
                oldData={oldData && oldData}
              />
              <LineMain />
              <SubTitle>Second Images</SubTitle>
              <CustomUploadImgs
                setImTyping={setImTyping}
                setInputData={setInputData}
                oldData={oldData && oldData}
              />
              <LineMain />
              <SubTitle>Product Information</SubTitle>
              <FormProduct
                register={register}
                errors={errors}
                setInputData={setInputData}
                inputData={inputData}
                Controller={Controller}
                control={control}
                oldData={oldData && oldData}
                setImTyping={setImTyping}
              />
              <LineMain />
              <FormButtons imTyping={imTyping} blockClick={blockClick} />
            </WrapperInfo>
          </Wrapper>
        </form>

        <CopyWrite>© 2023 All Rights Reserved by WaelMasri</CopyWrite>
        {OtherState.openCropImage ? <CropImage /> : null}
      </Container>
    );

  return ContainerPage();
};

export default CustomEditProduct;
