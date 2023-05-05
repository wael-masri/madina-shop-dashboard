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
import CategoryApi from "../../Api/CategoryApi";
import SideEdit from "./SideEdit";
import CropImage from "./CropImage";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CustomEditCategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageUp, setImageUp] = useState(null);
  const [dataCategory, setDataCategory] = useState(null);
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
      .required("Category is Required !")
      .max(22, "Category is Too Long!")
      .min(3, "Category is Too Short!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isDirty },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
  });
  useEffect(() => {
    const checkDate = async () => {
      const dataOfCategory = await location.state;
      if (!dataOfCategory) {
        navigate(-1);
      } else {
        let objReset = {};
        const { name, status, image, _id } = dataOfCategory;
        objReset = {
          name,
        };
        const dataofCategoryuse = {
          name,
          status,
          image,
          _id,
        };
        setInputData((prevState) => ({ ...prevState, status: status }));
        setDataCategory(dataofCategoryuse);
        setLoading(false);
        reset(objReset);
      }
    };
    checkDate();
  }, []);

  const handleSubmitAddProduct = async (data) => {
    setBlockClick(true);
    let updateCategory = {};
    updateCategory.status = inputData.status;
    let formData = new FormData();
      Object.entries(dirtyFields).forEach((dirtyField) => {
        updateCategory[dirtyField[0]] = data[dirtyField[0]];
      });
      if (imgAfterCrop !== null) {
        formData.append("image", imgAfterCrop);
        const userImage = await CategoryApi.createImage(formData);
        userImage && (updateCategory.image = userImage.data);
      }
      if (imgAfterCrop === null && urlImage === null) {
        updateCategory.image = "";
      }
      if (Object.keys(updateCategory).length !== 0) {
        try {
          const user = await CategoryApi.update(
            dataCategory._id,
            updateCategory
          );
          user && navigate(-1);
          user && setUrlImage(null);
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
        <Title>Edit Category of {dataCategory.name}</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage>
              <SideEdit data={dataCategory} />{" "}
            </WrapperImage>
            <WrapperInfo>
              <SubTitle>Change Category picture</SubTitle>
              <Line />
              <UploadImage
                imageUp={imageUp}
                urlImage={urlImage}
                setUrlImage={setUrlImage}
                setImageUp={setImageUp}
                setOpenCrop={setOpenCrop}
                setImgAfterCrop={setImgAfterCrop}
                dataCategory={dataCategory}
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

export default CustomEditCategory;
