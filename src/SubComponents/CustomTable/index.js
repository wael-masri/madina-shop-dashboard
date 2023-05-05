import React, { useState } from "react";
import { GridToolbarContainer } from "@mui/x-data-grid";
import {
  ErrorDiv,
  WrapperTable,
  DataGridStyled,
  GridToolbarExportStyled,
} from "./Style";
import {useDispatch, useSelector} from "react-redux";
import { setRowId } from "../../Redux/Actions/OtherStateActions";
const CustomTable = ({ categories, columns }) => {
  const dispatch = useDispatch();
  const otherState = useSelector(state => state.otherState);
  const [pageSize, setPageSize] = useState(6);
 

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExportStyled />
      </GridToolbarContainer>
    );
  }
  return (
    <WrapperTable>
      {otherState.errorDataGrid ? <ErrorDiv>{otherState.errorDataGrid}</ErrorDiv> : ""}
      <DataGridStyled
        columns={columns}
        rows={categories}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[6, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onCellEditCommit={(params) => dispatch(setRowId(params.id))}
        components={{
          Toolbar: CustomToolbar,
        }}
        
      />
    </WrapperTable>
  );
};

export default CustomTable;
