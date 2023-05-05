import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setImage1AfterCrop,
  setUrlImage1AfterUpload,
} from "../../../Redux/Actions/OtherStateActions";
import BoxImage from "./BoxImage";
import { BoxUpload, Container, ImageMini, IconRemoveImage } from "./Style";
const CustomUploadImgs = ({ setInputData,setImTyping }) => {
  const otherState = useSelector((state) => state.otherState);
  const dispatch = useDispatch();
  useEffect(() => {
    const arrOfImages = [];
    otherState.image1AfterCrop && arrOfImages.push(otherState.image1AfterCrop);
    otherState.image2AfterCrop && arrOfImages.push(otherState.image2AfterCrop);
    otherState.image3AfterCrop && arrOfImages.push(otherState.image3AfterCrop);
    otherState.image4AfterCrop && arrOfImages.push(otherState.image4AfterCrop);
    otherState.image5AfterCrop && arrOfImages.push(otherState.image5AfterCrop);
    setInputData((prevStat) => ({ ...prevStat, images: arrOfImages }));
  }, [
    otherState.image1AfterCrop,
    otherState.image2AfterCrop,
    otherState.image3AfterCrop,
    otherState.image4AfterCrop,
    otherState.image5AfterCrop,
  ]);
  const handleRemoveMiniImage = (nb) => {
    dispatch(setUrlImage1AfterUpload(null, nb));
    dispatch(setImage1AfterCrop(null, nb));
  };
  return (
    <Container>
      <>
        {!otherState.urlImage1AfterUpload ? (
          <BoxImage setImTyping={setImTyping} imagenb={1} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(1); setImTyping(true);}} />
            <ImageMini src={otherState.urlImage1AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage2AfterUpload ? (
          <BoxImage setImTyping={setImTyping} imagenb={2} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(2); setImTyping(true);}} />
            <ImageMini src={otherState.urlImage2AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage3AfterUpload ? (
          <BoxImage setImTyping={setImTyping} imagenb={3} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(3); setImTyping(true);}} />
            <ImageMini src={otherState.urlImage3AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage4AfterUpload ? (
          <BoxImage setImTyping={setImTyping} imagenb={4} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(4); setImTyping(true);}} />
            <ImageMini src={otherState.urlImage4AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage5AfterUpload ? (
          <BoxImage setImTyping={setImTyping} imagenb={5} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(5); setImTyping(true);}} />
            <ImageMini src={otherState.urlImage5AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
    </Container>
  );
};

export default CustomUploadImgs;
