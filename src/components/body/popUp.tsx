import { ButtonActive, ButtonHover } from "../GlobalComponent/button";
import Icon from "@material-ui/core/Icon";
import Helper from "../../helper/helper";
import { useSelector } from "react-redux";
const PopUp = (props: any) => {
    const products = useSelector((state: any) => state.cart.products);
    const handlePopUp = () => {
        props.setPopUp(false);
    };
    const totalPrice = () => {
        let price = 0;
        products.forEach((element: any) => {
            price += element.price;
        });
        return price;
    };
    return (
        <div
            className="row index-999 bg-dark-gradient align-content-center justify-content-center px-5"
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: "0",
            }}
        >
            <div className="bg-white index-999 col-7 p-3 w-100 position-relative border border-dark">
                <div
                    className="button-active-scale bg-white border border-dark cursor-pointer d-flex align-items-center justify-content-center position-absolute"
                    style={{
                        height: "40px",
                        width: "40px",
                        right: "-20px",
                        top: "-20px",
                    }}
                    onClick={handlePopUp}
                >
                    <Icon>close</Icon>
                </div>
                <h2 className="text-700 ps-3 mb-3">
                    SUCCESSFULLY ADDED TO BAG!
                </h2>
                <div className="row w-100">
                    <div className="row w-100">
                        <div className="col-sm-6 p-3 row">
                            <div className="col-md-6">
                                <img
                                    src={props.detail.image}
                                    alt="img"
                                    width="148"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="text-uppercase">
                                    {props.detail.title}
                                </div>
                                <div className="mt-3">
                                    <span className="text-700">
                                        {Helper.CountNumber([
                                            props.detail.price,
                                        ])}
                                    </span>
                                    đ
                                </div>
                                <div>Colour: {props.detail.color}</div>
                                <div>Size: {props.detail.size}</div>
                                <div>Quanlity: 1</div>
                            </div>
                        </div>
                        <div className="col-sm-6 p-3 border-start border-dark">
                            <div>
                                <div className="text-uppercase text-700">
                                    your bag
                                </div>
                                <div>
                                    {products.length}{" "}
                                    {products.length > 1 ? "item" : "items"}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span className="text-capitalize">
                                        total product cost
                                    </span>
                                    <span>
                                        {Helper.CountNumber([totalPrice()])}đ
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-capitalize">
                                        total delivery cost
                                    </span>
                                    <span>FREE</span>
                                </div>
                                <div className="d-flex justify-content-between border-top pt-2">
                                    <span className="text-700">Total</span>
                                    <span className="text-700">
                                        {Helper.CountNumber([totalPrice()])}đ
                                    </span>
                                </div>
                                (inclusive of tax)
                            </div>
                            <div>
                                <ButtonActive
                                    text="VIEW BAG"
                                    style={{ marginTop: "1em", width: "100%" }}
                                    action={() => {
                                        window.location.href = "/cart";
                                    }}
                                />
                                <ButtonHover
                                    text="CHECKOUT"
                                    action={() => {
                                        window.location.href = "/delivery";
                                    }}
                                    style={{ marginTop: "1em", width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
