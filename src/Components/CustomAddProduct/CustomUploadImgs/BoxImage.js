import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setImageNb,
  setImageUpload,
  setOpenCropImage,
} from "../../../Redux/Actions/OtherStateActions";
import {
  BoxUpload,
  AddButtonImage,
  LabelChooseImage,
  UploadImageIcon,
} from "./Style";

const BoxImage = ({ imagenb,setImTyping }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const readImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      dispatch(setImageNb(imagenb));
      dispatch(setImageUpload(reader.result));
      dispatch(setOpenCropImage(true));
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
  return (
    <BoxUpload onDragOver={handleDragOver} onDrop={handleDrop}>
      <input
        type="file"
        accept="image/*"
        onChange={handleChangeFile}
        hidden
        ref={inputRef}
      />
      <AddButtonImage onClick={() => {inputRef.current.click(); setImTyping(true);}}>
        <UploadImageIcon />
      </AddButtonImage>

      <LabelChooseImage>Choose Image..</LabelChooseImage>
    </BoxUpload>
  )
  
};

export default BoxImage;
