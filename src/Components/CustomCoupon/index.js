import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
import { getCoupons } from "../../Redux/Api";
import { CustomCouponAction, CustomTable, GlobalTitle, Loading, StatusField } from "../../SubComponents";
import moment from "moment";
import {LinkTo,ButtonAdd,WrapperButtonAdd} from "./Style";
const CustomCoupon = () => {
  const coupon = useSelector((state) => state.coupon);
  const dispatch = useDispatch();
  useEffect(() => {
    getCoupons(dispatch);
  }, [dispatch]);
  const [columns, setColumn] = useState([
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", editable: false, width: 140 },
    {
      field: "discount",
      headerName: "Discount (%)",
      width: 100,
      editable: false,
    },
    {
      field: "expire",
      headerName: "Status",
  
        renderCell: (params) => <StatusField {...{ params }} />,
      width: 180,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      renderCell: (params) =>
        moment(params.row.createdAt).format("ddd MMM DD YYYY"),
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 160,
      renderCell: (params) => <CustomCouponAction {...{ params }} />,
    },
  ]);

  return coupon.loading ? (
    <Loading />
  ) : (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Sub Category" />
        <WrapperButtonAdd>
         <LinkTo to="/add-coupon"><ButtonAdd>Add Coupon</ButtonAdd></LinkTo> 
        </WrapperButtonAdd>
        <CustomTable categories={coupon.data} columns={columns} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomCoupon;
