import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helper from "../../../helper/helper";
import {
  AddToCart,
  RemoveFromWishList,
  AddProductDetail,
} from "../../../redux/action/action";
import {
  SelectOption,
  SelectNumber,
} from "../../GlobalComponent/select-option";

const WishListShow = () => {
  const products = useSelector((state: any) => state.wishList.products);
  const dispatch = useDispatch();
  const [size, setSize] = useState("3.5 UK");
  const [number, setNumber] = useState("1");

  const handleSize = (size: any) => {
    setSize(size);
  };

  const handleNumber = (number: any) => {
    setNumber(number);
  };

  const filterAction = (productActive: any) => {
    const localItem = JSON.parse(String(localStorage.getItem("cart")));
    if (localItem !== null) {
      if (localItem.length > 1) {
        const check = localItem.filter(
          (item: any) => item.productId === productActive.productId
        );
        if (check.length > 0) {
          return true;
        }
        if (check.length === 0) {
          return false;
        }
      } else {
        if (localItem.productId === productActive.productId) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  };

  const viewDetail = (element: any) => {
    dispatch(AddProductDetail(element));
    localStorage.setItem("lastView", JSON.stringify(element));
  };

  const addToCart = (element: any) => {
    if (filterAction(element) === false) {
      element.number = parseInt(number);
      element.size = size;
      dispatch(AddToCart(element));
      Helper.saveToLocalStorage("cart", element);
    }
  };

  const RemoveItem = (element: any) => {
    dispatch(RemoveFromWishList(element));
    Helper.removeFromLocalStorage("wishList", element);
  };

  const renderProducts = products.map((item: any) => {
    const mapIndex = products.indexOf(item);
    return (
      <div
        className={`row pt-3 pb-3 justify-content-between ${
          mapIndex !== 0 ? "border-top" : ""
        }`}
        key={mapIndex}
      >
        <div className="col-sm-9 row">
          <div
            className="product-img cursor-pointer w-auto"
            onClick={() => {
              viewDetail(item);
              window.location.href = `/search/${item.productId}`;
            }}
            style={{ height: "110px" }}
          >
            <img src={item.image} alt="" className="h-100 w-auto" />
          </div>
          <div className="product-detail ms-3 w-auto">
            <h3 className="product-name text-uppercase text-regular text-700">
              {item.title}
            </h3>
            <p className="product-color text-wrap">Color: {item.color}</p>
            <button
              className="border-0 bg-white text-primary"
              onClick={() => {
                RemoveItem(item);
              }}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="col-sm-3 mt-5 mt-sm-0 col-6">
          <div className="mb-3">In Stock</div>
          <div className="same-product row" style={{ height: "50px" }}>
            <img src={item.image} alt="" className="h-100 me-2 w-auto" />
            <img src={item.image} alt="" className="h-100 me-2 w-auto" />
          </div>
          <div className="select-size row justify-content-between mt-4">
            <div className="w-auto"><SelectOption size={size} handleSize={handleSize} /></div>
            <SelectNumber
              number={number}
              handleNumber={handleNumber}
              element={item}
              type="wishList"
            />
          </div>
          <div className="add-to-bag mt-4">
            <button
              className="text-uppercase text-700 text-light border-0 bg-gradient-primary p-2 text-medium w-100"
              onClick={() => {
                addToCart(item);
              }}
            >
              add to bag
            </button>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
  }, [number, size]);

  return (
    <main>
      <div className="w-100 p-3 bg-dark"></div>
      <div
        className="row d-flex justify-content-lg-center p-3"
        style={{ overflowX: "scroll" }}
      >
        <div className="col-lg-10 content-container">
          <h2 className="text-uppercase text-400 pt-4 pb-3">wish list</h2>
          <div
            className="wish-list border-top border-5 border-bottom"
            style={{ minWidth: "500px" }}
          >
            {renderProducts}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WishListShow;
