import React, { useState } from "react";
import {
  WrapperCropped,
  ButtonClose,
  ButtonCrop,
  WrapperButton,
  BoxImage,
  Container,
} from "./Style";
import Cropper from "react-easy-crop";
import { onCropDone } from "./CropDone";
import { useDispatch, useSelector } from "react-redux";
import {
  setImageUpload,
  setOpenCropImage,
} from "../../../Redux/Actions/OtherStateActions";
const CropImage = () => {
  const otherState = useSelector((state) => state.otherState);
  const dispatch = useDispatch();
  const [cropArea, setCropArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCropArea(croppedAreaPixels);
  };

  return (
    <Container>
      <WrapperCropped>
        <BoxImage>
          <Cropper
            image={otherState.imageUpload}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </BoxImage>

        <WrapperButton>
          <ButtonCrop
            onClick={() => {
              onCropDone(cropArea, otherState, dispatch);
            }}
          >
            Crop Image
          </ButtonCrop>
          <ButtonClose
            onClick={() => {
              dispatch(setOpenCropImage(false));
              dispatch(setImageUpload(null));
            }}
          >
            Close
          </ButtonClose>
        </WrapperButton>
      </WrapperCropped>
    </Container>
  );
};

export default CropImage;
