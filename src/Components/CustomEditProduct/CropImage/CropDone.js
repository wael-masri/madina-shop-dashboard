import {
  setImage1AfterCrop,
  setImageAfterCrop,
  setImageNb,
  setOpenCropImage,
  setUrlImage1AfterUpload,
  setUrlImageAfterUpload,
} from "../../../Redux/Actions/OtherStateActions";

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);

  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
}

export const onCropDone = (cropArea, otherState, dispatch) => {
  const canvasEle = document.createElement("canvas");
  canvasEle.width = cropArea.width;
  canvasEle.height = cropArea.height;

  const context = canvasEle.getContext("2d");

  let imageObj1 = new Image();
  imageObj1.src = otherState.imageUpload;
  imageObj1.onload = function () {
    context.drawImage(
      imageObj1,
      cropArea.x,
      cropArea.y,
      cropArea.width,
      cropArea.height,
      0,
      0,
      cropArea.width,
      cropArea.height
    );
    const dataURL = canvasEle.toDataURL("image/jpeg");
    if (otherState.imageNb === null) {
      dispatch(setUrlImageAfterUpload(dataURL));
      const blob = dataURItoBlob(dataURL);
      dispatch(setImageAfterCrop(blob));
      dispatch(setOpenCropImage(false));
    } else {
      if (otherState.imageNb) {
        dispatch(setUrlImage1AfterUpload(dataURL,otherState.imageNb));
        const blob = dataURItoBlob(dataURL);
        dispatch(setImage1AfterCrop(blob,otherState.imageNb));
        dispatch(setOpenCropImage(false));
        dispatch(setImageNb(null))
      }
    }
  };
};
