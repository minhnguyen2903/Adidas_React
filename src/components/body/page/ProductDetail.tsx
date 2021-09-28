import Icon from "@material-ui/core/Icon";
import { ButtonActive } from "../../GlobalComponent/button";
import PopUp from "../popUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import Magnifier from "react-magnifier";
import { AddToCart } from "../../../redux/action/action";
import Helper from "../../../helper/helper";
import { useState, useEffect } from "react";
import { Favorite } from "../../GlobalComponent/favorite";
import { GetData } from "../../../axiosRequest/request";

interface RouteParams {
    productId: string;
}

const ProductInfo = (props: any) => {
    const { productId } = useParams<RouteParams>();
    const [alert, setAlert] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [productDetail, setProductDetail] = useState({
        productId: "FY3967",
        title: "adidas 4DFWD Shoes",
        price: 5500000,
        image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f662582b6ef04fb9bd8fad5600fe1c0e_9366/adidas-4dfwd-shoes.jpg",
        color: "Cloud White / Core Black / Solar Red",
        subtitle: "Men Running",
        badge_text: "",
        badge_style: "new",
        hoverImage:
            "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d63c7ec33434598b678ad5600fe1817_9366/adidas-4dfwd-shoes.jpg",
        size: "",
        number: 0,
    });

    const dispatch = useDispatch();
    const sizeList:any = [3, 4, 5, 6, 7, 8, 9, 10];
    const [size, setSize] = useState("");

    const filterAction = (productDetail: any) => {
        const localItem = JSON.parse(String(localStorage.getItem("cart")));
        if (localItem !== null) {
            if (localItem.length > 1) {
                const check = localItem.filter(
                    (item: any) => item.productId === productDetail.productId
                );
                if (check.length > 0) {
                    return true;
                }
                if (check.length === 0) {
                    return false;
                }
            } else {
                if (localItem.productId === productDetail.productId) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    };

    const saveToLocalStorage = (key: any, obj: any) => {
        const getLocalStorage = JSON.parse(String(localStorage.getItem(key)));
        if (getLocalStorage !== null) {
            if (getLocalStorage.length > 0) {
                localStorage.setItem(
                    key,
                    JSON.stringify([...getLocalStorage, obj])
                );
            } else {
                localStorage.setItem(
                    key,
                    JSON.stringify([getLocalStorage, obj])
                );
            }
        } else {
            localStorage.setItem(key, JSON.stringify(obj));
        }
    };

    const addToCart = () => {
        if (filterAction(productDetail) === false) {
            if (size !== "") {
                setAlert(false);
                productDetail.number = 1;
                productDetail.size = size;
                saveToLocalStorage("cart", productDetail);
                dispatch(AddToCart(productDetail));
                setPopUp(true);
            } else {
                setAlert(true);
            }
        }
    };
    const renderSize = sizeList.map((element: string, index: number) => {
        return (
            <div
                className={`size cursor-pointer ${
                    element === size ? "size-selected" : ""
                }`}
                onClick={() => {
                    setSize(element);
                }}
                key={index}
            >
                {element}
            </div>
        );
    });

    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
        GetData(
            `${process.env.REACT_APP_SERVER_URL}/api/detail/${productId}`
        ).then((res: any) => {
            setProductDetail(res[0]);
        });
    }, []);

    return (
        <div className="content-container pb-5 row position-relative">
            {popUp ? (
                <PopUp detail={productDetail} setPopUp={setPopUp} />
            ) : null}
            <div className="col-lg-8 border-right position-relative">
                <div className="bread-crumb position-absolute ps-3 pt-2">
                    <Breadcrumb style={{ background: "#ebedee !important" }}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/search">Search</Breadcrumb.Item>
                        <Breadcrumb.Item href={`/${productId}`} active>
                            {productId}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="product-detail w-100">
                    <div
                        className="product-image w-100 d-flex align-items-center justify-content-center"
                        style={{ background: "#eceff1", height: "600px" }}
                    >
                        <Magnifier
                            src={productDetail.image}
                            width="400px"
                            mgWidth={100}
                            mgHeight={100}
                        />
                    </div>
                    <div className="row rest-color p-4 justify-content-center align-items-center">
                        <div
                            className="rest-color-text text-700"
                            style={{ width: "90px" }}
                        >
                            2 colors available
                        </div>
                        <div className="rest-color-image">
                            <img
                                src={productDetail.image}
                                alt=""
                                className="w-100"
                            />
                        </div>
                        <div className="rest-color-image">
                            <img
                                className="w-100"
                                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/8b05bce744e54840b16ead1d00b48bfe_9366/Adizero_Boston_10_Shoes_Black_H67513_01_standard.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pe-5 ps-5 pt-4 pb-4 position-relative d-lg-none">
                    <div className="position-sticky" style={{ top: "1em" }}>
                        <div className="product-category text-400">
                            {productDetail.subtitle}
                        </div>
                        <h2 className="product-name font-italic text-uppercase">
                            {productDetail.title}
                        </h2>
                        <div className="product-color">
                            <p>{productDetail.color}</p>
                        </div>
                        <div className="product-price">
                            <span className="text-700 text-medium">
                                {Helper.CountNumber([productDetail.price])}₫
                            </span>
                        </div>
                        <div className="product-size mt-3">
                            <div className="select-size text-700 mb-2">
                                Select size
                            </div>
                            <div className="row">{renderSize}</div>
                            <p className="left-in-stoke text-danger mt-3">
                                {alert
                                    ? "Please select size"
                                    : " Only 5 left in stoke"}
                            </p>
                            <div className="row justify-content-between">
                                <div className="w-auto">
                                    <span className="d-flex align-items-center cursor-pointer bg-hover-dark text-hover-underline">
                                        <Icon className="me-2">straighten</Icon>{" "}
                                        Size guidance
                                    </span>
                                </div>
                                <div className="w-auto">
                                    <span className="d-flex justify-content-end align-items-center cursor-pointer bg-hover-dark text-hover-underline">
                                        <Icon className="me-2">
                                            mail_outline
                                        </Icon>
                                        Size out of stock?
                                    </span>
                                </div>
                            </div>
                            <div className="row mt-5 justify-content-between">
                                <div className="w-auto">
                                    <ButtonActive
                                        text="add to bag"
                                        action={addToCart}
                                    />
                                </div>
                                <div
                                    className="border border-dark d-flex align-items-center justify-content-center"
                                    style={{ width: "50px", height: "50px" }}
                                >
                                    <Favorite
                                        state={productDetail}
                                        style={{ fontSize: "2em" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail-description mt-3 border-top border-bottom">
                    <div className="detail-nav row justify-content-center">
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            gallery
                        </div>
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            <a href="#hightlights">hightlights</a>
                        </div>
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            <a href="#description">description</a>
                        </div>
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            details
                        </div>
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            complete the look
                        </div>
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            how to style
                        </div>
                        <div className="detail-nav-item text-uppercase p-2 me-3 letter-spacing w-auto">
                            reviews
                        </div>
                    </div>
                </div>
                <div id="hightlights" className="p-5" data-aos="fade-up">
                    <h2 className="text-uppercase text-title text-700">
                        hightlights
                    </h2>
                    <div className="row">
                        <div className="col-12 pe-md-2 pe-sm-2  col-md-3 py-3 col-sm-6">
                            <div className="hightlight-img">
                                <img
                                    className="w-100"
                                    src={productDetail.image}
                                    alt=""
                                />
                            </div>
                            <div
                                className="hightlight-title text-uppercase text-700 pt-2 pb-3"
                                style={{ fontSize: "1.2em" }}
                            >
                                from problem to performance
                            </div>
                            <div className="hightlight-description">
                                This product is made with Primegreen, a series
                                of high-performance recycled materials. 50% of
                                the upper is recycled content. No virgin
                                polyester.
                            </div>
                        </div>
                        <div className="col-12 pe-md-2 ps-md-2 ps-sm-2 col-md-3 py-3 col-sm-6">
                            <div className="hightlight-img">
                                <img
                                    className="w-100"
                                    src={productDetail.image}
                                    alt=""
                                />
                            </div>
                            <div
                                className="hightlight-title text-uppercase text-700 pt-2 pb-3"
                                style={{ fontSize: "1.2em" }}
                            >
                                DYNAMIC HYBRID MIDSOLE
                            </div>
                            <div className="hightlight-description">
                                The midsole combines the maximum energy return
                                of Lightstrike Pro with the lightweight,
                                explosive feel of Lightstrike.
                            </div>
                        </div>
                        <div className="col-12 pe-md-2 ps-md-2 pe-sm-2  col-md-3 py-3 col-sm-6">
                            <div className="hightlight-img">
                                <img
                                    className="w-100"
                                    src={productDetail.image}
                                    alt=""
                                />
                            </div>
                            <div
                                className="hightlight-title text-uppercase text-700 pt-2 pb-3"
                                style={{ fontSize: "1.2em" }}
                            >
                                ULTRA-LIGHT MESH UPPER
                            </div>
                            <div className="hightlight-description">
                                The upper offers flexibility and support, and
                                it's paired with an internal sock to improve the
                                fit.
                            </div>
                        </div>
                        <div className="col-12 ps-md-2  col-md-3 ps-sm-2 py-3 col-sm-6">
                            <div className="hightlight-img">
                                <img
                                    className="w-100"
                                    src={productDetail.image}
                                    alt=""
                                />
                            </div>
                            <div
                                className="hightlight-title text-uppercase text-700 pt-2 pb-3"
                                style={{ fontSize: "1.2em" }}
                            >
                                ADIZERO
                            </div>
                            <div className="hightlight-description">
                                Adizero is tuned for speed, allowing athletes to
                                push past what was possible.
                            </div>
                        </div>
                    </div>
                </div>
                <div id="description" className="row p-5" data-aos="fade-up">
                    <div className="col-md-6 d-flex flex-column justify-content-center pe-5">
                        <h2 className="text-800 text-title mt-1 text-uppercase">
                            {productDetail.title}
                        </h2>
                        <h3 className="font-italic mt-1">
                            LIGHTWEIGHT SHOES FOR A RACE-DAY FEEL IN TRAINING
                        </h3>
                        <p className="mt-4">
                            For fitness. For clarity. For your next PR. No
                            matter the reason you run, the Adizero Boston 10
                            Shoes help you chase the fastest version of
                            yourself. With more cushioning than the average
                            marathon shoe, the midsole mixes Lightstrike with
                            Lightstrike Pro. Throw in the snappy feel of the
                            ENERGYRODS, and the result is an ultra-responsive
                            ride that delivers race-day speed every time you
                            lace up.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="w-100"
                            src={productDetail.image}
                            alt=""
                        />
                    </div>
                </div>
                <div id="specification" className=" p-5" data-aos="fade-up">
                    <h2 className="text-uppercase text-800">specification</h2>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li className="mb-3">Regular fit</li>
                                <li className="mb-3">Lace closure</li>
                                <li className="mb-3">Lightweight mesh upper</li>
                                <li className="mb-3">Heel padding</li>
                                <li className="mb-3">
                                    Lightstrike and Lightstrike Pro cushioning
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li className="mb-3">
                                    Continental™ Rubber outsole
                                </li>
                                <li className="mb-3">Primegreen</li>
                                <li className="mb-3">
                                    Color: Core Black / Cloud White / Gold
                                    Metallic
                                </li>
                                <li className="mb-3">Product code: H67513</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 pe-5 ps-5 pt-4 pb-4 position-relative d-none d-lg-block">
                <div className="position-sticky" style={{ top: "1em" }}>
                    <div className="product-category text-400">
                        {productDetail.subtitle}
                    </div>
                    <h2 className="product-name font-italic text-uppercase">
                        {productDetail.title}
                    </h2>
                    <div className="product-color">
                        <p>{productDetail.color}</p>
                    </div>
                    <div className="product-price">
                        <span className="text-700 text-medium">
                            {Helper.CountNumber([productDetail.price])}₫
                        </span>
                    </div>
                    <div className="product-size mt-3">
                        <div className="select-size text-700 mb-2">
                            Select size
                        </div>
                        <div className="row">{renderSize}</div>
                        <p className="left-in-stoke text-danger mt-3">
                            {alert
                                ? "Please select size"
                                : " Only 5 left in stoke"}
                        </p>
                        <div className="row justify-content-between">
                            <div className="w-auto">
                                <span className="d-flex align-items-center cursor-pointer bg-hover-dark text-hover-underline">
                                    <Icon className="me-2">straighten</Icon>{" "}
                                    Size guidance
                                </span>
                            </div>
                            <div className="w-auto">
                                <span className="d-flex justify-content-end align-items-center cursor-pointer bg-hover-dark text-hover-underline">
                                    <Icon className="me-2">mail_outline</Icon>
                                    Size out of stock?
                                </span>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-between">
                            <div className="w-auto">
                                <ButtonActive
                                    text="add to bag"
                                    action={addToCart}
                                />
                            </div>
                            <div
                                className="border border-dark d-flex align-items-center justify-content-center"
                                style={{ width: "50px", height: "50px" }}
                            >
                                <Favorite
                                    state={productDetail}
                                    style={{ fontSize: "2em" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
