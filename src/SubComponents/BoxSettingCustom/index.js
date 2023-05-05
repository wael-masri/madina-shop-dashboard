import { useGridScrollFn } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusBar,
  changeStatusHeader,
  changeStatusLine,
  changeStatusPie,
  changeStatusProgress,
  changeStatusTopCustomers,
  changeStatusTransactions,
} from "../../Redux/Actions/BadgesActions";
import { changeThemeColor } from "../../Redux/Actions/OtherStateActions";
import { changeStatusSetting } from "../../Redux/Actions/PopupsActions";

import CustomCheckBox from "../CustomCheckBox";
import {
  WrapperSetting,
  BoxSetting,
  WrapperCloseIcon,
  CloseIcon,
  WrapperTitle,
  WrapperSubTitle,
  WrapperThemeColor,
  ThemeColor,
  WrapperCheckBox,
} from "./Style";
const BoxSettingCustom = () => {
  const checkStatus = useSelector((state) => state.badges);
  const [colorTheme, setColorTheme] = useState([
    "red",
    "green",
    "blue",
    "gray",
  ]);
  useEffect(() => {}, [checkStatus]);
  const checkBoxValue = [
    {
      id: "cb1",
      name: "Header",
      ischeck: checkStatus.header,
      setchange: changeStatusHeader,
    },
    {
      id: "cb2",
      name: "Mini Pie",
      ischeck: checkStatus.pie,
      setchange: changeStatusPie,
    },
    {
      id: "cb3",
      name: "Mini Circul",
      ischeck: checkStatus.progressCircule,
      setchange: changeStatusProgress,
    },
    {
      id: "cb4",
      name: "Bar Chart",
      ischeck: checkStatus.bar,
      setchange: changeStatusBar,
    },
    {
      id: "cb5",
      name: "Line Chart",
      ischeck: checkStatus.line,
      setchange: changeStatusLine,
    },
    {
      id: "cb6",
      name: "Top Customers",
      ischeck: checkStatus.topCustomers,
      setchange: changeStatusTopCustomers,
    },
    {
      id: "cb7",
      name: "Transactions",
      ischeck: checkStatus.transactions,
      setchange: changeStatusTransactions,
    },
  ];
  const dispatch = useDispatch();
  return (
    <WrapperSetting>
      <BoxSetting>
        <WrapperCloseIcon>
          <CloseIcon onClick={() => dispatch(changeStatusSetting(false))} />
        </WrapperCloseIcon>
        <WrapperTitle>Setting</WrapperTitle>
        <WrapperSubTitle>Theme Color</WrapperSubTitle>
        <WrapperThemeColor>
          {colorTheme.map((val, index) => {
            return (
              <ThemeColor
                key={index}
                color={val}
                onClick={() => {
                  dispatch(changeThemeColor(val));
                  dispatch(changeStatusSetting(false));
                }}
              ></ThemeColor>
            );
          })}
        </WrapperThemeColor>
        <WrapperSubTitle>Edit Dashboard</WrapperSubTitle>
        <WrapperCheckBox>
          {checkBoxValue.map((val, index) => {
            return (
              <CustomCheckBox
                key={index}
                id={val.id}
                name={val.name}
                isCheck={val.ischeck}
                setChange={val.setchange}
              />
            );
          })}
        </WrapperCheckBox>
      </BoxSetting>
    </WrapperSetting>
  );
};

export default BoxSettingCustom;
