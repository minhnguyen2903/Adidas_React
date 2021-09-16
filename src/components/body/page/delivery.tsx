import { ButtonActive } from "../../GlobalComponent/button";
import { InputComponent } from "../../GlobalComponent/inputComponent";
import { CheckBoxNoAction } from "../../GlobalComponent/myCheckBox";
import Icon from "@material-ui/core/Icon";
import Payment from "../../../asserts/img/images/payment.png";
import Helper from "../../../helper/helper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SelectLocation } from "../../GlobalComponent/select-option";
import axios from "axios";
import aos from "aos";

interface provinces {
    id: number;
    _name: string;
    _code: string;
    createdAt: any;
    updatedAt: any;
}

interface districts {
    id: number;
    _name: string;
    _prefix: string;
    _province_id: number;
    createdAt: any;
    updatedAt: any;
}

interface wards {
    id: number;
    _name: string;
    _prefix: string;
    _province_id: number;
    _district_id: number;
    createdAt: any;
    updatedAt: any;
}

const initialProvince: provinces[] = [
    {
        id: 0,
        _name: "",
        _code: "",
        createdAt: "",
        updatedAt: "",
    },
];

const initialDistrict: districts[] = [
    {
        id: 0,
        _name: "",
        _prefix: "",
        _province_id: 0,
        createdAt: "",
        updatedAt: "",
    },
];

const initialWard: wards[] = [
    {
        id: 0,
        _name: "",
        _prefix: "",
        _province_id: 0,
        _district_id: 0,
        createdAt: "",
        updatedAt: "",
    },
];

