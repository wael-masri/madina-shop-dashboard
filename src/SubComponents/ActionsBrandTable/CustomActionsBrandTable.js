import React from "react";
import { useDispatch } from "react-redux";
import { updateBrandAction } from "../../Redux/Actions/BrandActions";
import {
  WrapperButtons,
  WrapperDel,
  WrapperEdit,
  WrapperShow,
  IconShowing,
  IconEdit,
  LabelInActive,
  LabelActive,
  CustomLink
} from "./Style";
import { changeStatusShowBrand } from "../../Redux/Actions/PopupsActions";
import { setDataShowBrand } from "../../Redux/Actions/OtherStateActions";
import { customConfirmation } from "../CustomConfirmation";
const CustomActionsBrandTable = ({ params }) => {
   const dispatch = useDispatch();

   const handleClickDelete = () => {
    const ID = params.row._id;
    const UpdateActive = { status: !params.row.status };
    updateBrandAction(dispatch, ID, UpdateActive);
  };
     
    
  return (
    <WrapperButtons>
      <WrapperShow onClick={() => { dispatch(changeStatusShowBrand(true)); dispatch(setDataShowBrand(params))}}>
        <IconShowing />
      </WrapperShow>
      <CustomLink to="/edit-brand" state={params.row}>
      <WrapperEdit><IconEdit /></WrapperEdit>
      </CustomLink>
      
      <WrapperDel 
      active={params.row.status}
      onClick={() =>
          customConfirmation(
            handleClickDelete,
            "Are you sure?",
            params.row.status
              ? "Are you sure to Inactive this Brand?"
              : "Are you sure to Active this Brand?"
          )
        }>
      {params.row.status ? (
          <LabelInActive>Inactive</LabelInActive>
        ) : (
          <LabelActive>Active</LabelActive>
        )}
      </WrapperDel>
    </WrapperButtons>
  );
};

export default CustomActionsBrandTable;
