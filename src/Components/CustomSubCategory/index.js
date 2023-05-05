import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
import { getSubCategories } from "../../Redux/Api";
import { CustomTable, GlobalTitle, Loading } from "../../SubComponents";
import moment from "moment";
import CustomSubCategoryField from "../../SubComponents/ActionsSubCategoryTable/CustomSubCategoryField";
import CustomSubCategoryAction from "../../SubComponents/ActionsSubCategoryTable/CustomSubCategoryAction";
import { LinkTo, ButtonAdd, WrapperButtonAdd } from "./Style";
const CustomSubCategory = () => {
  const subCategory = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();
  const [dataSubcatefory, setDataSubcategories] = useState([]);
  useEffect(() => {
    const onlyActive = () => {
      const filterProduct = subCategory.data.filter((val) => {
        if (val.category.status) {
          return true;
        }
      });

      setDataSubcategories(filterProduct);
    };
    onlyActive();
  }, [subCategory]);

  useEffect(() => {
    getSubCategories(dispatch);
  }, [dispatch]);

  const [columns, setColumn] = useState([
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", editable: true, width: 140 },
    {
      field: "category",
      headerName: "Category",
      width: 170,
      valueGetter: (params) => {
        let result = "";
        if (params.row.category) {
          if (params.row.category.name) {
            result = params.row.category.name;
          }
        } else {
          result = "";
        }
        return result;
      },
      renderCell: (params) => <CustomSubCategoryField {...{ params }} />,
      editable: false,
    },

    {
      field: "status",
      headerName: "Showing",
      type: "boolean",
      editable: true,
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
      width: 160,
      renderCell: (params) => <CustomSubCategoryAction {...{ params }} />,
    },
  ]);

  return subCategory.loading ? (
    <Loading />
  ) : (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Sub Category" />
        <WrapperButtonAdd>
          <LinkTo to="/add-subcategory">
            <ButtonAdd>Add SubCategory</ButtonAdd>
          </LinkTo>
        </WrapperButtonAdd>
        <CustomTable categories={dataSubcatefory} columns={columns} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomSubCategory;
