import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  Title,
  WrapperTags,
  WrapperInputTag,
  IconAdd,
  WrapperTagValue,
  IconRemoveTag,
  WrapperTitle,
  WrapperBoxInput,
  WrapperInput,
  WrapperButtonInput,
  StyledInput,
  WrapperTagsBox,
  BoxSliderUtils,
  IconNext,
  IconPrev,
} from "./Style";

const CustomTags = ({ setInputData,setImTyping }) => {
  const refSlider = useRef(null);
  const scroll = (widthImg) => {
    refSlider.current.scrollLeft += widthImg;
  };
  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    setInputData((prevStat) => ({ ...prevStat, tag: tags }));
  }, [tags]);
  const handleAddTag = () => {
    const trimTagValue = inputTag.trim();
    if (trimTagValue) {
      if (!tags.includes(trimTagValue)) {
        setTags((prevStat) => [...prevStat, trimTagValue]);
        setInputTag("");
      }
    }
  };
  const handleRemoveTag = (tag) => {
    setImTyping(true);
    let arrayup = [];
    arrayup = tags;
    var newArr = arrayup.filter(function (e) {
      return e !== tag;
    });
    setTags(newArr);
  };
  const _handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTag();
      setImTyping(true);
    }
  };
  return (
    <Container>
      <WrapperTitle>
        <Title>TAGS</Title>
      </WrapperTitle>
      <WrapperInputTag>
        <WrapperBoxInput>
          <WrapperInput>
            <StyledInput
              type="text"
              placeholder="Add Tag.."
              onChange={(e) => setInputTag(e.target.value)}
              value={inputTag}
              onKeyDown={_handleKeyDown}
            />
          </WrapperInput>
          <WrapperButtonInput onClick={() => {handleAddTag(); setImTyping(true);}}>
            <IconAdd />
          </WrapperButtonInput>
        </WrapperBoxInput>
      </WrapperInputTag>
      {tags.length !== 0 ? (
        <WrapperTagsBox>
          <BoxSliderUtils direction="left" onClick={() => scroll(-70)}>
            <IconPrev />
          </BoxSliderUtils>
          <BoxSliderUtils direction="right" onClick={() => scroll(70)}>
            <IconNext />
          </BoxSliderUtils>
          <WrapperTags ref={refSlider}>
            {tags.map((val, index) => {
              return (
                <WrapperTagValue key={index}>
                  {val} <IconRemoveTag onClick={() => handleRemoveTag(val)} />
                </WrapperTagValue>
              );
            })}
          </WrapperTags>
        </WrapperTagsBox>
      ) : null}
    </Container>
  );
};

export default CustomTags;
