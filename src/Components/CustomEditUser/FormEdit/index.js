import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerInput,
  Wrapper,
  WrapperInputs,
  WrapperLabel,
  ErrMsg,
} from "./Style";
import {
  CustomInput,
  SelectReact,
} from "../../../SubComponents";

const FormEdit = ({
  register,
  errors,
  Controller,
  control,
}) => {
  const labelRole = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "manager", label: "Manager" },
  ];

  return (
    <Container>
      <Wrapper>
        <WrapperLabel>Username</WrapperLabel>
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
        <WrapperLabel>Email Address</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <CustomInput
              type="text"
              name="email"
              register={register}
              placeholder="Enter Email"
              height="40px"
            />
            <ErrMsg>{errors.email?.message}</ErrMsg>
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>
      <Wrapper>
        <WrapperLabel>Phone</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <CustomInput
              type="text"
              name="phone"
              register={register}
              placeholder="Enter Phone Number"
              height="40px"
            />
            <ErrMsg>{errors.phone?.message}</ErrMsg>
          </ContainerInput>
        </WrapperInputs>
      </Wrapper>

      <Wrapper>
        <WrapperLabel>Role</WrapperLabel>
        <WrapperInputs>
          <ContainerInput>
            <Controller
              control={control}
              name="role"
              render={({ field: { onChange, value, ref } }) => (
                <SelectReact
                  inputRef={ref}
                  isMulti={false}
                  autoFocus={true}
                  handleChange={(val) => {
                    onChange(val.value);
                  }}
                  value={labelRole.find((c) => c.value === value)}
                  placeholder="-- SELECT Role --"
                  data={labelRole}
                />
              )}
            />
          </ContainerInput>
          <ErrMsg>{errors.role?.message}</ErrMsg>
        </WrapperInputs>
      </Wrapper>
    </Container>
  );
};

export default FormEdit;
