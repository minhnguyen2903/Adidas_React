import styles from "../../asserts/style/custom.module.css";
import { Favorite } from "./favorite";
import { Link } from "react-router-dom";
import Helper from "../../helper/helper";
import { useEffect, useRef, useState } from "react";

export const VideoCard = (props: any) => {
    return (
        <div className="card-padding cursor-pointer">
            <div className="card-body p-0">
                <div className="card-video d-flex">
                    {props.video ? (
                        <video
                            src={props.video}
                            loop
                            autoPlay
                            playsInline
                            className="w-100"
                        />
                    ) : (
                        <img src={props.imgSrc} className="w-100" alt="" />
                    )}
                </div>
                <div className="card-content">
                    <h3
                        className="text-uppercase text-700 text-regular overflow-hidden mt-2"
                        style={{ height: "40px" }}
                    >
                        {props.productName}
                    </h3>
                    <p className="overflow-hidden" style={{ height: "72px" }}>
                        {props.description}
                    </p>
                    {props.children ? (
                        props.children
                    ) : (
                        <button
                            className={`${styles.button_hover} border-0 bg-white text-dark`}
                        >
                            <span className="border-bottom text-uppsecase text-600 text-uppercase text-small letter-spacing">
                                shop now
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export const CardProduct = (props: any) => {
    const divRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [divHeight, setDivHeight] = useState(divRef.current?.offsetWidth);
    const handleImageLoaded = () => {
        setIsLoaded(true);
    };
    useEffect(() => {
        setDivHeight(divRef.current?.offsetWidth);
    }, []);
    return (
        <div className="card-padding cursor-pointer position-relative w-100">
            {props.wishListShow ? (
                <div
                    className="wish-list position-absolute"
                    style={{ top: "1em", right: "1em" }}
                >
                    <Favorite
                        state={props.state}
                        style={{ fontSize: "1.2em", opacity: "0.6" }}
                    />
                </div>
            ) : (
                ""
            )}
            <Link to={`/search/${props.state.productId}`}>
                <div className={`card-body p-0  ${styles.card_hover}`}>
                    <div
                        ref={divRef}
                        className="card-product position-relative"
                    >
                        <div
                            className="w-100 loading-card"
                            style={{
                                height: `${
                                    isLoaded ? `auto` : `${divHeight}px`
                                }`,
                            }}
                        >
                            <img
                                ref={imgRef}
                                src={props.state.image}
                                className="w-100"
                                alt=""
                                onLoad={handleImageLoaded}
                            />
                        </div>
                        <div className={styles.card_hover_price}>
                            <span className="bg-white p-1">
                                {Helper.CountNumber([props.state.price])}đ
                            </span>
                        </div>
                    </div>
                    <div className="card-content p-2 pb-4">
                        <div
                            className="product-name text-capitalize mt-2 overflow-hidden"
                            style={{ height: "1.5em" }}
                        >
                            {props.state.title}
                        </div>
                        <p className="p-0 m-0" style={{ height: "1.5em" }}>
                            {props.state.category}
                        </p>
                        <p
                            className="text-small p-0 m-0"
                            style={{ height: "1.5em" }}
                        >
                            New
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};
