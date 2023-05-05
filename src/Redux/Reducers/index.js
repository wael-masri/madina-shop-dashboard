import { combineReducers } from "redux";
import BadgesReducer from "./BadgesReducer";
import BrandReducer from "./BrandReducer";
import CategoryReducer from "./CategoryReducer";
import OtherStateReducer from "./OtherStateReducer";
import PopupsReducer from "./PopupsReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";
import CouponReducer from "./CouponReducer";
import ReviewReducer from "./ReviewReducer";


export default combineReducers({
    badges : BadgesReducer,
    category : CategoryReducer,
    popups : PopupsReducer,
    otherState : OtherStateReducer,
    subCategory : SubCategoryReducer,
    brand : BrandReducer,
    user : UserReducer,
    product : ProductReducer,
    coupon : CouponReducer,
    review : ReviewReducer
})