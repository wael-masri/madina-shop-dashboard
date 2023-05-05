import React from 'react'
import { Container, ImageCover, TitleProduct } from './Style'

const ProductField = ({params}) => {
  return (
    <Container>
      <ImageCover src={params.row.product.imageCover} alt="pic" />
      <TitleProduct>{params.row.product.title}</TitleProduct>
    </Container>
  )
}

export default ProductField