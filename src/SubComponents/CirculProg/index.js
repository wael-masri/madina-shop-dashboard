import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container, WrapperCircul, WrapperInfo,TitlePrice,TotalPricesToday } from "./Style";
const CirculProg = () => {
  const percentage = 66;
  return (
    <Container>
      <WrapperCircul>
        <CircularProgressbar value={percentage} text={`${percentage}%`}  background styles={buildStyles({
          backgroundColor: "#f1f4f4",
          textColor: "#A9A9A9",
          pathColor: "#3e98c7",
          trailColor: "transparent"
        })} />
      </WrapperCircul>
      <WrapperInfo>
        <TitlePrice>Total sales made today</TitlePrice>
     <TotalPricesToday>$420</TotalPricesToday>
      </WrapperInfo>
    </Container>
  );
};

export default CirculProg;
