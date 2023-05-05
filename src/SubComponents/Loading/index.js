import React from 'react'
import { Container,ImageLoading } from './Style';
import lodingGif from "../../Assets/Images/loading.gif";
const Loading = ({full}) => {
  return (
    <Container full={full}>
      <ImageLoading  src={lodingGif} alt="loadinggif" />
    </Container>
  )
}

export default Loading