import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../Actions/CategoryActions";
import CategoryApi from "../../Api/CategoryApi";
import {
  fetchDataFailureSub,
  fetchDataRequestSub,
  fetchDataSuccessSub,
} from "../Actions/SubCategoryActions";
import SubCategoryApi from "../../Api/SubCategoryApi";
import {
  fetchDataFailureBrand,
  fetchDataRequestBrand,
  fetchDataSuccessBrand,
} from "../Actions/BrandActions";
import BrandApi from "../../Api/BrandApi";
import {
  fetchDataFailureUser,
  fetchDataRequestUser,
  fetchDataSuccessUser,
} from "../Actions/UserActions";
import UserApi from "../../Api/UserApi";
import {
  fetchDataFailureProduct,
  fetchDataRequestProduct,
  fetchDataSuccessProduct,
} from "../Actions/ProductActions";
import ProductApi from "../../Api/ProductApi";
import CouponApi from "../../Api/CouponApi";
import {
  fetchDataFailureCoupon,
  fetchDataRequestCoupon,
  fetchDataSuccessCoupon,
} from "../Actions/CouponActions";
import { fetchDataFailureReview, fetchDataRequestReview, fetchDataSuccessReview } from "../Actions/ReviewActions";
import ReviewApi from "../../Api/ReviewApi";
export const getCategories = async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await CategoryApi.getAll();
    response && dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailure(msg));
  }
};

export const getSubCategories = async (dispatch) => {
  dispatch(fetchDataRequestSub());
  try {
    const response = await SubCategoryApi.getAllWithPopulate();
    response && dispatch(fetchDataSuccessSub(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureSub(msg));
  }
};
export const getCoupons = async (dispatch) => {
  dispatch(fetchDataRequestCoupon());
  try {
    const response = await CouponApi.getAll();
    response && dispatch(fetchDataSuccessCoupon(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureCoupon(msg));
  }
};

export const getBrands = async (dispatch) => {
  dispatch(fetchDataRequestBrand());
  try {
    const response = await BrandApi.getAll();
    response && dispatch(fetchDataSuccessBrand(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureBrand(msg));
  }
};

export const getUsers = async (dispatch) => {
  dispatch(fetchDataRequestUser());
  try {
    const response = await UserApi.getAll();
    response && dispatch(fetchDataSuccessUser(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureUser(msg));
  }
};
export const getProducts = async (dispatch) => {
  dispatch(fetchDataRequestProduct());
  try {
    const response = await ProductApi.getAll();
    response && dispatch(fetchDataSuccessProduct(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureProduct(msg));
  }
};
export const getReviews = async (dispatch) => {
  dispatch(fetchDataRequestReview());
  try {
    const response = await ReviewApi.getAll();
    response && dispatch(fetchDataSuccessReview(response.data));
  } catch (error) {
    const msg = error.message;
    dispatch(fetchDataFailureReview(msg));
  }
};
