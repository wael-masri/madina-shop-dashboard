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

export const onCropDone = (cropArea, imageUp, setOpenCrop, setImgAfterCrop,setUrlImage) => {
  const canvasEle = document.createElement("canvas");
  canvasEle.width = cropArea.width;
  canvasEle.height = cropArea.height;

  const context = canvasEle.getContext("2d");

  let imageObj1 = new Image();
  imageObj1.src = imageUp;
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
    var blob = dataURItoBlob(dataURL);
    setUrlImage(dataURL)
    setImgAfterCrop(blob);
    setOpenCrop(false);
  };
};
