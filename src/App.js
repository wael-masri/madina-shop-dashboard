import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobaleStyles, darkMode, lightMode } from "./Assets/Theme";
import { Routes, Route, Outlet } from "react-router-dom";
import { ProtectRoutes, PublicRoutes } from "./Routes";

//Pages Routes
import {
  AddBrandPage,
  AddCategoryPage,
  AddCoupon,
  AddProductPage,
  AddSubCategory,
  BrandPage,
  CategoryPage,
  ColorPicker,
  CouponPage,
  Dashboard,
  EditBrandPage,
  EditCategoryPage,
  EditorText,
  EditUser,
  KanbanPage,
  Login,
  ProductsPage,
  ReviewsPage,
  ShowProduct,
  ShowReview,
  ShowUser,
  SubCategory,
  UsersPage,
} from "./Pages";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
import { Navbar, Sidebar } from "./Components";
import EditProductPage from "./Pages/EditProductPage";

const ProtectRouteWithNav = () => {
  return (
    <>
      <Sidebar>
        <Navbar />
        <Outlet />
      </Sidebar>
    </>
  );
};
const ProtectRouteWithoutNav = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
function App() {
  const statusMode = useSelector((state) => state.popups);
  const themeChange = useSelector((state) => state.otherState);

  const ProtectRoute = () => {
    return (
      <>
        <Route path="/" element={<ProtectRouteWithNav />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="colorpicker" element={<ColorPicker />} />
          <Route path="editortext" element={<EditorText />} />
          <Route path="kanban" element={<KanbanPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="subcategory" element={<SubCategory />} />
          <Route path="brand" element={<BrandPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="coupon" element={<CouponPage />} />
          <Route path="review" element={<ReviewsPage />} />
        </Route>
        <Route path="/" element={<ProtectRouteWithoutNav />}>
          <Route path="show-user" element={<ShowUser />} />
          <Route path="edit-user" element={<EditUser />} />
          <Route path="show-product" element={<ShowProduct />} />
          <Route path="add-product" element={<AddProductPage />} />
          <Route path="edit-product" element={<EditProductPage />} />
          <Route path="edit-category" element={<EditCategoryPage />} />
          <Route path="edit-brand" element={<EditBrandPage />} />
          <Route path="add-category" element={<AddCategoryPage />} />
          <Route path="add-brand" element={<AddBrandPage />} />
          <Route path="add-subcategory" element={<AddSubCategory />} />
          <Route path="add-coupon" element={<AddCoupon />} />
          <Route path="show-review" element={<ShowReview />} />
        </Route>
      </>
    );
  };

  const PublicRoute = () => {
    return <Route index element={<Login />} />;
  };

  return (
    <ThemeProvider
      theme={
        statusMode.isMode
          ? darkMode(themeChange.themeColor)
          : lightMode(themeChange.themeColor)
      }
    >
      <GlobaleStyles />
      <SnackbarProvider
        maxSnack={2}
        style={{
          backgroundColor: "#D0342C",
          color: "#fff",
        }}
      >
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            {PublicRoute()}
          </Route>
          <Route path="/" element={<ProtectRoutes />}>
            {ProtectRoute()}
          </Route>
        </Routes>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
