import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";

export const EditorStyled = styled(Editor)`
& .rdw-editor-main{
background-color: red !important;
min-height: 200px !important;
}
`;
