import React from 'react'
import { TextArea } from './Style'

const CustomTextArea = (props) => {
  return (
   props.register? <TextArea {...props} {...props.register(props.name)} ></TextArea> :<TextArea {...props} ></TextArea>

  )
}

export default CustomTextArea