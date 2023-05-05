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
} from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../SubComponents";
import FormEdit from "./FormEdit";
import UploadImage from "./UploadImage";
import FormButtons from "./FormButtons";
import UserApi from "../../Api/UserApi";
import SideEdit from "./SideEdit";
import CropImage from "./CropImage";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CustomEditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [imageUp, setImageUp] = useState(null);
  const [dataUser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openCrop, setOpenCrop] = useState(false);
  const [imgAfterCrop, setImgAfterCrop] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [errFromDB, setErrFromDB] = useState([]);
  const [imTyping, setImTyping] = useState(false);
  const [blockClick,setBlockClick] = useState(false);
  const phoneRegExp =
    /^(961(3|70|71|76|81|01|06)|(03|70|71|76|81|01|06))\d{6}$/;
  const productSchema = yup.object().shape({
    name: yup
      .string()
      .required("Username is Required !")
      .max(22, "Username is Too Long!")
      .min(3, "Username is Too Short!"),
    email: yup
      .string()
      .required("Email is Required !")
      .email("Email is not valid !"),
    phone: yup
      .string()
      .required("Phone is Required !")
      .matches(phoneRegExp, "Phone number is not valid"),
    role: yup.string().required("Role is Required !"),
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
      const dataOfUser = await location.state;
      if (!dataOfUser) {
        navigate(-1);
      } else {
        let objReset = {};
        const {
          name,
          email,
          phone,
          active,
          role,
          createdAt,
          profileImage,
          _id,
        } = dataOfUser;
        objReset = {
          name,
          email,
          phone,
          role,
        };
        const dataofuseruse = {
          name,
          email,
          phone,
          active,
          role,
          createdAt,
          profileImage,
          _id,
        };
        setDataUser(dataofuseruse);
        setLoading(false);
        reset(objReset);
      }
    };
    checkDate();
  }, []);

  const handleSubmitAddProduct = async (data) => {
    setBlockClick(true);
    let updateProfile = {};
    let formData = new FormData();

    if (isDirty) {
      Object.entries(dirtyFields).forEach((dirtyField) => {
        updateProfile[dirtyField[0]] = data[dirtyField[0]];
      });
      if (imgAfterCrop !== null) {
        formData.append("profileImage", imgAfterCrop);
        const userImage = await UserApi.updateImage(formData);
        userImage && (updateProfile.profileImage = userImage.data);
      }
      if (imgAfterCrop === null && urlImage === null) {
        updateProfile.profileImage = "";
      }
      if (Object.keys(updateProfile).length !== 0) {
        try {
          const user = await UserApi.update(dataUser._id, updateProfile);
          user && navigate(-1);
          user && setUrlImage(null);
          setImgAfterCrop(null);
        } catch (err) {
          err && err.data.errors && setErrFromDB(err.data.errors);
        }
      }
    } else {
      if (imgAfterCrop !== null) {
        formData.append("profileImage", imgAfterCrop);
        const userImage = await UserApi.updateImage(formData);
        userImage && (updateProfile.profileImage = userImage.data);
      }
      if (imgAfterCrop === null && urlImage === null) {
        updateProfile.profileImage = "";
      }
      if (updateProfile.profileImage || updateProfile.profileImage === "") {
        const user = await UserApi.update(dataUser._id, updateProfile);
        user && navigate(-1);
        user && setUrlImage(null);
        setImgAfterCrop(null);
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
        <Title>Edit user of {dataUser.name}</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage>
              <SideEdit data={dataUser} />{" "}
            </WrapperImage>
            <WrapperInfo>
              <SubTitle>Change profile picture</SubTitle>
              <Line />
              <UploadImage
                imageUp={imageUp}
                urlImage={urlImage}
                setUrlImage={setUrlImage}
                setImageUp={setImageUp}
                setOpenCrop={setOpenCrop}
                setImgAfterCrop={setImgAfterCrop}
                dataUser={dataUser}
                setImTyping={setImTyping}
              />

              <SubTitle>Account information</SubTitle>
              <Line />
              <FormEdit
                Controller={Controller}
                control={control}
                register={register}
                errors={errors}
              />
              <Line />
              <div>
                {errFromDB.map((val, index) => {
                  return <p key={index}>{val.msg}</p>;
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

export default CustomEditUser;
