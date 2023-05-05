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
  ErrMsg
} from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../SubComponents";
import FormEdit from "./FormEdit";
import UploadImage from "./UploadImage";
import FormButtons from "./FormButtons";
import BrandApi from "../../Api/BrandApi";
import SideEdit from "./SideEdit";
import CropImage from "./CropImage";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CustomEditBrand = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageUp, setImageUp] = useState(null);
  const [dataBrand, setDataBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openCrop, setOpenCrop] = useState(false);
  const [imgAfterCrop, setImgAfterCrop] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [errFromDB, setErrFromDB] = useState([]);
  const [imTyping, setImTyping] = useState(false);
  const [blockClick, setBlockClick] = useState(false);
  const [inputData, setInputData] = useState({
    status: false,
  });
  const productSchema = yup.object().shape({
    name: yup
      .string()
      .required("Brand is Required !")
      .max(22, "Brand is Too Long!")
      .min(3, "Brand is Too Short!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields},
    control,
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  useEffect(() => {
    const checkDate = async () => {
      const dataOfBrand = await location.state;
      if (!dataOfBrand) {
        navigate(-1);
      } else {
        let objReset = {};
        const { name, status, image, _id } = dataOfBrand;
        objReset = {
          name,
        };
        const dataofBranduse = {
          name,
          status,
          image,
          _id,
        };
        setInputData((prevState) => ({ ...prevState, status: status }));
        setDataBrand(dataofBranduse);
        setLoading(false);
        reset(objReset);
      }
    };
    checkDate();
  }, []);

  const handleSubmitAddProduct = async (data) => {
    setBlockClick(true);
    let updateBrand = {};
    updateBrand.status = inputData.status;
    let formData = new FormData();
      Object.entries(dirtyFields).forEach((dirtyField) => {
        updateBrand[dirtyField[0]] = data[dirtyField[0]];
      });
      if (imgAfterCrop !== null) {
        formData.append("image", imgAfterCrop);
        const brandImage = await BrandApi.createImage(formData);
        brandImage && (updateBrand.image = brandImage.data);
      }
      if (imgAfterCrop === null && urlImage === null) {
        updateBrand.image = "";
      }
      if (Object.keys(updateBrand).length !== 0) {
        try {
          const brand = await BrandApi.update(
            dataBrand._id,
            updateBrand
          );
          brand && navigate(-1);
          brand && setUrlImage(null);
          setImgAfterCrop(null);
        } catch (err) {
          err && err.data.errors && setErrFromDB(err.data.errors);
        }
      }
    
    setBlockClick(false);
  };
  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };
  const formFocusHandler = (e) => {
    setImTyping(true);
  };
  return loading ? (
    <Loading full={true} />
  ) : (
    <>
      <Container>
        <Title>Edit Brand of {dataBrand.name}</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage>
              <SideEdit data={dataBrand} />{" "}
            </WrapperImage>
            <WrapperInfo>
              <SubTitle>Change Brand picture</SubTitle>
              <Line />
              <UploadImage
                imageUp={imageUp}
                urlImage={urlImage}
                setUrlImage={setUrlImage}
                setImageUp={setImageUp}
                setOpenCrop={setOpenCrop}
                setImgAfterCrop={setImgAfterCrop}
                dataBrand={dataBrand}
                setImTyping={setImTyping}
              />

              <SubTitle>Brand information</SubTitle>
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

export default CustomEditBrand;
