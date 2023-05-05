import React,{useState} from 'react'
import { InputStyled,ShowPass } from './Style'
const CustomInputLogin = (props) => {
  const [showing,setShowing] = useState(false);
  const handleShowPassword = () => {
    setShowing(!showing);
  }
  return (<>
   <InputStyled {...props} type={props.action ? (showing? "text" : props.type) :props.type}/>
  {props.action? <ShowPass onClick={() => handleShowPassword()}>{props.action?(showing? "Hide" : "Show") : ""}</ShowPass> : <></> } 
  </>
  
  )
}

export default CustomInputLogin