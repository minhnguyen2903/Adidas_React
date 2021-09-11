import { combineReducers } from "redux";
import { ProductReducer, WishListReducer, ProductDetailReducer, CartReducer, SearchResultReducer, PrevPathReducer, SignInReducer} from "./reducer";
const Reducers = combineReducers({
    allProducts: ProductReducer,
    wishList: WishListReducer,
    productDetail: ProductDetailReducer,
    cart: CartReducer,
    searchResult: SearchResultReducer,
    prevPath: PrevPathReducer,
    isSign: SignInReducer
})

export default Reducers