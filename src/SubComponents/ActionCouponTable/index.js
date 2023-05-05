import React from "react";
import { IconDel, WrapperDel, WrappperButtonAction } from "./Style";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch } from "react-redux";
import CustomDelCategory from "../CustomTable/CustomDelCategory";
import CouponApi from "../../Api/CouponApi";
import { removeItemCoupon } from "../../Redux/Actions/CouponActions";
const CustomCouponAction = ({ params }) => {
  const dispatch = useDispatch();

  const confirmDelete = () => {
    confirmAlert(options);
  };
  const handleClickDelete = async () => {
    const DeleteCoupon = await CouponApi.delete(params.id);
    DeleteCoupon && dispatch(removeItemCoupon(params.id));
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
          Message="You want to delete this Coupon?"
        />
      );
    },
  };

  return (
    <WrappperButtonAction>
      <WrapperDel onClick={confirmDelete}>
        <IconDel />
      </WrapperDel>
    </WrappperButtonAction>
  );
};

export default CustomCouponAction;
