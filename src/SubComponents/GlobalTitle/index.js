import React from 'react'
import { WrapperTitle } from './Style'

const GlobalTitle = ({text}) => {
  return (
    <WrapperTitle>{text? text : "Madina Shop"}</WrapperTitle>
  )
}

export default GlobalTitle