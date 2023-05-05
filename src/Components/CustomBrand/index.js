import React, { useEffect, useState } from 'react'
import { ContainerPages, WrapperPages } from '../../Assets/Theme'
import { CustomActionsBrandTable, CustomNameBrandField, CustomTable, GlobalTitle, Loading } from '../../SubComponents'
import moment from "moment";
import {LinkTo,ButtonAdd,WrapperButtonAdd} from "./Style";
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../Redux/Api';
const CustomBrand = () => {
    const dispatch = useDispatch();
    const brandData = useSelector((state) => state.brand);
 
  
    useEffect(() => {
      getBrands(dispatch);
    }, [dispatch]);
    const [columns, setColumn] = useState([
        { field: "_id", headerName: "ID", width: 230 },
        
        { field: "name",
         headerName: "Name",
         renderCell: (params) => <CustomNameBrandField {...{ params }} />,
         width: 150 },
        {
          field: "status",
          headerName: "Showing",
          type: "boolean",
          editable: false,
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
          renderCell: (params) => <CustomActionsBrandTable {...{ params }} />,
        },
      ]);
 
 
 
    return ( brandData.loading? 
        <Loading />
    : <ContainerPages>
    <WrapperPages>
        <GlobalTitle text="Brands" />
        <WrapperButtonAdd>
         <LinkTo to="/add-brand"><ButtonAdd>Add Brand</ButtonAdd></LinkTo> 
        </WrapperButtonAdd>
        <CustomTable categories={brandData.data} columns={columns} />
    </WrapperPages>
   </ContainerPages>
  )
}

export default CustomBrand