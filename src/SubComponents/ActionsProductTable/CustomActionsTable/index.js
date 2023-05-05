import React from "react";
import {
  IconSaveStyled,
  ButtonEdit,
  WrappperButtonAction,
  WrapperShow,
  IconShowing,
  CustomLink,
  WrapperDel,
  IconDel,
} from "./Style";
import ProductApi from "../../../Api/ProductApi";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../Redux/Actions/ProductActions";
import { customConfirmation } from "../../CustomConfirmation/index";

const CustomActionsTable = ({ params }) => {
  const dispatch = useDispatch();

  const handleClickDelete = async () => {
    const DeleteSubCategory = await ProductApi.delete(params.id);
    DeleteSubCategory && dispatch(removeProduct(params.id));
  };

  return (
    <WrappperButtonAction>
      <CustomLink to="/show-product" state={params.row}>
        <WrapperShow>
          <IconShowing />
        </WrapperShow>
      </CustomLink>
      <CustomLink to="/edit-product" state={params.row}>
        <ButtonEdit>
          <IconSaveStyled />
        </ButtonEdit>
      </CustomLink>
      <WrapperDel
        onClick={() =>
          customConfirmation(
            handleClickDelete,
            "Are you sure?",
            "You want to delete this product?",         
          )
        }
      >
        <IconDel />
      </WrapperDel>
    </WrappperButtonAction>
  );
};

export default CustomActionsTable;
