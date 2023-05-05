import React, { useRef,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setImageAfterCrop,
  setImageUpload,
  setOpenCropImage,
  setUrlImageAfterUpload,
} from "../../../Redux/Actions/OtherStateActions";
import {
  BoxUpload,
  LabelUpload,
  ButtonSelectFile,
  Bolded,
  InputFile,
  ImageCover,
  ErrMsg
} from "./Style";

const CustomUploadImg = ({setInputData,errImage,setImTyping}) => {
  const otherState = useSelector((state) => state.otherState);
  const dispatch = useDispatch();
  const inputRef = useRef();
  
  useEffect(() => {
    
    setInputData(prevStat => ({...prevStat , imageCover:otherState.imageAfterCrop}))

  },[otherState.imageAfterCrop]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const readImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
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
  return !otherState.urlImageAfterUpload ? (
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
      <ButtonSelectFile onClick={() => {inputRef.current.click(); setImTyping(true);}}>
        Choose Image..
      </ButtonSelectFile>
     {errImage !== null? <ErrMsg>{errImage.imageCoverErr}</ErrMsg>:null} 
    </BoxUpload>
  ) : (
    <BoxUpload>
      <ImageCover src={otherState.urlImageAfterUpload} alt="coverimg" />
      <ButtonSelectFile
        onClick={() => {
          dispatch(setImageUpload(null));
          dispatch(setUrlImageAfterUpload(null))
          dispatch(setImageAfterCrop(null));
          setImTyping(true)
        }}
      >
        Cancel
      </ButtonSelectFile>
    </BoxUpload>
  );
};

export default CustomUploadImg;
