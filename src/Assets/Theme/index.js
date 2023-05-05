import styled, { createGlobalStyle } from "styled-components";
//GLOBAL STYLE
export const GlobaleStyles = createGlobalStyle`
body{
    padding: 0px;
    margin: 0px;
    font-family: "Poppins","sans-serif";
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(216, 216, 216);
  border-radius: 40px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
.react-confirm-alert-overlay {
  background: rgba(0, 0, 0, 0.7);
  z-index: 12212132;
}
`;
export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.REDCOLOR};
  font-size: 13px;
  width: ${({ width }) => width};
`;
export const ContainerPages = styled.div`
  width: 100%;
`;
export const WrapperPages = styled.div`
  margin: 30px 50px;
  padding: 15px;
  background-color: ${({ theme }) => theme.BACKGROUND2};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.BOXSHADOW};
`;

export const lightMode = (themeColor) => {
  const light = {
    TEXTCOLOR1: "#000",
    TEXTCOLOR2: "#A9A9A9",
    HOVERICON: "#fafbfb",
    ICONCOLOR: `${themeColor ? themeColor : "#1e4db7"}`,
    BACKGROUND1: "#f1f4f4",
    BACKGROUND2: "#ffffff",
    TRANSITION: "all .2s ease",
    BOXSHADOW: "4px 7px 24px -9px rgb(30,77,183)",
    REDCOLOR: "#FF1212",
    GREENCOLOR: "#28D60C",
    WHITECOLOR: "#FFFFFF",
    GRAYCOLOR: "#BEBEBE",
    BLACKCOLOR: "#000",
  };

  return light;
};

export const darkMode = (themeColor) => {
  const dark = {
    TEXTCOLOR1: "#fff",
    TEXTCOLOR2: "#7451f8",
    ICONCOLOR: `${themeColor ? themeColor : "#1e4db7"}`,
    BACKGROUND1: "#20232a",
    HOVERICON: "#33373e",
    BACKGROUND2: "#33373e",
    TRANSITION: "all .2s ease",
    BOXSHADOW: "4px 7px 24px -9px  rgb(30,77,183)",
    REDCOLOR: "#FF1212",
    GREENCOLOR: "#28D60C",
    WHITECOLOR: "#FFFFFF",
    GRAYCOLOR: "#33373e",
    BLACKCOLOR: "#000",
  };

  return dark;
};
