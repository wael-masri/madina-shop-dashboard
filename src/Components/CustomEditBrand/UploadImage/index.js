import React, { useRef, useEffect } from "react";
import {
  BoxUpload,
  LabelUpload,
  ButtonSelectFile,
  Bolded,
  InputFile,
  ImageProfile,
} from "./Style";
const UploadImage = ({
  setImTyping,
  setImageUp,
  setOpenCrop,
  setImgAfterCrop,
  dataBrand,
  setUrlImage,
  urlImage,
}) => {
  useEffect(() => {
    const editSomeData = () => {
      const urlImageFromDB = dataBrand.image;
      urlImageFromDB && setUrlImage(urlImageFromDB);
    };
    editSomeData();
  }, []);
  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const readImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      setImageUp(reader.result);
      setOpenCrop(true);
    });
  };
  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length < 2) {
      readImage(event.dataTransfer.files[0]);
    }
  };
  const handleChangeFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      readImage(e.target.files[0]);
    }
  };
  return !urlImage ? (
    <BoxUpload onDragOver={handleDragOver} onDrop={handleDrop}>
      <LabelUpload>Drag and Drop Image to Upload</LabelUpload>
      <LabelUpload>
        <Bolded>Or</Bolded>
      </LabelUpload>
      <InputFile
        type="file"
        accept="image/*"
        onChange={handleChangeFile}
        hidden
        ref={inputRef}
      />
      <ButtonSelectFile
        onClick={() => {
          inputRef.current.click();
          setImTyping(true);
        }}
      >
        Choose Image..
      </ButtonSelectFile>
    </BoxUpload>
  ) : (
    <BoxUpload>
      <ImageProfile src={urlImage} alt="coverpic" />
      <ButtonSelectFile
        onClick={() => {
          setImageUp(null);
          setImgAfterCrop(null);
          setUrlImage(null);
          setImTyping(true);
        }}
      >
        Cancel
      </ButtonSelectFile>
    </BoxUpload>
  );
};

export default UploadImage;
