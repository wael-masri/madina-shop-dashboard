import React from "react";
import { InputText } from "./Style";

const CustomInput = (props) => {
  if (!props.onchange && props.register) {
    return <InputText {...props} {...props.register(props.name)} />;
  } else if (props.onchange && props.register) {
    return (
      <InputText
        {...props}
        {...props.register(props.name, { onChange: (e) => props.onchange(e) })}
      />
    );
  } else {
    return <InputText {...props} />;
  }
};

export default CustomInput;
