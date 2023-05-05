import React from "react";
import { useDispatch } from "react-redux";
import {
  WrapperButtons,
  WrapperDel,
  WrapperShow,
  IconShowing,
  IconDel,
  IconInactive,
  IconActive,
  WrapperActiveButton,
  CustomLink
} from "./Style";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import CustomDelCategory from "../../CustomTable/CustomDelCategory";
import ReviewApi from "../../../Api/ReviewApi";
import { removeItemReview, updateUserReviewAction } from "../../../Redux/Actions/ReviewActions";
const CustomAction = ({ params}) => {
  const dispatch = useDispatch();
  const setActivationAccount = () => {
    const ID = params.row.user._id;
    const UpdateActive = {...params.row};
    const updated = {active: !params.row.user.active};
    UpdateActive.user.active = !UpdateActive.user.active;
    updateUserReviewAction(dispatch, ID, UpdateActive,updated);
   
  };
  const confirmDelete = () => {
    confirmAlert(options);
  };
  const handleClickDelete = async () => {
    const DeleteCategory = await ReviewApi.delete(params.id);
    DeleteCategory && dispatch(removeItemReview(params.id));
  };
  const options = {
    closeOnEscape: true,
    closeOnClickOutside: false,
    customUI: ({ onClose }) => {
      return (
        <CustomDelCategory
          onClose={onClose}
          handleClickDelete={handleClickDelete}
          Title="Are you sure?"
          Message="You want to delete this Review?"
        />
      );
    },
  };

  return (
    <WrapperButtons>
      <CustomLink to="/show-review" state={params.row._id}>
        <WrapperShow>
          <IconShowing />
        </WrapperShow>
      </CustomLink>

      <WrapperDel onClick={confirmDelete}>
        <IconDel />
      </WrapperDel>
      <WrapperActiveButton
        active={params.row.user.active}
        onClick={() => setActivationAccount()}
      >
        {params.row.user.active ? (
          <>
            <IconInactive /> Block User
          </>
        ) : (
          <>
            {" "}
            <IconActive /> Unblock User
          </>
        )}
      </WrapperActiveButton>
    </WrapperButtons>
  );
};

export default CustomAction;
