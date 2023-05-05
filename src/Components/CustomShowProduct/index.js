import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  WrapperImages,
  WrapperImageCover,
  WrapperInfo,
  ImageCover,
  WrapperMiniImages,
  WrapperMiniImage,
  WrapperMiniImagesScroll,
  WrapperIconsScroller,
  ImageMini,
} from "./Style";
import DetailsSingleProduct from "./DetailsInfo";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../SubComponents";

const CustomShowProduct = () => {
  const refSlider = useRef(null);
  const scroll = (widthImg) => {
    refSlider.current.scrollLeft += widthImg;
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState(null);

  useEffect(() => {
    const checkDate = async () => {
      const dataOfProduct = await location.state;
      if (!dataOfProduct) {
        navigate(-1);
      } else {
        setDataProduct(dataOfProduct);
        setLoading(false);
      }
    };
    checkDate();
  }, [location, navigate]);

  return loading ? (
    <Loading full={true} />
  ) : (
    <Container>
      <Wrapper>
        <WrapperImages>
          <WrapperImageCover>
            <ImageCover src={dataProduct.imageCover} alt="photocover" />
          </WrapperImageCover>
          <WrapperMiniImages>
            {dataProduct.images.length !== 0 ? (
              <WrapperMiniImagesScroll ref={refSlider}>
                {dataProduct.images.map((val, index) => {
                  return (
                    <WrapperMiniImage key={index}>
                      <ImageMini src={val} alt="miniphoto" />
                    </WrapperMiniImage>
                  );
                })}
              </WrapperMiniImagesScroll>
            ) : null}

            <WrapperIconsScroller location="left" onClick={() => scroll(-200)}>
              <KeyboardArrowLeftIcon />
            </WrapperIconsScroller>
            <WrapperIconsScroller location="right" onClick={() => scroll(200)}>
              <ChevronRightIcon />
            </WrapperIconsScroller>
          </WrapperMiniImages>
        </WrapperImages>
        <WrapperInfo>
          <DetailsSingleProduct dataProduct={dataProduct} />
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
};

export default CustomShowProduct;
