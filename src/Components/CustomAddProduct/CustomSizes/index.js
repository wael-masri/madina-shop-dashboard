import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  WrapperSizes,
  WrapperInputSize,
  IconAdd,
  WrapperSizeValue,
  IconRemoveSize,
  WrapperTitle,
  WrapperBoxInput,
  WrapperInput,
  WrapperButtonInput,
  StyledInput,
  WrapperSizesBox,
  BoxSliderUtils,
  IconNext,
  IconPrev,
} from "./Style";

const CustomSizes = ({ setInputData,setImTyping }) => {
  const refSlider = useRef(null);
  const scroll = (widthImg) => {
    refSlider.current.scrollLeft += widthImg;
  };
  const [inputSize, setInputSize] = useState("");
  const [sizes, setSizes] = useState([]);
 
  useEffect(() => {
    setInputData((prevStat) => ({ ...prevStat, size: sizes }));
  }, [sizes]);

  const handleAddSize = () => {
    const trimSizeValue = inputSize.trim();
    if (trimSizeValue) {
      if (!sizes.includes(trimSizeValue)) {
        setSizes((prevStat) => [...prevStat, trimSizeValue]);
        setInputSize("");
      }
    }
  };
  const handleRemoveSize = (size) => {
    setImTyping(true);
    let arrayup = [];
    arrayup = sizes;
    var newArr = arrayup.filter(function (e) {
      return e !== size;
    });
    setSizes(newArr);
  };
  const _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddSize();
      setImTyping(true);
   
    }
  }
  return (
    <Container>
      <WrapperTitle>
        <Title>SIZES</Title>
      </WrapperTitle>
      <WrapperInputSize>
        <WrapperBoxInput>
          <WrapperInput>
            <StyledInput
              type="text"
              placeholder="Add Size.."
              onChange={(e) => setInputSize(e.target.value)}
              value={inputSize}
              onKeyDown={_handleKeyDown}
            />
          </WrapperInput>
          <WrapperButtonInput onClick={() => {handleAddSize(); setImTyping(true);}}>
            <IconAdd />
          </WrapperButtonInput>
        </WrapperBoxInput>
      </WrapperInputSize>
      {sizes.length !==0 ? (
        <WrapperSizesBox>
          <BoxSliderUtils direction="left" onClick={() => scroll(-70)}>
            <IconPrev />
          </BoxSliderUtils>
          <BoxSliderUtils direction="right" onClick={() => scroll(70)}>
            <IconNext />
          </BoxSliderUtils>
          <WrapperSizes ref={refSlider}>
            {sizes.map((val, index) => {
              return (
                <WrapperSizeValue key={index}>
                  {val} <IconRemoveSize onClick={() => handleRemoveSize(val)} />
                </WrapperSizeValue>
              );
            })}
          </WrapperSizes>
        </WrapperSizesBox>
      ) : null}
    </Container>
  );
};

export default CustomSizes;
