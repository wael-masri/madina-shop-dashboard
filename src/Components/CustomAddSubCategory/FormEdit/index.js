import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerInput,
  Wrapper,
  WrapperInputs,
  WrapperLabel,
  ErrMsg,
} from "./Style";
import { CustomInput, SelectReact } from "../../../SubComponents";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import CategoryApi from "../../../Api/CategoryApi";
const FormEdit = ({
  register,
  errors,
  setInputData,
  inputData,
  Controller,
  control,
}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories = await CategoryApi.getAll();
      if (categories) {
        let dataAfterFilter = categories.data.filter(
          (val) => val.status === true
        );
        let options = dataAfterFilter.map(function (category) {
          return { value: category._id, label: category.name };
        });

        setCategories(options);
      }
    };

    getCategories();
  }, []);
  const handleChangepublish = (event) => {
    setInputData((prevStat) => ({ ...prevStat, status: event.target.checked }));
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 39,
    height: 21,
    padding: 0,

    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 17,
      height: 17,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <Container>
      <Wrapper>
        <WrapperLabel>Category</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <CustomInput
              type="text"
              name="name"
              register={register}
              placeholder="Enter Username"
              height="40px"
            />
            <ErrMsg>{errors.name?.message}</ErrMsg>
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>

      <Wrapper>
        <WrapperLabel>Category</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, value, ref } }) => (
                <SelectReact
                  inputRef={ref}
                  isMulti={false}
                  autoFocus={true}
                  handleChange={(val) => {
                    onChange(val.value);
                  }}
                  value={categories.find((c) => c.value === value)}
                  placeholder="-- SELECT CATEGORY --"
                  data={categories}
                />
              )}
            />
          </ContainerInput>
          <ErrMsg>{errors.category?.message}</ErrMsg>
        </WrapperInputs>
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Published</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <FormControlLabel
              sx={{ ml: 0 }}
              control={
                <IOSSwitch
                  checked={inputData.status}
                  onChange={handleChangepublish}
                />
              }
            />
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>
    </Container>
  );
};

export default FormEdit;
