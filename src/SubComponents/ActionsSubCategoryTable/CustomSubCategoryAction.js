import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import {
  ButtonSave,
  IconSaveStyled,
  WrapperDel,
  WrappperButtonAction,
  LabelActive,
  LabelInActive,
} from "./Style";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setErrorDataGrid,
  setRowId,
} from "../../Redux/Actions/OtherStateActions";
import SubCategoryApi from "../../Api/SubCategoryApi";
import { customConfirmation } from "../CustomConfirmation";
import { updateSubcategoryAction } from "../../Redux/Actions/SubCategoryActions";
const CustomSubCategoryAction = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const otherState = useSelector((state) => state.otherState);
  useEffect(() => {
    setDisable(params.id !== otherState.rowId);
  }, [otherState.rowId]);
  const handleSubmit = async () => {
    if (otherState.rowId !== null) {
      setLoading(true);
      let updateRow = { ...params.row };
      let name = updateRow.name.trim();
      let status = updateRow.status;
      if (name !== "") {
        let objectUpdate = { name, status };
        const res = await SubCategoryApi.update(otherState.rowId, objectUpdate);
        res && setLoading(false);
        res && dispatch(setRowId(null));
        res && dispatch(setErrorDataGrid(""));
      } else {
        dispatch(setErrorDataGrid("name required !"));
        dispatch(setRowId(null));
        setLoading(false);
      }
    }
  };

  const handleClickDelete = () => {
    const ID = params.row._id;
    const UpdateActive = { status: !params.row.status };
    updateSubcategoryAction(dispatch, ID, UpdateActive);
  };

  return (
    <WrappperButtonAction>
      {!loading && (
        <ButtonSave onClick={handleSubmit} disable={disable}>
          <IconSaveStyled />
        </ButtonSave>
      )}

      {loading && (
        <CircularProgress
          size={30}
          sx={{
            zIndex: 1,
          }}
        />
      )}

      <WrapperDel
      active={params.row.status}
        onClick={() =>
          customConfirmation(
            handleClickDelete,
            "Are you sure?",
            params.row.status
              ? "Are you sure to Inactive this SubCategory?"
              : "Are you sure to Active this SubCategory?"
          )
        }
      >
        {params.row.status ? (
          <LabelInActive>Inactive</LabelInActive>
        ) : (
          <LabelActive>Active</LabelActive>
        )}
      </WrapperDel>
    </WrappperButtonAction>
  );
};

export default CustomSubCategoryAction;
