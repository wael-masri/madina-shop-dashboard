import React from "react";
import {
  WrapperProfile,
  BoxProfile,
  ItemProfile,
  IconProfile,
  IconOrders,
  IconHelp,
  IconSignout,
  CustomLink,
} from "./Style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusProfile } from "../../Redux/Actions/PopupsActions";
const CustomProfile = () => {
  const navigate = useNavigate();
  const otherState = useSelector((state) => state.otherState);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("tokenMadinaShop");
    navigate("/");
  };
  return (
    <WrapperProfile>
      <BoxProfile>
        <CustomLink
          to="/show-user"
          state={otherState.userLogin}
          onClick={() => dispatch(changeStatusProfile(false))}
        >
          {" "}
          <ItemProfile >
            <IconProfile />
            My Profile
          </ItemProfile>
        </CustomLink>
        <ItemProfile onClick={() => dispatch(changeStatusProfile(false))}>
          <IconOrders />
          My Orders
        </ItemProfile>
        <ItemProfile onClick={() => dispatch(changeStatusProfile(false))}>
          <IconHelp />
          Help
        </ItemProfile>
        <ItemProfile action="true" onClick={() => {dispatch(changeStatusProfile(false)); logout()}}>
          <IconSignout />
          Sign Out
        </ItemProfile>
      </BoxProfile>
    </WrapperProfile>
  );
};

export default CustomProfile;
