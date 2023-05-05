import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerInput,
  Wrapper,
  WrapperInputs,
  WrapperLabel,
  ContainerTextArea,
  ErrMsg,
} from "./Style";
import {
  CustomInput,
  CustomTextArea,
  SelectReact,
} from "../../../SubComponents";
import CategoryApi from "../../../Api/CategoryApi";
import BrandApi from "../../../Api/BrandApi";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const FormProduct = ({
  setInputData,
  inputData,
  register,
  errors,
  Controller,
  control,
  setImTyping
}) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isSelectCategory, setIsSelectCategory] = useState(true);

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
    const getBrand = async () => {
      const brands = await BrandApi.getAll();
      if (brands) {
        let dataAfterFilter = brands.data.filter(
          (val) => val.status === true
        );
        let options = dataAfterFilter.map(function (brand) {
          return { value: brand._id, label: brand.name };
        });

        setBrands(options);
      }
    };
    getCategories();
    getBrand();
  }, []);

  const handleChangeCategory = async (selectedOption) => {
    const subCategoriesOptions = await CategoryApi.getByCategory(
      selectedOption.value
    );
    if (subCategoriesOptions) {
      let options = subCategoriesOptions.data.map(function (subCat) {
        return { value: subCat._id, label: subCat.name };
      });
      setSubCategories(options);
      setIsSelectCategory(false);
    }
  };

  
  const handleChangepublish = (event) => {
    let checkPublish = event.target.checked;
    setInputData((prevStat) => ({ ...prevStat, status: checkPublish }));
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
        <WrapperLabel>Title</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <CustomInput
              type="text"
              name="title"
              register={register}
              placeholder="Enter Product Title"
              height="40px"
            />
            <ErrMsg>{errors.title?.message}</ErrMsg>
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Description</WrapperLabel>
        <WrapperInputs>
          <ContainerTextArea>
            <CustomTextArea
              placeholder="Enter Description"
              register={register}
              name="description"
            />
            
            
          </ContainerTextArea>
          <ErrMsg>{errors.description?.message}</ErrMsg>
          
        </WrapperInputs>
        
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Category</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange,value,ref} }) => (
                <SelectReact
                  inputRef={ref}
                  isMulti={false}
                  autoFocus={true}
                  handleChange={(val) => {onChange(val.value); handleChangeCategory(val);}}
                  value={categories.find(c => c.value === value)}
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
        <WrapperLabel>Sub Categories</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
          <Controller
              control={control}
              name="subCategories"
              render={({ field: { onChange,value,ref} }) => (
            <SelectReact
              isDisabled={isSelectCategory}
              inputRef={ref}
              isMulti={true}
              placeholder="-- SELECT SUBCATEGORIES --"
              handleChange={(val) => onChange(val.map(c => c.value))}
              value={subCategories.find(c => c.value === value)}
              data={subCategories}
            />
            )}
            />
          </ContainerInput>
          <ErrMsg>{errors.subCategories?.message}</ErrMsg>
        </WrapperInputs>
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Brand</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
          <Controller
              control={control}
              name="brand"
              render={({ field: { onChange,value,ref} }) => (
            <SelectReact
              isMulti={false}
              inputRef={ref}
              placeholder="-- SELECT BRAND --"
              value={brands.find(c => c.value === value)}
              data={brands}
              handleChange={(val) => onChange(val.value)}
            />
            )}
            />
          </ContainerInput>
          <ErrMsg>{errors.brand?.message}</ErrMsg>
        </WrapperInputs>
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Published</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <FormControlLabel sx={{ ml: 0 }}
              control={
                <IOSSwitch
                  checked={inputData.status}
                  onChange={(e) => {handleChangepublish(e); setImTyping(true);}}
                />
              }
            />
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>
    </Container>
  );
};

export default FormProduct;
