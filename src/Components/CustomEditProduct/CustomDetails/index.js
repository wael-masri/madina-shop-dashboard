import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  Wrapper,
  WrapperLabel,
  WrapperInput,
  FirstWrap,
  ErrMsg,
  WrapperErr,
  HideDiscount,
  WrapperTitle,
  StyledInput,
  WrapperSign,
  SignPc,
  Signprice,
  Signpercen,
  IconDate,
  ImageEx,
} from "./Style";
import moment from "moment";
import imageExpired from "../../../Assets/Images/expired.png";
const CustomDetails = ({
  setInputData,
  inputData,
  register,
  errors,
  oldData,
}) => {
  const [discountPrice, setDiscountPrice] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isPrice, setIsPrice] = useState(null);
  const [expireDate, setExpireDate] = useState("");
  const [statusDate, setStatusDate] = useState("");
  useEffect(() => {
    const editSomeData = () => {
      setIsPrice(oldData.price);
      if (oldData.priceAfterDiscount > 0) {
        setInputData((prevStat) => ({
          ...prevStat,
          priceAfterDiscount: oldData.priceAfterDiscount,
        }));
        let percentageDiscount =
          ((oldData.price - oldData.priceAfterDiscount) * 100) / oldData.price;
        setDiscountPrice(oldData.priceAfterDiscount);
        setPercentage(Math.ceil(percentageDiscount));
      }
      if (oldData.expire) {
        setInputData((prevStat) => ({
          ...prevStat,
          expire: oldData.expire,
        }));
        setExpireDate(moment(oldData.expire).format("YYYY-MM-DD"));
      }
    };
    editSomeData();
  }, [oldData]);
  useEffect(() => {
    const compareDate = () => {
      if(inputData.expire && inputData.expire !== null){
        let dateNow = new Date(Date.now()).getTime();
        let expire = new Date(inputData.expire).getTime();
        if (expire > dateNow) {
          setStatusDate("valid");
        } else {
          setStatusDate("invalid");
        }
      }
     
    };
    compareDate();
  }, [inputData]);
  const handleChangeDiscount = (e) => {
    setPercentage(e.target.value);
    if (isPrice > 0 && e.target.value > 0) {
      let discount = isPrice - (e.target.value / 100) * isPrice;
      setDiscountPrice(Math.trunc(discount));
      setInputData((prevStat) => ({
        ...prevStat,
        priceAfterDiscount: Math.trunc(discount),
      }));
    } else {
      let updatestate = { ...inputData };
      updatestate.priceAfterDiscount = 0;
      updatestate.expire = "";
      setDiscountPrice(0);
      setExpireDate("");
      setInputData(updatestate);
    }
  };
  const handleChangeDateDiscount = (e) => {

    if (e.target.value !== "") {
      setExpireDate(e.target.value);
      setInputData((prevStat) => ({
        ...prevStat,
        expire: e.target.value,
      }));
    } else {
      let updatestate = { ...inputData };
      updatestate.priceAfterDiscount = 0;
      updatestate.expire = "";
      setDiscountPrice(0);
      setExpireDate("");
      setInputData(updatestate);
      setPercentage(0);
    }
  };
  const openDiscountBox = (e) => {
    setIsPrice(e.target.value);
    setDiscountPrice(0);
    setPercentage(0);
  };

  return (
    <Container>
      <WrapperTitle>
        <Title>DETAILS</Title>
      </WrapperTitle>
      <Wrapper>
        <WrapperLabel>Quantity In Stock</WrapperLabel>
        <WrapperInput>
          <StyledInput
            type="number"
            name="quantity"
            {...register("quantity")}
            placeholder="QTY.."
          />
          <WrapperSign>
            <SignPc />
          </WrapperSign>
        </WrapperInput>
      </Wrapper>
      <WrapperErr>
        <ErrMsg>{errors.quantity?.message}</ErrMsg>
      </WrapperErr>
      <Wrapper>
        <WrapperLabel>Price</WrapperLabel>
        <WrapperInput>
          <StyledInput
            type="number"
            name="price"
            {...register("price")}
            placeholder="10000$"
            onChange={openDiscountBox}
          />
          <WrapperSign>
            <Signprice />
          </WrapperSign>
        </WrapperInput>
      </Wrapper>
      <WrapperErr>
        <ErrMsg>{errors.price?.message}</ErrMsg>
      </WrapperErr>
      <div style={{ position: "relative", margin: "30px 0px" }}>
        <Wrapper margin="marg">
          <WrapperLabel>Discount of product</WrapperLabel>
          <WrapperInput>
            <StyledInput
              type="number"
              name="discount"
              value={percentage}
              onChange={handleChangeDiscount}
            />
            <WrapperSign>
              <Signpercen />
            </WrapperSign>
          </WrapperInput>
        </Wrapper>
        <Wrapper margin="marg">
          <WrapperLabel>Expire Of Discount</WrapperLabel>
          <WrapperInput>
            <StyledInput
              type="date"
              name="expire"
              value={expireDate}
              onChange={handleChangeDateDiscount}
            />
            <WrapperSign>
              <IconDate />
            </WrapperSign>
          </WrapperInput>
        </Wrapper>
        <Wrapper>
          <FirstWrap>Price After Discount {discountPrice}$</FirstWrap>
        </Wrapper>
        {(isPrice === null || isPrice === "") &&
        (percentage === null || isPrice === "") ? (
          <HideDiscount></HideDiscount>
        ) : null}
      </div>
      {statusDate === "invalid" ? (
        <ImageEx src={imageExpired} alt="expic" />
      ) : null}
    </Container>
  );
};

export default CustomDetails;
