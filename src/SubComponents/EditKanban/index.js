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
  ButtonDel,
  DelIcon
} from "./Style";
import CustomTextArea from "../CustomTextArea";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusAddKanban,
  changeStatusEditKanban,
} from "../../Redux/Actions/PopupsActions";
import kanbanApi from "../../Api/KanbanApi";
import { useNavigate } from "react-router-dom";
const EditKanban = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stat = useSelector((state) => state.otherState);
  const [imTyping, setImTyping] = useState(false);
  const [dataUsed, setDataUsed] = useState(null);
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
    formState: { errors, dirtyFields, isDirty },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(WorkSchema),
  });
  useEffect(() => {
    reset(stat.itemKanban);
  }, [stat.itemKanban]);
  const checkKeyDown = (e) => {
    if (e.code === "Enter") e.preventDefault();
  };
  const formFocusHandler = (e) => {
    setImTyping(true);
  };
  const handleCancel = () => {
    if (imTyping) {
      if (window.confirm("Are you sure to leave this page?")) {
        dispatch(changeStatusEditKanban(false))
      }
    } else {
      dispatch(changeStatusEditKanban(false))
    }
  };
  const handleAddWork = async (data) => {
    
    if (isDirty) {
      setBlockClick(true);
      let updateKanban = {...data}
      let itemRemovedID = stat.itemKanban._id;
      var nameOfUpdate = "";
      if (stat.columnKanban.name === "To Do") {
        nameOfUpdate = "do";
      }
      if (stat.columnKanban.name === "In Progress") {
        nameOfUpdate = "progress";
      }
      if (stat.columnKanban.name === "Done") {
        nameOfUpdate = "done";
      }
      if (stat.columnKanban.name === "Testing") {
        nameOfUpdate = "testing";
      }
      let updateColumn = stat.columnKanban.items.filter(
        (val) => val._id !== itemRemovedID
      );
      updateColumn.push(updateKanban);
      let updateItem = { items: updateColumn, name: nameOfUpdate };

      const updt = await kanbanApi.update(updateItem);
      updt && dispatch(changeStatusEditKanban(false));
      setBlockClick(false);
    }
  
    
  };
  const handleDeleteKanban = async () => {
    let itemRemovedID = stat.itemKanban._id;
    var nameOfUpdate = "";
    if (stat.columnKanban.name === "To Do") {
      nameOfUpdate = "do";
    }
    if (stat.columnKanban.name === "In Progress") {
      nameOfUpdate = "progress";
    }
    if (stat.columnKanban.name === "Done") {
      nameOfUpdate = "done";
    }
    if (stat.columnKanban.name === "Testing") {
      nameOfUpdate = "testing";
    }

    let updateColumn = stat.columnKanban.items.filter(
      (val) => val._id !== itemRemovedID
    );

    let removedItem = { items: updateColumn, name: nameOfUpdate };

    const rmv = await kanbanApi.update(removedItem);
    rmv && dispatch(changeStatusEditKanban(false));
  };
  return (
    <WrapperSetting>
      <BoxSetting>
        <WrapperCloseIcon
          onClick={() => handleCancel() }
        >
          <CloseIcon  />
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
            <DelIcon onClick={() => handleDeleteKanban()} />
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
              Edit Work
            </ButtonAdd>
           
          </Footer>
        </form>
      </BoxSetting>
    </WrapperSetting>
  );
};

export default EditKanban;
