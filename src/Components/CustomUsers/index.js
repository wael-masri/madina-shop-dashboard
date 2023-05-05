import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WrapperPages, ContainerPages } from "../../Assets/Theme";
import { getUsers } from "../../Redux/Api";
import {
  CustomAction,
  CustomActive,
  CustomRole,
  CustomTable,
  CustomUsername,
  GlobalTitle,
  Loading,
} from "../../SubComponents";
import moment from "moment";
const CustomUsers = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user);
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);
  const [columns, setColumn] = useState([
    {
      field: "name",
      headerName: "UserName",
      renderCell: (params) => <CustomUsername {...{ params }} />,
      width: 180,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "role",
      headerName: "Role",
      renderCell: (params) => <CustomRole {...{ params }} />,
      width: 110,
    },
    {
      field: "active",
      headerName: "Active",
      renderCell: (params) => <CustomActive {...{ params }} />,
      width: 70,
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
      width: 200,
      renderCell: (params) => <CustomAction {...{ params }} />,
    },
  ]);
  return usersData.loading ? (
    <Loading />
  ) : (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Users" />
        <CustomTable categories={usersData.data} columns={columns} />
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomUsers;
