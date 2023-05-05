import React from 'react'
import { useDispatch } from 'react-redux'
import { CheckboxContainer,CheckboxCustom,LabelCheckboxCustom } from './Style'

const CustomCheckBox = ({id,name,isCheck,setChange}) => {
    const dispatche = useDispatch();
    return (
    <CheckboxContainer>
        <CheckboxCustom type="checkbox" id={id} checked={isCheck? true : false} onChange={(e) => dispatche(setChange(e.target.checked))} />
        <LabelCheckboxCustom htmlFor={id}>{name}</LabelCheckboxCustom>
    </CheckboxContainer>
  )
}

export default CustomCheckBox