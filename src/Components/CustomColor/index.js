import { useState} from "react";
import { SketchPicker, HuePicker } from "react-color";
import {
  WrapperColorPickers,
  Wrapperpencilandswitch,
  Wrapperpencil,
  PencilHead,
  PazelPencil,
} from "./Style";
import {GlobalTitle} from "../../SubComponents";
import { ContainerPages, WrapperPages } from "../../Assets/Theme";
const CustomColor = () => {
  const [colorChoose, setColorChoose] = useState({ background: "" });
  const handleChangeColor = (color) => {
    setColorChoose({ background: color });
  };
  return (
    <ContainerPages>
      <WrapperPages>
        <GlobalTitle text="Color Picker" />
        <WrapperColorPickers>
          <SketchPicker
            color={colorChoose.background}
            onChange={handleChangeColor}
          />
          <Wrapperpencilandswitch>
            <PazelPencil>
              <Wrapperpencil></Wrapperpencil>
              <PencilHead color={colorChoose.background.hex}> </PencilHead>
            </PazelPencil>

            <HuePicker
              color={colorChoose.background}
              onChange={handleChangeColor}
            />
          </Wrapperpencilandswitch>
        </WrapperColorPickers>
      </WrapperPages>
    </ContainerPages>
  );
};

export default CustomColor;
