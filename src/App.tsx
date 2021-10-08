import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderComponent from "./components/header/header";
import BodyComponent from "./components/body/page/homePage";
import MenPage from "./components/body/page/menPage";
import WomenPage from "./components/body/page/womenPage";
import KidsPage from "./components/body/page/kidsPage";
import Searchresult from "./components/body/page/searchResult";
import ProductInfo from "./components/body/page/ProductDetail";
import WishListShow from "./components/body/page/wishList";
import Delivery from "./components/body/page/delivery";
import Cart from "./components/body/page/cart";
import Login from "./components/body/page/login";
import AccountRegister from "./components/body/page/register";
import MyAccount from "./components/body/page/myAccount";

import "bootstrap/dist/css/bootstrap.css";
import "./asserts/style/style.css";
import "./App.css";
import "./modifyBootstrap.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SignIn,
  GetAllProduct,
  AddToWishList,
  RemoveAllWishList,
  RemoveAllCart,
  AddToCart,
  AddProductDetail,
  RemoveSearchResult,
  AddToSearchResult,
} from "./redux/action/action";
import * as Request from "./axiosRequest/request";
import Helper from "./helper/helper";

function App() {
  const dispatch = useDispatch();
  const isSigned = useSelector((state: any) => state.isSign);

  const getItemFromLocal = (key: any, addItem: any, removeFunc: any) => {
    const localItem = JSON.parse(String(localStorage.getItem(key)));
    if (localItem !== null) {
      if (removeFunc) {
        dispatch(removeFunc());
      }
      if (localItem.length >= 1) {
        localItem.forEach((item: any) => {
          dispatch(addItem(item));
        });
      } else {
        dispatch(addItem(localItem));
      }
    }
  };

  const verifyToken = async () => {
    let token = JSON.parse(String(localStorage.getItem("__token")));
    if (token) {
      if(Date.now() >= token.expireTime*1000) {
        await Request.RefreshToken(`${process.env.REACT_APP_SERVER_URL}/refreshToken`, token.refreshToken)
        token = JSON.parse(String(localStorage.getItem("__token")));
      }
      await Request.PostWithAuthentication(
        `${process.env.REACT_APP_SERVER_URL}/user/info`,
        token.token
      )
        .then((res: any) => {
          if(localStorage.wishList) {
            localStorage.removeItem("wishList");
          }
          if(res.data.wishLists.length > 0) {
            Helper.saveToLocalStorage("wishList", res.data.wishLists)
          }
          if(localStorage.cart) {
            localStorage.removeItem("cart");
          }
          if(res.data.carts.length > 0) {
            Helper.saveToLocalStorage("cart", res.data.carts)
          }
          dispatch(SignIn(res.data));
        })
        .catch((err: any) => {
          localStorage.removeItem("__token");
          throw err;
        });
    } else {
      dispatch(SignIn(false));
      localStorage.removeItem("wishList");
      localStorage.removeItem("cart");  
    }
  };
  useEffect(() => {
    verifyToken();
    Request.GetData(
      `${process.env.REACT_APP_SERVER_URL}/api/all-products`
    ).then((result: any) => {
      dispatch(GetAllProduct(result));
    });
  }, []);

  useEffect(() => {
    getItemFromLocal("wishList", AddToWishList, RemoveAllWishList);
    getItemFromLocal("cart", AddToCart, RemoveAllCart);
    getItemFromLocal("lastView", AddProductDetail, null);
    getItemFromLocal("searchResult", AddToSearchResult, RemoveSearchResult);
  }, [isSigned]);

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={BodyComponent}></Route>
          <Route exact path="/men">
            <MenPage />
          </Route>
          <Route exact path="/women" component={WomenPage}></Route>
          <Route exact path="/kids" component={KidsPage}></Route>
          <Route exact path="/search" component={Searchresult}></Route>
          <Route exact path="/wishlist-show" component={WishListShow}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/account-login" component={Login}></Route>
          <Route exact path="/delivery" component={Delivery}></Route>
          <Route exact path="/account-register" component={AccountRegister}></Route>
          <Route path="/search/:productId" exact component={ProductInfo} />
          {isSigned ? (
            <Route path="/myAccount" exact component={MyAccount} />
          ) : null}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
