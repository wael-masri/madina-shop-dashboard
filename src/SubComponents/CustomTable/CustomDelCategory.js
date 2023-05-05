import React from 'react'
import { WrapperConfirm,TitleConfirm,MessageConfirm,Buttons,WrapperButtonDel } from './Style';

const CustomDelCategory = ({onClose,handleClickDelete,Title,Message}) => {
  return (
    <WrapperConfirm className='popup-overlay'>
    <TitleConfirm>{Title}</TitleConfirm>
    <MessageConfirm>{Message}</MessageConfirm>
    <WrapperButtonDel>
    <Buttons onClick={onClose}>No</Buttons>
    <Buttons
      onClick={() => {
        handleClickDelete();
        onClose();
      }}
    >
      Yes
    </Buttons>
    </WrapperButtonDel>
   
  </WrapperConfirm>
  )
}

export default CustomDelCategory