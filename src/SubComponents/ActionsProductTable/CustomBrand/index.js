import React from 'react'
import { Container, ImageCover, Title } from './Style'
const CustomBrand = ({params}) => {
  return (
    <Container>
    <ImageCover src={params.row.brand.image} alt="piccover" />
    <Title>{params.row.brand.name}</Title>
  </Container>
  )
}

export default CustomBrand