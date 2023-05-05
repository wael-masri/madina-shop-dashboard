import React, { useEffect, useState } from "react";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
import {
  CategoriesAction,
  CustomNameCatField,
  CustomTable,
  GlobalTitle,
  Loading,
} from "../../SubComponents";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Api";
import {LinkTo,ButtonAdd,WrapperButtonAdd} from "./Style";
const CustomCategory = () => {
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.category);
  const [columns, setColumn] = useState([
    { field: "_id", headerName: "ID", width: 230 },
  
    { field: "name", headerName: "Name",
    renderCell: (params) => <CustomNameCatField {...{ params }} />,
     width: 180 },
    {
      field: "status",
      headerName: "Showing",
      type: "boolean",
     
      sortable: false,
      filterable: false,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      renderCell: (params) =>
        moment(params.row.createdAt).format("ddd MMM DD YYYY"),
      width: 180,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => <CategoriesAction {...{ params }} />,
    },
  ]);

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  return categoriesData.loading ? (
    <Loading />
  ) : (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Categories" />
        <WrapperButtonAdd>
         <LinkTo to="/add-Category"><ButtonAdd>Add Category</ButtonAdd></LinkTo> 
        </WrapperButtonAdd>
        <CustomTable categories={categoriesData.data} columns={columns} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomCategory;