const text = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const initialState = {
    orderId: `${text[Math.floor(Math.random() * 26)]}${
        text[Math.floor(Math.random() * 26)]
    }${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
    )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    province: "",
    district: "",
    ward: "",
};

const Delivery = () => {
    const products = useSelector((state: any) => state.cart.products);
    const [deliveryInfo, setDeliveryInfo] = useState(initialState);
    const [disabled, setDisabled] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [province, setProvince] = useState<provinces[]>(initialProvince);
    const [district, setDistrict] = useState<districts[]>(initialDistrict);
    const [ward, setWard] = useState<wards[]>(initialWard);
    const fetchLocation = () => {
        if (deliveryInfo.province !== "" && deliveryInfo.district === "") {
            const selectedProvince = province?.filter(
                (element: any) => element._name === deliveryInfo.province
            );
            if (selectedProvince) {
                axios
                    .get(
                        `${process.env.REACT_APP_SERVER_URL}/api/location/?province_id=${selectedProvince[0].id}`
                    )
                    .then((res: any) => {
                        setDistrict(res.data);
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });
            }
        }
        if (deliveryInfo.province !== "" && deliveryInfo.district !== "") {
            const selectedDistrict = district?.filter(
                (element: any) => element._name === deliveryInfo.district
            );
            if (selectedDistrict) {
                axios
                    .get(
                        `${process.env.REACT_APP_SERVER_URL}/api/location/?province_id=${selectedDistrict[0]._province_id}&district_id=${selectedDistrict[0].id}`
                    )
                    .then((res: any) => {
                        setWard(res.data);
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });
            }
        }
    };
    const totalPrice = () => {
        let price = 0;
        products.forEach((element: any) => {
            price += element.price * element.number;
        });
        return price;
    };

    const handleChange = (key: string, value: string | number) => {
        setDeliveryInfo({ ...deliveryInfo, [key]: value });
    };

    const submitDelivery = () => {
        setDisabled(true);
        const data = new FormData();
        const productId: any = [];
        products.forEach((element: any) => {
            productId.push(element.productId);
        });
        const number: any = [];
        products.forEach((element: any) => {
            number.push(element.number);
        });
        data.append("orderId", deliveryInfo.orderId);
        data.append("firstName", deliveryInfo.firstName);
        data.append("lastName", deliveryInfo.lastName);
        data.append("phoneNumber", deliveryInfo.phoneNumber);
        data.append("province", deliveryInfo.province);
        data.append("ward", deliveryInfo.ward);
        data.append("district", deliveryInfo.district);

        productId.forEach((element: any, index: number) => {
            data.append("productId", element);
            data.append("number", number[index]);
        });
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/api/delivery`, data)
            .then((res: any) => {
                setDisabled(false);
                setPopUp(true);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    const orderSuccess = () => {
        localStorage.removeItem("cart");
        window.location.href="/";
    }

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/api/location`)
            .then((res: any) => {
                setProvince(res.data);
            })
            .catch((err: any) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        setDeliveryInfo({ ...deliveryInfo, district: "", ward: "" });
        fetchLocation();
    }, [deliveryInfo.province]);
    useEffect(() => {
        setDeliveryInfo({ ...deliveryInfo, ward: "" });
        fetchLocation();
    }, [deliveryInfo.district]);
    useEffect(() => {
        console.log(deliveryInfo);
        aos.init();
    }, [deliveryInfo]);

    return (
        <div className="row justify-content-center">
            {popUp?<div
                className=" position-fixed index-999 d-flex bg-transparent justify-content-center align-items-center"
                style={{ width: "100vw", height: "100vh", top: 0 }}
                onClick={orderSuccess}
            >
                <div
                    data-aos="fade-up"
                    className="pop-up bg-white text-capitalize p-5 border w-auto rounded-3 text-700 text-title"
                >
                    order success
                </div>
            </div>: null}
            <div className="content-container col-lg-10 row p-2 p-lg-5">
                <div className="col-md-7">
                    <h3 className="text-uppercase text-700">
                        shipping address
                    </h3>
                    <div className="row justify-content-between">
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent
                                label="First Name"
                                name="firstName"
                                handleChange={handleChange}
                            />
                        </div>
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent
                                label="Last Name"
                                name="lastName"
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div
                            className="col-sm-4 pe-sm-2"
                            style={{ height: "fit-content" }}
                        >
                            <SelectLocation
                                values={province}
                                current={deliveryInfo.province}
                                name="province"
                                event={handleChange}
                            />
                        </div>
                        <div
                            className="col-sm-4 ps-sm-2 pe-sm-2"
                            style={{ height: "fit-content" }}
                        >
                            <SelectLocation
                                values={district}
                                current={deliveryInfo.district}
                                name="district"
                                event={handleChange}
                            />
                        </div>
                        <div
                            className="col-sm-4 ps-sm-2"
                            style={{ height: "fit-content" }}
                        >
                            <SelectLocation
                                values={ward}
                                current={deliveryInfo.ward}
                                name="ward"
                                event={handleChange}
                            />
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
                            <InputComponent label="Postal Code" />
                        </div>
                        <div style={{ width: "49%", height: "fit-content" }}>
                            <InputComponent
                                label="Phone Number"
                                name="phoneNumber"
                                handleChange={handleChange}
                            />
                        </div>
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
                        <ButtonActive
                            text="REVIEW & PAY"
                            action={submitDelivery}
                            disabled={disabled}
                        />
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
                            <p>
                                {totalPrice() > 3000000
                                    ? "FREE"
                                    : `${Helper.CountNumber([30000])}đ`}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="text-uppercase text-700">total</p>
                            <p>{Helper.CountNumber([totalPrice()])}đ</p>
                        </div>
                        <p>
                            (inclusive of tax{" "}
                            {totalPrice() > 3000000
                                ? Helper.CountNumber([totalPrice()])
                                : Helper.CountNumber([totalPrice() + 30000])}
                            đ)
                        </p>
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
                        <div style={{ zoom: "75%" }}>
                            {products.map((item: any, mapIndex: number) => {
                                return (
                                    <div
                                        key={mapIndex}
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
                                            <div className="product-detail">
                                                <div className="product-name text-uppercase">
                                                    {item.title}
                                                </div>
                                                <div className="product-color text-uppercase">
                                                    {item.color}
                                                </div>
                                                <div className="product-size">
                                                    Size: {item.size}
                                                </div>
                                                <div className="product-size">
                                                    Number: {item.number}
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
