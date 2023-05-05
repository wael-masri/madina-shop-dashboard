import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusShowBrand } from "../../Redux/Actions/PopupsActions";
import {
  CloseIconPop,
  Container,
  WrapperCloseButton,
  Wrapper,
  Wrap,
  WrapperContain,
  WrapperImage,
  WrapperInfo,
  WrapperPublish,
  Image,
  LabelStatus,
  WrapperSingleInfo,
  SingleInfoTitle,
  SingleInfoText,
} from "./Style";
import moment from "moment";
const ShowBrand = () => {
  const dispatch = useDispatch();
  const dataBrand = useSelector(state => state.otherState) 
  
  return (
    <Container>
      <WrapperCloseButton
        onClick={() => {
          dispatch(changeStatusShowBrand(false));
        }}
      >
        <CloseIconPop />
      </WrapperCloseButton>
      <Wrap>
        <Wrapper>
          <WrapperContain>
            <WrapperImage>
              <Image src={dataBrand.dataShowBrand.row.image} alt="picCat" />
            </WrapperImage>
            <WrapperInfo>
              <WrapperSingleInfo>
                <SingleInfoTitle>ID:</SingleInfoTitle>
                <SingleInfoText> {dataBrand.dataShowBrand.row._id}</SingleInfoText>
              </WrapperSingleInfo>
              <WrapperSingleInfo>
                
                <SingleInfoText>{moment(dataBrand.dataShowBrand.row.createdAt).format("ddd MMM DD YYYY")}</SingleInfoText>
              </WrapperSingleInfo>
              <WrapperSingleInfo>
                <SingleInfoTitle>Brand:</SingleInfoTitle>
                <SingleInfoText> {dataBrand.dataShowBrand.row.name}</SingleInfoText>
              </WrapperSingleInfo>
            </WrapperInfo>
            <WrapperPublish>
              <LabelStatus>{dataBrand.dataShowBrand.row.status? "Published" : "Unpublished"}</LabelStatus>
            </WrapperPublish>
          </WrapperContain>
        </Wrapper>
      </Wrap>
    </Container>
  );
};

export default ShowBrand;
