import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setImage1AfterCrop,
  setUrlImage1AfterUpload,
} from "../../../Redux/Actions/OtherStateActions";
import BoxImage from "./BoxImage";
import { BoxUpload, Container, ImageMini, IconRemoveImage } from "./Style";
const CustomUploadImgs = ({ setInputData, oldData,setImTyping }) => {
  const otherState = useSelector((state) => state.otherState);
  const dispatch = useDispatch();
  const [ imagesFromDB,setImagesFromDB] = useState([]);
   useEffect(() => {
    const editSomeData = () => {
      if (oldData.images) {
        var arrOfImagesFromDB = oldData.images;
        setImagesFromDB(oldData.images);
        arrOfImagesFromDB[0] &&
          dispatch(setUrlImage1AfterUpload(arrOfImagesFromDB[0], 1));
        arrOfImagesFromDB[1] &&
          dispatch(setUrlImage1AfterUpload(arrOfImagesFromDB[1], 2));
        arrOfImagesFromDB[2] &&
          dispatch(setUrlImage1AfterUpload(arrOfImagesFromDB[2], 3));
        arrOfImagesFromDB[3] &&
          dispatch(setUrlImage1AfterUpload(arrOfImagesFromDB[3], 4));
        arrOfImagesFromDB[4] &&
          dispatch(setUrlImage1AfterUpload(arrOfImagesFromDB[4], 5));
      }
    };
    editSomeData();
  }, []);

  useEffect(() => {
    if (oldData.images) {
      var arrFromDB = oldData.images;
    if(otherState.image1AfterCrop){
      arrFromDB[0] = otherState.image1AfterCrop;
    }
     if(otherState.image2AfterCrop){
      arrFromDB[1] = otherState.image2AfterCrop;
    }
     if(otherState.image3AfterCrop){
      arrFromDB[2] = otherState.image3AfterCrop;
    }
     if(otherState.image4AfterCrop){
      arrFromDB[3] = otherState.image4AfterCrop;
    }
     if(otherState.image5AfterCrop){
      arrFromDB[4] = otherState.image5AfterCrop;
    }
    setImagesFromDB(arrFromDB);
         setInputData((prevStat) => ({
            ...prevStat,
            images: arrFromDB,
          }));
    }

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
    let arrOfDb = imagesFromDB;
    let numb = nb - 1;
    arrOfDb[numb] = "noImage";
    setImagesFromDB(arrOfDb);
  }; 
  return (
    <Container>
      <>
        {!otherState.urlImage1AfterUpload ? (
          <BoxImage imagenb={1} setImTyping={setImTyping} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(1); setImTyping(true)}} />
            <ImageMini src={otherState.urlImage1AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage2AfterUpload ? (
          <BoxImage imagenb={2} setImTyping={setImTyping} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(2); setImTyping(true)}} />
            <ImageMini src={otherState.urlImage2AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage3AfterUpload ? (
          <BoxImage imagenb={3} setImTyping={setImTyping} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(3); setImTyping(true)}} />
            <ImageMini src={otherState.urlImage3AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage4AfterUpload ? (
          <BoxImage imagenb={4} setImTyping={setImTyping} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(4); setImTyping(true)}} />
            <ImageMini src={otherState.urlImage4AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
      <>
        {!otherState.urlImage5AfterUpload ? (
          <BoxImage imagenb={5} setImTyping={setImTyping} />
        ) : (
          <BoxUpload>
            <IconRemoveImage onClick={() => {handleRemoveMiniImage(5); setImTyping(true)}} />
            <ImageMini src={otherState.urlImage5AfterUpload} alt="minicover" />
          </BoxUpload>
        )}
      </>
    </Container>
  );
};

export default CustomUploadImgs;
