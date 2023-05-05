import React from "react";
import RatingField from "../RatingField";

import {
  Title,
  WrapperTitle,
  Container,
  WrapperLabel,
  WrapperValue,
  WrapperInfo,
  Image,
} from "./Style";

const ProductDetails = ({ dataReview }) => {
  return (
    <Container>
      <WrapperTitle>
        <Title>Product</Title>
      </WrapperTitle>
      <WrapperInfo direction="left">
        <WrapperLabel>ID :</WrapperLabel>
        <WrapperValue>{dataReview._id}</WrapperValue>
      </WrapperInfo>
      <WrapperInfo direction="right">
        <RatingField data={dataReview} />
        <WrapperValue>
          <WrapperLabel>(12 customer review)</WrapperLabel>
        </WrapperValue>
      </WrapperInfo>
      <WrapperInfo direction="left">
        <WrapperLabel>
          <Image src={dataReview.product.imageCover} alt="coverUser" />
        </WrapperLabel>
        <WrapperValue>{dataReview.product.title}</WrapperValue>
      </WrapperInfo>
    </Container>
  );
};

export default ProductDetails;
