import React from "react";
import {EditorStyled} from "./Style";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { GlobalTitle } from "../../SubComponents";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
const CustomEditorText = () => {
  return (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Text Editor" />
        <EditorStyled editorStyle={{minHeight:"300px",backgroundColor:"white"}} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomEditorText;
