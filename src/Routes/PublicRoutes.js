import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUtils from "../Utils/AuthUtils";
import { Loading } from "../SubComponents";

const PublicRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await AuthUtils.isAuthenticated();
      if (!isAuth) {
        setLoading(false);
      } else {
        navigate("/dashboard");
      }
    };
    checkAuth();
  }, [navigate]);

  return loading ? <Loading full="true" /> : <Outlet />;
};

export default PublicRoutes;
