import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  ImageProfile,
  UsernameStyled,
  IconAdmin,
  IconEmail,
  IconManager,
  IconPhone,
  IconUser,
  WrapperEmail,
  WrapperPhone,
  WrapperRole,
  IconBack,
  Wrapper,
  WrapperImage,
  WrapperInfo,
  WrapperHeaderInfo,
  IconEdit,
} from "./Style";
import noImage from "../../Assets/Images/noImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../SubComponents";
const CustomShowUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState(null);
  console.log(dataUser)

  useEffect(() => {
    const checkDate = async () => {
      const dataOfUser = await location.state;
      if (!dataOfUser) {
        navigate(-1);
      } else {
        setDataUser(dataOfUser);
        setLoading(false);
      }
    };
    checkDate();
  }, [location, navigate]);

  return loading ? (
    <Loading full={true} />
  ) : (
    <Container>
      <Header>
        <IconBack onClick={() => navigate(-1)} />
      </Header>
      <Wrapper>
        <WrapperImage>
          {dataUser.profileImage ? (
            <ImageProfile src={dataUser.profileImage} alt="cover" />
          ) : (
            <ImageProfile src={noImage} alt="cover" />
          )}
        </WrapperImage>
        <WrapperInfo>
          <WrapperHeaderInfo>
            <UsernameStyled>
              {dataUser.name || "none"} <IconEdit />
            </UsernameStyled>
            <WrapperRole>
              {dataUser.role === "user" ? (
                <>
                  <IconUser /> {dataUser.role}
                </>
              ) : dataUser.role === "admin" ? (
                <>
                  <IconAdmin />
                  {dataUser.role}
                </>
              ) : dataUser.role === "manager" ? (
                <>
                  <IconManager />
                  {dataUser.role}
                </>
              ) : (
                "none"
              )}
            </WrapperRole>
          </WrapperHeaderInfo>

          <WrapperEmail>
            <IconEmail /> {dataUser.email || "none"}
          </WrapperEmail>
          <WrapperPhone>
            <IconPhone /> {dataUser.phone || "No phone Number"}
          </WrapperPhone>
        </WrapperInfo>
      </Wrapper>
    </Container>
  );
};

export default CustomShowUser;
