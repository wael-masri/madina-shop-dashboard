import React from 'react'
import { useSelector } from 'react-redux';
import Select from "react-select";
const SelectReact = ({placeholder,isMulti,data,isDisabled,handleChange,ref,value}) => {
  const statusMode = useSelector(state => state.popups);
  return (
    <Select
    isDisabled={isDisabled}
    value={value}
    ref={ref}
    placeholder={placeholder}
    options={data}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      
      colors: {
        ...theme.colors,
        primary25: "#1e4db7",
        
        primary: "#A9A9A9",
      },
    })}
    styles={{
      menuList: styles => ({
        ...styles,
        background: (statusMode.isMode? "#20232a":"#f1f4f4"),
        color:statusMode.isMode? "#fff": "#000",
    }),
      
      control: (base) => ({
        ...base,
        border: 0,
        boxShadow: "none",
        backgroundColor:statusMode.isMode? "#20232a":"#f1f4f4",
        
        
       
      }),
    }}
    isMulti={isMulti}
    onChange={handleChange}
  />
  )
}

export default SelectReact