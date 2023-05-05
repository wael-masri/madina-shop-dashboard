import React from 'react'
import { Container, ImageCover, TitleUser } from './Style'

const UserField = ({params}) => {
  return (
    <Container>
      <ImageCover src={params.row.user.profileImage} alt="pic" />
      <TitleUser>{params.row.user.name}</TitleUser>
    </Container>
  )
}

export default UserField