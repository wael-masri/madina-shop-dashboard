import React, { useState } from "react";
import {
  Title,
  WrapperRtaing,
  NumberReviews,
  WrapperPrices,
  NewPrice,
  OldPrice,
  Discount,
  Desc,
  WrapperFeatures,
  WrapperButton,
  AddCartButton,
  FeaturesName,
  FeaturesItem,
  WrapperFeaturesItem,
  FeaturesColor,
  FeaturesCat,
  ButtonDec,
  ButtonInc,
  WrapperCounterCart,
  LabelCounter,
} from "./Style";
import RatingItem from "./Rating";
const DetailsSingleProduct = ({ dataProduct }) => {
  const [count, setCount] = useState(1);
  const handleChangeCounter = (action) => {
    if (action === "inc") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };

  return (
    <>
      <Title>{dataProduct.title}</Title>
      <WrapperRtaing>
        <RatingItem nb={dataProduct.rating} />
        <NumberReviews>(4 customer review)</NumberReviews>
      </WrapperRtaing>
      <WrapperPrices>
        <NewPrice>${dataProduct.price}</NewPrice>
        <OldPrice>${dataProduct.price}</OldPrice>
        <Discount>-30%</Discount>
      </WrapperPrices>
      <Desc>{dataProduct.description}</Desc>
      <WrapperFeatures>
        {dataProduct.model.length !== 0 ? (
          <>
            <FeaturesName>Model:</FeaturesName>
            <WrapperFeaturesItem>
              {dataProduct.model.map((val, index) => {
                return <FeaturesItem key={index}>{val}</FeaturesItem>;
              })}
            </WrapperFeaturesItem>
          </>
        ) : null}
      </WrapperFeatures>

      <WrapperFeatures>
        {dataProduct.size.length !== 0 ? (
          <>
            <FeaturesName>Size:</FeaturesName>
            <WrapperFeaturesItem>
              {dataProduct.size.map((val, index) => {
                return <FeaturesItem key={index}>{val}</FeaturesItem>;
              })}
            </WrapperFeaturesItem>
          </>
        ) : null}
      </WrapperFeatures>
      <WrapperFeatures>
        {dataProduct.color.length !== 0 ? (
          <>
            <FeaturesName>Color:</FeaturesName>
            <WrapperFeaturesItem>
              {dataProduct.color.map((val, index) => {
                return <FeaturesColor key={index} color={val}></FeaturesColor>;
              })}
            </WrapperFeaturesItem>
          </>
        ) : null}
      </WrapperFeatures>
      <WrapperFeatures>
        <FeaturesName>Category:</FeaturesName>
        <WrapperFeaturesItem>
          <FeaturesCat>&nbsp; {dataProduct.category.name}</FeaturesCat>
        </WrapperFeaturesItem>
      </WrapperFeatures>
      <WrapperFeatures>
        <FeaturesName>SubCategories:</FeaturesName>
        <WrapperFeaturesItem>
          
         {dataProduct.subCategories.map((val,index) => {
          return <FeaturesCat key={index}>&nbsp;{val.name}, </FeaturesCat>
         })}
        </WrapperFeaturesItem>
      </WrapperFeatures>
      <WrapperFeatures>
        
        {dataProduct.tag.length !== 0 ? (
          <>
            <FeaturesName>Tags:</FeaturesName>
            <WrapperFeaturesItem>
              {dataProduct.tag.map((val, index) => {
                return  <FeaturesCat>&nbsp;{val},</FeaturesCat>;
              })}
            </WrapperFeaturesItem>
          </>
        ) : null}
      </WrapperFeatures>

      <WrapperButton>
        <AddCartButton>Add To Cart</AddCartButton>
        <WrapperCounterCart>
          <ButtonDec onClick={() => handleChangeCounter("dec")} />
          <LabelCounter>{count}</LabelCounter>
          <ButtonInc onClick={() => handleChangeCounter("inc")} />
        </WrapperCounterCart>
      </WrapperButton>
    </>
  );
};

export default DetailsSingleProduct;
