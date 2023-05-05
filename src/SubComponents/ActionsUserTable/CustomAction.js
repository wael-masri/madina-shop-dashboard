import React from "react";
import {
  IconSaveStyled,
  ButtonEdit,
  WrappperButtonAction,
  WrapperShow,
  IconShowing,
  WrapperActiveButton,
  IconInactive,
  CustomLink,
  IconActive,
} from "./Style";
import { useDispatch } from "react-redux";
import { updateUserAction } from "../../Redux/Actions/UserActions";
import { customConfirmation } from "../CustomConfirmation";
const CustomAction = ({ params }) => {
  const dispatch = useDispatch();
  const setActivationAccount = () => {
    const ID = params.row._id;
    const UpdateActive = { active: !params.row.active };
    updateUserAction(dispatch, ID, UpdateActive);
  };
  return (
    <WrappperButtonAction>
      <CustomLink to="/show-user" state={params.row}>
        <WrapperShow>
          <IconShowing />
        </WrapperShow>
      </CustomLink>
      <CustomLink to="/edit-user" state={params.row}>
        <ButtonEdit>
          <IconSaveStyled />
        </ButtonEdit>
      </CustomLink>
      <WrapperActiveButton
        active={params.row.active}
        onClick={() =>
          customConfirmation(
            setActivationAccount,
            "Are you sure?",
            "You want to block this User?",
           
          )
        }
      >
        {params.row.active ? (
          <>
            <IconInactive /> Inactive
          </>
        ) : (
          <>
            {" "}
            <IconActive /> Active
          </>
        )}
      </WrapperActiveButton>
    </WrappperButtonAction>
  );
};

export default CustomAction;
