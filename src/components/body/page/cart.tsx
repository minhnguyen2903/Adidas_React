import { useDispatch, useSelector } from "react-redux";
import { ButtonActive } from "../../GlobalComponent/button";
import Icon from "@material-ui/core/Icon";
import { RemoveFromCart } from "../../../redux/action/action";
import Helper from "../../../helper/helper";
import { SelectNumber } from "../../GlobalComponent/select-option";
import { Favorite } from "../../GlobalComponent/favorite";
import { useEffect, useState } from "react";
const Cart = () => {
    const products = useSelector((state: any) => state.cart.products);
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    let priceList: any = [];
    const hrefOnCliK = () => {
        window.location.href = "/search";
    };

    const handleNumber = (number: any) => {
        setNumber(number+Math.random());
    };

    const removeFromCart = (element: any) => {
        dispatch(RemoveFromCart(element));
        Helper.removeFromLocalStorage("cart", element);
    };

    const renderProducts = products.map((item: any) => {
        priceList.push(item.price * item.number);
        const mapIndex = products.indexOf(item);
        return (
            <div
                className={`product-info row border border-dark ${
                    mapIndex === 0 ? "" : "mt-3 mt-lg-5"
                }`}
                key={mapIndex}
            >
                <div className="product-image col-4">
                    <img className="w-100" src={item.image} alt="" />
                </div>
                <div className="p-2 row col-8">
                    <div className="product-detail col-11">
                        <div className="name-price row align-items-center">
                            <div className="product-name col-8 text-uppercase">
                                {item.title}
                            </div>
                            <div className="product-price col-4">
                                {Helper.CountNumber([item.price])}đ
                            </div>
                        </div>
                        <div className="product-color text-uppercase">
                            {item.color}
                        </div>
                        <div className="product-size mt-3">
                            SIZE: {item.size}
                        </div>
                        <div className="product-status text-uppercase text-700">
                            low in stock
                        </div>
                        <div className="product-number mt-3">
                            <SelectNumber
                                number={item.number}
                                handleNumber={handleNumber}
                                type="cart"
                                element={item}
                            />
                        </div>
                    </div>
                    <div className="product-action d-flex flex-column align-items-end col-1">
                        <button
                            className="bg-white border-0"
                            onClick={() => {
                                removeFromCart(item);
                            }}
                            style={{ width: "30px", height: "30px" }}
                        >
                            <Icon>close</Icon>
                        </button>
                        <button
                            className="bg-white border-0 mt-3"
                            style={{ width: "30px", height: "30px" }}
                        >
                            <Favorite
                                state={item}
                                style={{ fontSize: "1.2em" }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        );
    });


    return (
        <main>
            <div className="row w-100 justify-content-center">
                <div className="content-container col-lg-11 row p-2 p-lg-5">
                    {products.length > 0 ? (
                        <div className="w-100">
                            <div className="row w-100">
                                <h2 className="text-uppercase text-700 text-large">
                                    your bag
                                </h2>
                            </div>
                            <div className="row">
                                <span className="text-uppercase pe-1">
                                    total
                                </span>{" "}
                                <span className="pe-1">
                                    ({products.length} items){" "}
                                </span>
                                <span className="text-700">
                                    {Helper.CountNumber(priceList)}đ
                                </span>
                            </div>
                            <div className="row w-100 justify-content-between border w-100">
                                <div className="col-md-8 pt-5 col-12">
                                    {renderProducts}
                                </div>
                                <div className="p-3 col-md-4 col-12 ps-md-5">
                                    <div>
                                        <ButtonActive
                                            text="checkout"
                                            action={() => {
                                                window.location.href =
                                                    "/delivery";
                                            }}
                                        />
                                    </div>
                                    <div className="order-summary p-3 border mt-4">
                                        <h3 className="text-uppercase text-700">
                                            order summary
                                        </h3>
                                        <div className="row w-100 justify-content-between mt-3">
                                            <div className="text-uppercase">
                                                {products.length} items
                                            </div>
                                            <div>
                                                {Helper.CountNumber(priceList)}đ
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-between mt-3">
                                            <div className="text-uppercase">
                                                delivery
                                            </div>
                                            <div className="text-uppercase">
                                                free
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-between mt-3">
                                            <div className="text-uppercase text-700">
                                                total
                                            </div>
                                            <div className="text-700">
                                                {Helper.CountNumber(priceList)}đ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row w-100 flex-column">
                            <h2 className="text-uppercase text-700 text-large">
                                your bag is empty
                            </h2>
                            <p>
                                Once you add something to your bag - it will
                                appear here. Ready to get started?
                            </p>
                            <ButtonActive
                                text="get started"
                                action={hrefOnCliK}
                            />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Cart;
