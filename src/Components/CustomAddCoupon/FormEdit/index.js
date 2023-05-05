import React,{useEffect,useState} from "react";
import {
  Container,
  ContainerInput,
  Wrapper,
  WrapperInputs,
  WrapperLabel,
  ErrMsg,
} from "./Style";
import { CustomInput } from "../../../SubComponents";
import CategoryApi from "../../../Api/CategoryApi";
const FormEdit = ({
  register,
  errors,
}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories = await CategoryApi.getAll();
      if (categories) {
        let options = categories.data.map(function (category) {
          return { value: category._id, label: category.name };
        });
        setCategories(options);
      }
    };
  
    getCategories();
   
  }, []);
 

 
  return (
    <Container>
      <Wrapper>
        <WrapperLabel>Coupon</WrapperLabel>
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
        <WrapperLabel>Discount</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <CustomInput
              type="text"
              name="discount"
              register={register}
              placeholder="Enter Discount"
              height="40px"
            />
            <ErrMsg>{errors.discount?.message}</ErrMsg>
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Expire Date</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <CustomInput
              type="date"
              name="expire"
              register={register}
              placeholder="Enter expire"
              height="40px"
            />
            <ErrMsg>{errors.expire?.message}</ErrMsg>
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>
    
    </Container>
  );
};

export default FormEdit;
