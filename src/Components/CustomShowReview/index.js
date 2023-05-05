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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loading } from "../../SubComponents";
import ProductDetails from "./ProductDetails";
import BoxReview from "./BoxReview";
import FormReply from "./FormReply";
import ReviewApi from "../../Api/ReviewApi";
import UserApi from "../../Api/UserApi";
import FormButtons from "./FormButtons";

const CustomShowReview = () => {
  const navigate = useNavigate();
  const [errFromDB, setErrFromDB] = useState([]);
  const [dataReview, setDataReview] = useState([]);
  const [imTyping, setImTyping] = useState(false);
  const [updateOne, setUpdateOne] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openReply, setOpenReply] = useState(false);
  const [blockClick,setBlockClick] = useState(false);
  const location = useLocation();
 
  const productSchema = yup.object().shape({
    reply: yup
      .string()
      .required("Reply is Required !")
      .max(200, "Reply is Too Long!")
      .min(2, "Reply is Too Short!"),
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
      const idOfReview = await location.state;
      if (!idOfReview) {
        navigate(-1);
      } else {
        const review = await ReviewApi.getOne(idOfReview);
        if(review){
          if(review.data.reply){
            setOpenReply(true);
            reset(review.data);
          }
          setDataReview(review.data);
          setLoading(false);
        }
       
      }
    };
    checkDate();
  }, [updateOne]);

  const handleSubmitAddProduct = async (data) => {
      setBlockClick(true);
      let updateSubReview = { ...data };
     try {
      const review = await ReviewApi.update(dataReview._id,updateSubReview);
      review && navigate(-1);
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
 
  const handleBlock = async () => {
    const blocked = {active : !dataReview.user.active};
    const updated = await UserApi.update(dataReview.user._id,blocked);
    setUpdateOne(!updateOne);
  }

  return loading ? (
    <Loading full={true} />
  ) : (
    <>
      <Container>
        <Title>Review</Title>
        <form
          onSubmit={handleSubmit(handleSubmitAddProduct)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Wrapper>
            <WrapperImage>
              <ProductDetails dataReview={dataReview} />
            </WrapperImage>
            <WrapperInfo>
              <SubTitle>Review information</SubTitle>
              <Line />
               <BoxReview dataReview={dataReview} handleBlock={handleBlock} setOpenReply={setOpenReply}  />
              {openReply?  <FormReply register={register} errors={errors} blockClick={blockClick} /> : null} 
              <Line />
              <FormButtons imTyping={imTyping} />
              <div>
                {errFromDB.map((val, index) => {
                  return <ErrMsg key={index}>{val.msg}</ErrMsg>;
                })}
              </div>
            </WrapperInfo>
          </Wrapper>
        </form>
        <CopyWrite>© 2023 All Rights Reserved by WaelMasri</CopyWrite>
      </Container>
    </>
  );
};

export default CustomShowReview;
