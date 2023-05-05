import React from "react";
import {
  Container,
  ImageProfile,
  Wrapper,
  WrapperImage,
  WrapperInfo,
  WrapperName,
  ContainerBox,
  InfoBox,
  Bolded,
  SecondInfo,
  Colored,
} from "./Style";
import niImage from "../../../Assets/Images/noImage.png";
import moment from "moment";

const SideEdit = ({ data }) => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperImage>
            {data.image ? (
              <ImageProfile src={data.image} alt="profpic" />
            ) : (
              <ImageProfile src={niImage} alt="profpic" />
            )}
          </WrapperImage>
          <WrapperName>{data.name}</WrapperName>
          <WrapperInfo>{data.email}</WrapperInfo>
        </Wrapper>
      </Container>
      <ContainerBox>
        <InfoBox>
          <Bolded>Registration:</Bolded>{" "}
          {moment(data.createdAt).format("ddd MMM DD YYYY")}
        </InfoBox>
        <InfoBox>
          <Bolded>Last Seen:</Bolded>{" "}
          {moment(data.createdAt).format("ddd MMM DD YYYY")}
        </InfoBox>
       
      </ContainerBox>
     
    </>
  );
};

export default SideEdit;
