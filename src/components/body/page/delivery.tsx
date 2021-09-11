import { ButtonActive } from "../../GlobalComponent/button";
import { InputComponent } from "../../GlobalComponent/inputComponent";
import { CheckBoxNoAction } from "../../GlobalComponent/myCheckBox";
import Icon from "@material-ui/core/Icon";
import Payment from "../../../asserts/img/images/payment.png";
import Helper from "../../../helper/helper";
import { useSelector } from "react-redux";

const Delivery = () => {
    const products = useSelector((state: any) => state.cart.products);
    const totalPrice = () => {
        let price = 0;
        products.forEach((element: any) => {
            price += element.price
        })
        return price
    }
    const Province = [
        "Ho Chi Minh",
        "An Giang",
        "Ba Ria - Vung Tau",
        "Bac Giang",
        "Bac Kan",
        "Bac Lieu",
        "Bac Ninh",
        "Ben Tre",
        "Binh Dinh",
        "Binh Duong",
        "Binh Phuoc",
        "Binh Thuan",
        "Ca Mau",
        "Can Tho",
        "Cao Bang",
        "Da Nang",
        "Dak Lak",
        "Dak Nong",
        "Dien Bien",
        "Dong Nai",
        "Dong Thap",
        "Gia Lai",
        "Ha Giang",
        "Ha Nam",
        "Ha Noi",
        "Ha Tinh",
        "Hai Duong",
        "Hai Phong",
        "Hau Giang",
        "Hoa Binh",
        "Hung Yen",
        "Khanh Hoa",
        "Kien Giang",
        "Kon Tum",
        "Lai Chau",
        "Lam Dong",
        "Lang Son",
        "Lao Cai",
        "Long An",
        "Nam Dinh",
        "Nghe An",
        "Ninh Binh",
        "Ninh Thuan",
        "Phu Tho",
        "Phu Yen",
        "Quang Binh",
        "Quang Nam",
        "Quang Ngai",
        "Quang Ninh",
        "Quang Tri",
        "Soc Trang",
        "Son La",
        "Tay Ninh",
        "Thai Binh",
        "Thai Nguyen",
        "Thanh Hoa",
        "Thua Thien Hue",
        "Tien Giang",
        "Tra Vinh",
        "Tuyen Quang",
        "Vinh Long",
        "Vinh Phuc",
        "Yen Bai",
    ];
    return (
        <div className="row justify-content-center">
            <div className="content-container col-lg-10 row p-2 p-lg-5">
                <div className="col-md-7">
                    <h3 className="text-uppercase text-700">
                        shipping address
                    </h3>
                    <div className="row justify-content-between">
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent label="First Name" />
                        </div>
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent label="Last Name" />
                        </div>
                    </div>
                    <div>
                        <InputComponent label="Street Number/Street Name" />
                    </div>
                    <div>
                        <InputComponent label="Building Name/Floor Etc" />
                    </div>
                    <div className="row justify-content-between">
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent label="Province" />
                        </div>
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent label="District" />
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent label="Ward" />
                        </div>
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent label="Postal Code" />
                        </div>
                    </div>
                    <div className="col-6">
                        <InputComponent label="Phone Number" />
                    </div>
                    <div className="mt-3">
                        <div className="mt-5">
                            <h3 className="text-uppercase text-700">
                                ARRIVING
                            </h3>
                            <div className="row p-3 border mb-3 mt-3">
                                <h4 className="text-medium w-100 text-700">
                                    STANDARD DELIVERY
                                </h4>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <Icon>local_shipping</Icon>
                                    </div>
                                    <div style={{ width: "calc(100% - 45px)" }}>
                                        DHL (Due to the impact of Covid-19,
                                        please expect that delivery could be
                                        delayed or unavailable in some regions
                                        yet. We apologise for any inconvenience
                                        caused!)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row w-100 m-0 mt-2">
                            <CheckBoxNoAction />
                            <p
                                className="m-0 d-flex align-items-center"
                                style={{
                                    width: "calc(100% - 60px)",
                                }}
                            >
                                Save address and contact information for future
                                orders
                            </p>
                        </div>
                        <div className="row w-100 m-0 mt-2">
                            <CheckBoxNoAction />
                            <p
                                className="m-0  d-flex align-items-center"
                                style={{
                                    width: "calc(100% - 60px)",
                                }}
                            >
                                My billing and delivery information are the
                                same.
                            </p>
                        </div>
                        <div className="row w-100 m-0 mt-2">
                            <CheckBoxNoAction />
                            <p
                                className="m-0  d-flex align-items-center"
                                style={{
                                    width: "calc(100% - 60px)",
                                }}
                            >
                                Yes, I am over 15 years old
                            </p>
                        </div>
                        <div className="row w-100 m-0 mt-2">
                            <CheckBoxNoAction />
                            <p
                                className="m-0  d-flex align-items-center"
                                style={{
                                    width: "calc(100% - 60px)",
                                }}
                            >
                                I hereby consent to the use of my personal data
                                for marketing and promotional purposes as set
                                out in the adidas Privacy Notice.
                            </p>
                        </div>
                        <div className="row w-100 m-0 mt-2">
                            <CheckBoxNoAction />
                            <p
                                className="m-0  d-flex align-items-center"
                                style={{
                                    width: "calc(100% - 60px)",
                                }}
                            >
                                I have read, understood and accepted the Privacy
                                Notice and Terms and Conditions..
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ButtonActive text="REVIEW & PAY" />
                    </div>
                </div>
                <div className="col-md-5 d-none d-md-block ps-3 pe-3">
                    <div className="border p-3">
                        <h3 className="text-uppercase text-700 mb-3">
                            order sumary
                        </h3>
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase">4 items</p>
                            <p>{Helper.CountNumber([totalPrice()])}đ</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase">delivery</p>
                            <p>FREE</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase text-700">total</p>
                            <p>{Helper.CountNumber([totalPrice()])}đ</p>
                        </div>
                        <p>(inclusive of tax 1,254,546₫)</p>
                    </div>
                    <div>
                        <InputComponent label="Enter Your Promo Code" />
                    </div>
                    <div>
                        <h4 className="text-regular text-700">
                            ACCEPTED PAYMENT METHODS
                        </h4>
                        <img src={Payment} alt="img" />
                    </div>
                    <div className="border p-3">
                        <h3 className="text-700 mb-3 text-medium">
                            ORDER DETAILS
                        </h3>
                        <div  style={{ zoom: "75%" }}>
                        {products.map((item: any, mapIndex: number) => {
                            return (
                                <div
                                    className={`product-info row ${
                                        mapIndex === 0 ? "" : "mt-2"
                                    }`}
                                >
                                    <div className="product-image col-3">
                                        <img
                                            className="w-100"
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="p-2 row col-9">
                                        <div className="product-detail col-11">
                                            <div className="product-name col-8 text-uppercase">
                                                {item.title}
                                            </div>
                                            <div className="product-color text-uppercase">
                                                {item.color}
                                            </div>
                                            <div className="product-size mt-3">
                                                SIZE: {item.size}
                                            </div>
                                            <div className="product-price">
                                                {Helper.CountNumber([
                                                    item.price,
                                                ])}
                                                đ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
