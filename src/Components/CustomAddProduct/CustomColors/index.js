import React, { useEffect, useState } from "react";
import {
  Colors,
  Container,
  Title,
  WrapperTitle,
  WrapperColors,
  InsideColor,
  AddIconColor,
  WrapperPicker,
} from "./Style";
import { PhotoshopPicker } from "react-color";
const CustomColors = ({setInputData,setImTyping}) => {
  const [showingPicker, setShowingPicker] = useState(false);
  const [colorchoose, setcolorchoose] = useState("#fff");
  const [colorsImpossible, setColorsImpossible] = useState([
    "white",
    "black",
    "green",
    "red",
    "blue",
    "pink",
    "gray",
  ]);
  const [selectColors, setSelectColors] = useState([]);
  useEffect(() => {
    setInputData(prevStat => ({...prevStat , color:selectColors}));
  }, [selectColors]);
  const handleSelectColors = (color) => {
    
    const exictcolor = selectColors.findIndex((col) => col === color);

    if (exictcolor !== -1) {
      let arrayup = [];
      arrayup = selectColors;
      var newArr = arrayup.filter(function (e) {
        return e !== color;
      });
      setSelectColors(newArr);
    } else {
      setSelectColors((prevStat) => [...prevStat, color]);
    }
  };
 
  return (
    <Container>
      <WrapperTitle>
      <Title>COLORS</Title>
        </WrapperTitle>
      <WrapperColors>
        {colorsImpossible.map((val, index) => {
          return (
            <Colors
              key={index}
              isFocus={selectColors.includes(val)}
              onClick={() => {handleSelectColors(val); setImTyping(true)}}
            >
              <InsideColor color={val}></InsideColor>
            </Colors>
          );
        })}
        <Colors onClick={() => setShowingPicker(!showingPicker)}>
          <AddIconColor />
        </Colors>
        {showingPicker ? (
          <WrapperPicker>
            <PhotoshopPicker
          
              color={colorchoose}
              onChangeComplete={(col) => setcolorchoose(col)}
              onAccept={() => {
                setColorsImpossible([...colorsImpossible, colorchoose.hex]);
                setShowingPicker(false);
              }}
              onCancel={() => setShowingPicker(false)}
            />
          </WrapperPicker>
        ) : null}
      </WrapperColors>
    </Container>
  );
};

export default CustomColors;
