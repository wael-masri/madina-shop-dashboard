import React, { useState,useEffect } from "react";
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
  ImageEx
} from "./Style";
import imageExpired from "../../../Assets/Images/expired.png";
const CustomDetails = ({ setInputData, inputData, register, errors }) => {
  const [discountPrice, setDiscountPrice] = useState(0);
  const [expireDate, setExpireDate] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [isPrice, setIsPrice] = useState(null);
  const [statusDate, setStatusDate] = useState("");
  useEffect(() => {
    const compareDate = () => {
      if(inputData.expire){
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
      setDiscountPrice(Math.ceil(discount));
      setInputData((prevStat) => ({
        ...prevStat,
        priceAfterDiscount: discount,
      }));
    } else {
      let updatestate = { ...inputData };
      delete updatestate.priceAfterDiscount;
      delete updatestate.expire;
      setDiscountPrice(0);
      setExpireDate("");
      setInputData(updatestate);
    }
  };
  const handleChangeDateDiscount = (e) => {
    if (isPrice > 0 && e.target.value !== "") {
      setExpireDate(e.target.value);
      setInputData((prevStat) => ({
        ...prevStat,
        expire: e.target.value,
      }));
    } else {
      let updatestate = { ...inputData };
      delete updatestate.priceAfterDiscount;
      delete updatestate.expire;
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
    setExpireDate("");
  };
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData("text"));

    if (pastedData < 0) {
      e.preventDefault();
    }
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
            onKeyPress={preventMinus}
            placeholder="10000$"
            onChange={openDiscountBox}
            onPaste={preventPasteNegative}
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
              min="0"
              onKeyPress={preventMinus}
              onPaste={preventPasteNegative}
              value={percentage && Math.max(0, percentage)}
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
        {isPrice === null || isPrice === "" ? (
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
