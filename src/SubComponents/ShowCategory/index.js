import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusShowCategory } from "../../Redux/Actions/PopupsActions";
import Img from "../../Assets/Images/noImage.png";
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
const ShowCategory = () => {
  const dispatch = useDispatch();
  const dataCat = useSelector(state => state.otherState) 
  console.log(dataCat.dataShowCategory)
  return (
    <Container>
      <WrapperCloseButton
        onClick={() => {
          dispatch(changeStatusShowCategory(false));
        }}
      >
        <CloseIconPop />
      </WrapperCloseButton>
      <Wrap>
        <Wrapper>
          <WrapperContain>
            <WrapperImage>
              <Image src={dataCat.dataShowCategory.row.image} alt="picCat" />
            </WrapperImage>
            <WrapperInfo>
              <WrapperSingleInfo>
                <SingleInfoTitle>ID:</SingleInfoTitle>
                <SingleInfoText> {dataCat.dataShowCategory.row._id}</SingleInfoText>
              </WrapperSingleInfo>
              <WrapperSingleInfo>
                
                <SingleInfoText>{moment(dataCat.dataShowCategory.row.createdAt).format("ddd MMM DD YYYY")}</SingleInfoText>
              </WrapperSingleInfo>
              <WrapperSingleInfo>
                <SingleInfoTitle>Category:</SingleInfoTitle>
                <SingleInfoText> {dataCat.dataShowCategory.row.name}</SingleInfoText>
              </WrapperSingleInfo>
            </WrapperInfo>
            <WrapperPublish>
              <LabelStatus>{dataCat.dataShowCategory.row.status? "Published" : "Unpublished"}</LabelStatus>
            </WrapperPublish>
          </WrapperContain>
        </Wrapper>
      </Wrap>
    </Container>
  );
};

export default ShowCategory;
