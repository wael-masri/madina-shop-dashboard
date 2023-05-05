import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setUserLogin } from "../Redux/Actions/OtherStateActions";
import { Loading } from "../SubComponents";
import AuthUtils from "../Utils/AuthUtils";
const ProtectRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      const user = await AuthUtils.isAuthenticated();
      if (!user) {
        navigate("/");
      } else {
       dispatch(setUserLogin(user))
      
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate,dispatch]);
  return loading ? (
    <Loading full="true" />
  ) :  (
   
      <Outlet />
  
  );
};

export default ProtectRoutes;
