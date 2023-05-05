import React from "react";
import RatingField from "../RatingField";
import {
  Container,
  Wrapper,
  WrapperHeader,
  WrapperHeader1,
  WrapperHeader2,
  WrapperInHeader1,
  WrapperInHeader1Image,
  WrapperInHeader1Info,
  BoxReviewText,
  WrapperFooter,
  WrapperFooter1,
  WrapperFooter2,
  WrapperInFooter1,
  IconReply
} from "./Style";
import moment from "moment";
const BoxReview = ({ dataReview,handleBlock,setOpenReply }) => {
 
  

  return (
    <Container>
      <Wrapper>
        <WrapperHeader>
          <WrapperHeader1>
            <WrapperInHeader1>
              <WrapperInHeader1Image
                src={dataReview.user.profileImage}
                alt="pic"
              />
              <WrapperInHeader1Info>
                {dataReview.user.name}
              </WrapperInHeader1Info>
            </WrapperInHeader1>
            <WrapperInHeader1>
              <WrapperInHeader1Info color="gray">
                {moment(dataReview.createdAt).format("ddd MMM DD YYYY")}
              </WrapperInHeader1Info>
            </WrapperInHeader1>
          </WrapperHeader1>
          <WrapperHeader2>
            <RatingField data={dataReview} />
          </WrapperHeader2>
        </WrapperHeader>
        <BoxReviewText>{dataReview.title}</BoxReviewText>
        <WrapperFooter>
          <WrapperFooter1 onClick={() => setOpenReply(prevStat => !prevStat)}>Reply <IconReply /></WrapperFooter1>
          <WrapperFooter2>
            <WrapperInFooter1>
              <WrapperFooter1 deletee="true">Delete</WrapperFooter1>
              <WrapperFooter1 onClick={() => handleBlock()} >{dataReview.user.active? "Block" : "Unblock"}</WrapperFooter1>
            </WrapperInFooter1>
          </WrapperFooter2>
        </WrapperFooter>
      </Wrapper>
    </Container>
  );
};

export default BoxReview;
