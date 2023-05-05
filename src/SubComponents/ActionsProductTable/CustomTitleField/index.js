import React from 'react'
import { Container, ImageCover, Title } from './Style'

const CustomTitleField = ({params}) => {
  return (
    <Container>
      <ImageCover src={params.row.imageCover} alt="piccover" />
      <Title>{params.row.title}</Title>
    </Container>
  )
}

export default CustomTitleField