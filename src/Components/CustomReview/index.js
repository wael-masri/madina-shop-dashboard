import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
import { getReviews } from "../../Redux/Api";
import {
  CustomActionReview,
  CustomTable,
  GlobalTitle,
  Loading,
  ProductField,
  RatingField,
  ReplyField,
  UserField,
} from "../../SubComponents";
import moment from "moment";
const CustomReview = () => {
  const reviews = useSelector((state) => state.review);
  const dispatch = useDispatch();
  useEffect(() => {
    getReviews(dispatch);
  }, [dispatch]);

  const [columns, setColumn] = useState([
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      renderCell: (params) => <ProductField {...{ params }} />,
      valueGetter: (params) => {
        let result = "";
        if (params.row.product) {
          if (params.row.product.title) {
            result = params.row.product.title;
          }
        } else {
          result = "";
        }
        return result;
      },
      editable: false,
      width: 200,
    },
    {
      field: "user",
      headerName: "User",
      renderCell: (params) => <UserField {...{ params }} />,
      valueGetter: (params) => {
        let result = "";
        if (params.row.user) {
          if (params.row.user.name) {
            result = params.row.user.name;
          }
        } else {
          result = "";
        }
        return result;
      },
      editable: false,
      width: 180,
    },
    {
      field: "rating",
      headerName: "Rating",
      renderCell: (params) => <RatingField {...{ params }} />,
      valueGetter: (params) => {
        let result = "";
        if (params.row) {
          if (params.row.rating) {
            result = params.row.rating;
          }
        } else {
          result = "";
        }
        return result;
      },
      editable: false,
      width: 100,
    },
    {
      field: "reply",
      headerName: "Reply",
      renderCell: (params) => <ReplyField {...{ params }} />,
      editable: false,
      width: 100,
      sortable: false,
      filterable: false,
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
      width: 220,
      renderCell: (params) => <CustomActionReview {...{ params }} />,
    },
  ]);

  return reviews.loading ? (
    <Loading />
  ) : (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Reviews" />
        <CustomTable categories={reviews.data} columns={columns} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomReview;
