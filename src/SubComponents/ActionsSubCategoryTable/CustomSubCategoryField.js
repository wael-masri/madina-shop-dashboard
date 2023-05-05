import React from 'react'
import { ContainerField,ImageField,WrapperName } from './Style'

const CustomSubCategoryField = ({params}) => {
 
  return (
    <ContainerField>
      <ImageField src={params.row.category.image} alt="catimage" />
      <WrapperName>{params.row.category.name}</WrapperName>
    </ContainerField>
  )
}

export default CustomSubCategoryField