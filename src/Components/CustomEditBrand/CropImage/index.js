import React, {useState } from "react";
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
const CropImage = ({ setOpenCrop, imageUp, setImageUp, setImgAfterCrop,setUrlImage }) => {
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
            image={imageUp}
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
              onCropDone(cropArea, imageUp, setOpenCrop, setImgAfterCrop,setUrlImage);
            }}
          >
            Crop Image
          </ButtonCrop>
          <ButtonClose
            onClick={() => {
              setOpenCrop(false);
              setImageUp(null);
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
