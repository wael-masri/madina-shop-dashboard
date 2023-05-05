import React from "react";
import {
  Container,
  WrapperIcons,
  WrapperIconsBar,
  IconMenu,
  IconAlert,
  IconSetting,
  WrapperProfile,
  ImageProfile,
  InfoProfile,
  Bolded,
  IconDown,
  IconLight,
  IconDark,
  IconUp,
} from "./Style";
import Tooltip from "@mui/material/Tooltip";
import prof from "../../Assets/Images/noImage.png";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusMenu,
  changeStatusMode,
  changeStatusProfile,
  changeStatusSetting,
} from "../../Redux/Actions/PopupsActions";
const Navbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.popups);
  const otherState = useSelector((state) => state.otherState);
  return (
    <Container>
      <Tooltip title="Menu" placement="bottom">
        <WrapperIcons>
          <IconMenu
            onClick={() => dispatch(changeStatusMenu(!status.isMenu))}
          />
        </WrapperIcons>
      </Tooltip>
      <WrapperIconsBar>
        <Tooltip title="Mode" placement="bottom">
          <WrapperIcons
            onClick={() => dispatch(changeStatusMode(!status.isMode))}
          >
            {status.isMode ? <IconDark /> : <IconLight />}
          </WrapperIcons>
        </Tooltip>
        <Tooltip title="Notifications" placement="bottom">
          <WrapperIcons>
            <IconAlert />
          </WrapperIcons>
        </Tooltip>
        <Tooltip title="Settings" placement="bottom">
          <WrapperIcons onClick={() => dispatch(changeStatusSetting(true))}>
            <IconSetting />
          </WrapperIcons>
        </Tooltip>
        <Tooltip title="Profile" placement="bottom">
          <WrapperProfile
            onClick={() => dispatch(changeStatusProfile(!status.isProfile))}
          >
            {otherState.userLogin.profileImage ? (
              <ImageProfile
                src={otherState.userLogin.profileImage}
                alt="profilepic"
              />
            ) : (
              <ImageProfile src={prof} alt="profilepic" />
            )}
            <InfoProfile>
              Hi,{" "}
              <Bolded>
                {otherState.userLogin.name}{" "}
                {status.isProfile ? <IconUp /> : <IconDown />}
              </Bolded>
            </InfoProfile>
          </WrapperProfile>
        </Tooltip>
      </WrapperIconsBar>
    </Container>
  );
};

export default Navbar;
