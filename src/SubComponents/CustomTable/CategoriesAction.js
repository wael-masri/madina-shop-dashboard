import React from "react";

import {
  IconSaveStyled,
  ButtonEdit,
  WrappperButtonAction,
  WrapperShow,
  IconShowing,
  WrapperDel,
  CustomLink,
  LabelActive,
  LabelInActive,
} from "./Style";
import "react-confirm-alert/src/react-confirm-alert.css";

import { useDispatch } from "react-redux";
import { changeStatusShowCategory } from "../../Redux/Actions/PopupsActions";
import { setDataShowCategory } from "../../Redux/Actions/OtherStateActions";
import { updateCategoryAction } from "../../Redux/Actions/CategoryActions";
import { customConfirmation } from "../CustomConfirmation";
const CategoriesAction = ({ params }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    const ID = params.row._id;
    const UpdateActive = { status: !params.row.status };
    updateCategoryAction(dispatch, ID, UpdateActive);
  };

  return (
    <WrappperButtonAction>
      <WrapperShow
        onClick={() => {
          dispatch(changeStatusShowCategory(true));
          dispatch(setDataShowCategory(params));
        }}
      >
        <IconShowing />
      </WrapperShow>
      <CustomLink to="/edit-category" state={params.row}>
        <ButtonEdit>
          <IconSaveStyled />
        </ButtonEdit>
      </CustomLink>

      <WrapperDel
        active={params.row.status}
        onClick={() =>
          customConfirmation(
            handleClickDelete,
            "Are you sure?",
            params.row.status ? "Are you sure to Inactive this Category?" : "Are you sure to Active this Category?"
          )
        }
      >
        {params.row.status ? (
          <LabelInActive>Inactive</LabelInActive>
        ) : (
          <LabelActive>Active</LabelActive>
        )}
      </WrapperDel>
    </WrappperButtonAction>
  );
};

export default CategoriesAction;
