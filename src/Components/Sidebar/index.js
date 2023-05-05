import React,{useEffect,useState} from "react";
import {
  Container,
  WrapperLogo,
  Logo,
  WrapperMain,
  WrapperSidebar,
  BoxSidebar,
  TitleLinks,
  WrapperLinks,
  IconsWrap,
  LinksWrap,
  WrapperMainsub,
  LinkTo,
} from "./Style";
import { links } from "../../Assets/Data";
import logo from "../../Assets/Images/logo.png";
import {
  AddKanban,
  BoxSettingCustom,
  CustomProfile,
  EditKanban,
  PopupImage,
  ShowBrand,
  ShowCategory,
} from "../../SubComponents";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusMenu } from "../../Redux/Actions/PopupsActions";


const Sidebar = ({ children }) => {
  const location = useLocation();
  
 
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const status = useSelector((state) => state.popups);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleWindowResize = () => {
     if(window.innerWidth < 1000){
      dispatch(changeStatusMenu(false))
     }else{
      dispatch(changeStatusMenu(true))
     }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[]);
  return (
    <Container>
      <WrapperSidebar activeMenu={status.isMenu}>
        <BoxSidebar activeMenu={status.isMenu}>
          <WrapperLogo>
            <Logo src={logo} alt="logopic" activeMenu={status.isMenu} />
          </WrapperLogo>
          {links.map((value, index) => {
            return (
              <div key={index}>
                <TitleLinks activeMenu={status.isMenu}>
                  {value.title}
                </TitleLinks>
                {value.links.map((val, index) => {
                  return (
                    <LinkTo to={val.link} key={index}>
                      <WrapperLinks
                        className={
                          splitLocation[1] === val.link ? "activemenu" : ""
                        }
                      >
                        <IconsWrap>{val.icon}</IconsWrap>
                        <LinksWrap activeMenu={status.isMenu}>
                          {val.name}
                        </LinksWrap>
                      </WrapperLinks>
                    </LinkTo>
                  );
                })}
              </div>
            );
          })}
        </BoxSidebar>
      </WrapperSidebar>
      <WrapperMain>
        <WrapperMainsub>{children}</WrapperMainsub>
      </WrapperMain>
      {status.isSetting ? <BoxSettingCustom /> : ""}
      {status.isProfile ? <CustomProfile /> : ""}
      {status.isImage ? <PopupImage /> : ""}
      {status.isShowCategory ? <ShowCategory /> : ""}
      {status.isShowBrand ? <ShowBrand /> : ""}
      {status.isKanbanWork ? <AddKanban /> : ""}
      {status.isKanbanEdit ? <EditKanban /> : ""}
    </Container>
  );
};

export default Sidebar;
