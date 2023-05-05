import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
import moment from "moment";
import { getProducts } from "../../Redux/Api";
import { CustomTable, GlobalTitle, Loading } from "../../SubComponents";
import CustomTitleField from "../../SubComponents/ActionsProductTable/CustomTitleField";
import CustomActionsTable from "../../SubComponents/ActionsProductTable/CustomActionsTable";
import CustomCategory from "../../SubComponents/ActionsProductTable/CustomCategory";
import CustomBrand from "../../SubComponents/ActionsProductTable/CustomBrand";
import { ButtonAdd, WrapperButtonAdd, LinkTo } from "./Style";
import RatingField from "../../SubComponents/ActionsProductTable/RatingField";
const CustomProduct = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  const [dataProduct, setDataProduct] = useState([]);

  const [columns, setColumn] = useState([
    { field: "_id", headerName: "ID", width: 230 },

    {
      field: "title",
      headerName: "Title",
      renderCell: (params) => <CustomTitleField {...{ params }} />,
      width: 180,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 80,
    },
    {
      field: "sold",
      headerName: "Sold",
      width: 70,
    },
    {
      field: "category",
      width: 170,
      headerName: "Category",
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
      renderCell: (params) => <CustomCategory {...{ params }} />,
    },
    {
      field: "brand",
      width: 170,
      headerName: "Brand",
      valueGetter: (params) => {
        let result = "";
        if (params.row.brand) {
          if (params.row.brand.name) {
            result = params.row.brand.name;
          }
        } else {
          result = "";
        }
        return result;
      },
      renderCell: (params) => <CustomBrand {...{ params }} />,
    },
    {
      field: "rating",
      headerName: "Rating",
      renderCell: (params) => <RatingField {...{ params }} />,
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
      renderCell: (params) => <CustomActionsTable {...{ params }} />,
    },
  ]);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const onlyActive = () => {
      const filterProduct = productData.data.filter((val) => {
        if (val.category.status && val.brand.status) {
          return true;
        }
      });

      setDataProduct(filterProduct);
    };
    onlyActive();
  }, [productData]);

  return productData.loading ? (
    <Loading />
  ) : (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Products" />
        <WrapperButtonAdd>
          <LinkTo to="/add-product">
            <ButtonAdd>Add Product</ButtonAdd>
          </LinkTo>
        </WrapperButtonAdd>
        <CustomTable categories={dataProduct} columns={columns} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomProduct;
