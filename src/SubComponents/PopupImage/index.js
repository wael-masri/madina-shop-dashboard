import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImageUrlPopup } from "../../Redux/Actions/OtherStateActions";
import { changeStatusImage } from "../../Redux/Actions/PopupsActions";
import {
  WrapperImage,
  WrapperCloseButton,
  CloseIconPop,
  WrapperImagePop,
  ImagePop,
} from "./Style";

const PopupImage = () => {
  const dispatch = useDispatch();
  const otherState = useSelector((state) => state.otherState);
  return (
    <WrapperImage>
      <WrapperCloseButton
        onClick={() => {
          dispatch(changeStatusImage(false));
          dispatch(setImageUrlPopup(""));
        }}
      >
        <CloseIconPop />
      </WrapperCloseButton>
      <WrapperImagePop>
        <ImagePop src={otherState.imageUrlPopup} alt="popupimage" />
      </WrapperImagePop>
    </WrapperImage>
  );
};

export default PopupImage;
