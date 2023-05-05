import React from "react";
import { IconRoleAdmin, IconRoleManager, IconRoleUser, WrapperRole } from "./Style";

const CustomRole = ({ params }) => {
  return (
    <WrapperRole>
      {params.row.role === "user" ? (

        <>
          <IconRoleUser />
          {params.row.role}
        </>
      ) : params.row.role === "admin" ? (
        <>
          <IconRoleAdmin />
          {params.row.role}
        </>
      ) : params.row.role === "manager" ? (
        <>
          <IconRoleManager />
          {params.row.role}
        </>
      ): ""}
    </WrapperRole>
  );
};

export default CustomRole;
