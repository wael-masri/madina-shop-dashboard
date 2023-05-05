import React from 'react'
import { Container, ImageCover, Title } from './Style'
const CustomCategory = ({params}) => {
  return (
    <Container>
    <ImageCover src={params.row.category.image} alt="piccover" />
    <Title>{params.row.category.name}</Title>
  </Container>
  )
}

export default CustomCategory