import React, { useEffect, useState } from "react";
import CustomInput from "../CustomInput";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  WrapperSetting,
  BoxSetting,
  WrapperCloseIcon,
  CloseIcon,
  WrapperTitle,
  Header,
  LabelHeader,
  InputHeader,
  Main,
  ContainerTextArea,
  LabelMain,
  Footer,
  ButtonAdd,
  ErrMsg,
} from "./Style";
import CustomTextArea from "../CustomTextArea";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusAddKanban } from "../../Redux/Actions/PopupsActions";
import kanbanApi from "../../Api/KanbanApi";
import { useNavigate } from "react-router-dom";
const AddKanban = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stat = useSelector(state => state.otherState);
  const [imTyping, setImTyping] = useState(false);
  const [blockClick, setBlockClick] = useState(false);
  const WorkSchema = yup.object().shape({
    title: yup
      .string()
      .required("Title is Required !")
      .min(3, "Title is Too Short!"),
    description: yup
      .string()
      .required("Description is Required !")
      .min(20, "Description is Too Short!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(WorkSchema),
  });
  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };
  const formFocusHandler = (e) => {
    setImTyping(true);
  };
  const handleCancel = () => {
    if (imTyping) {
      if (window.confirm("Are you sure to leave this page?")) {
        dispatch(changeStatusAddKanban(false))
      }
    } else {
      dispatch(changeStatusAddKanban(false))
    }
  };
  const handleAddWork = async (data) => {
    setBlockClick(true);
    let updateKanban = { ...data };
    let oldData = [...stat.kanbanDo];
    oldData.push(updateKanban);
    let newItems = {items:oldData,name:"do"}
     const category = await kanbanApi.update(newItems);
     category && dispatch(changeStatusAddKanban(false));
    setBlockClick(false);
  };

  return (
    <WrapperSetting>
      <BoxSetting>
        <WrapperCloseIcon
          onClick={() => handleCancel()}
        >
          <CloseIcon />
        </WrapperCloseIcon>
        <WrapperTitle>Create Work</WrapperTitle>
        <form
          onSubmit={handleSubmit(handleAddWork)}
          onKeyDown={(e) => checkKeyDown(e)}
          onFocus={formFocusHandler}
        >
          <Header>
            <LabelHeader>Create Title</LabelHeader>
            <InputHeader>
              <CustomInput
                type="text"
                name="title"
                register={register}
                placeholder="Create Title"
              />
            </InputHeader>
          </Header>

          <Main>
            <LabelMain>Description</LabelMain>
            <ContainerTextArea>
              <CustomTextArea
                placeholder="Enter Description"
                register={register}
                name="description"
              />
            </ContainerTextArea>
            <ErrMsg>{errors.title?.message}</ErrMsg>
            <br />

            <ErrMsg>{errors.description?.message}</ErrMsg>
          </Main>
          <Footer>
            <ButtonAdd type="submit" disabled={blockClick}>
              Add Work
            </ButtonAdd>
          </Footer>
        </form>
      </BoxSetting>
    </WrapperSetting>
  );
};

export default AddKanban;
