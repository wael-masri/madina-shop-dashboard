import React, { useEffect, useState, useRef } from "react";
import { CustomInput } from "../../../SubComponents";
import {
  Container,
  Title,
  WrapperModels,
  WrapperInputModel,
  IconAdd,
  WrapperModelValue,
  IconRemoveModel,
  WrapperTitle,
  WrapperBoxInput,
  WrapperInput,
  WrapperButtonInput,
  StyledInput,
  WrapperModelsBox,
  BoxSliderUtils,
  IconNext,
  IconPrev,
} from "./Style";

const CustomModel = ({ setInputData,setImTyping }) => {
  const refSlider = useRef(null);
  const scroll = (widthImg) => {
    refSlider.current.scrollLeft += widthImg;
  };
  
  const [inputModel, setInputModel] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    setInputData((prevStat) => ({ ...prevStat, model: models }));
  }, [models]);

  const handleAddModel = () => {
    const trimModelValue = inputModel.trim();
    if (trimModelValue) {
      if (!models.includes(trimModelValue)) {
        setModels((prevStat) => [...prevStat, trimModelValue]);
        setInputModel("");
      }
    }
  };
  const handleRemoveModel = (model) => {
    setImTyping(true);
    let arrayup = [];
    arrayup = models;
    var newArr = arrayup.filter(function (e) {
      return e !== model;
    });
    setModels(newArr);
  };
  const _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddModel();
      setImTyping(true);
   
    }
  }
  return (
    <Container>
      <WrapperTitle>
        <Title>MODELS</Title>
      </WrapperTitle>
      <WrapperInputModel>
        <WrapperBoxInput>
          <WrapperInput>
            <StyledInput
              type="text"
              placeholder="Add Model.."
              onChange={(e) => setInputModel(e.target.value)}
              value={inputModel}
              onKeyDown={_handleKeyDown}
            />
          </WrapperInput>
          <WrapperButtonInput onClick={() => {handleAddModel(); setImTyping(true);}}>
            <IconAdd />
          </WrapperButtonInput>
        </WrapperBoxInput>
      </WrapperInputModel>
      {models.length !== 0 ? (
        <WrapperModelsBox>
          <BoxSliderUtils direction="left" onClick={() => scroll(-70)}>
            <IconPrev />
          </BoxSliderUtils>
          <BoxSliderUtils direction="right" onClick={() => scroll(70)}>
            <IconNext />
          </BoxSliderUtils>
          <WrapperModels ref={refSlider}>
            {models.map((val, index) => {
              return (
                <WrapperModelValue key={index}>
                  {val}{" "}
                  <IconRemoveModel onClick={() => handleRemoveModel(val)} />
                </WrapperModelValue>
              );
            })}
          </WrapperModels>
        </WrapperModelsBox>
      ) : null}
    </Container>
  );
};

export default CustomModel;
