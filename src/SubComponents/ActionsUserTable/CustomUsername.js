import React from "react";
import { ContainerField, ImageField, WrapperName } from "./Style";
import noimage from "../../Assets/Images/noImage.png";
const CustomUsername = ({ params }) => {
  return (
    <ContainerField>
      {params.row.profileImage ? (
        <ImageField src={params.row.profileImage} alt="catimage" />
      ) : (
        <ImageField src={noimage} alt="catimage" />
      )}
      
      <WrapperName>{params.row.name}</WrapperName>
    </ContainerField>
  );
};

export default CustomUsername;
