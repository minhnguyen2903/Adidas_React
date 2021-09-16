import * as ButtonComponent from "../GlobalComponent/button";

const Banner = (props: any) => {
    return (
        <div
            className="row w-100"
            style={{ minHeight: "calc(100vh - 300px)" }}
        >
            <div className="row bannerr position-relative align-items-center justify-content-center w-100">
                <div className="banner-image h-100 d-flex position-relative w-100 overflow-hidden">
                    <div className="col">
                        <img
                            src={props.imgLg}
                            alt=""
                            className="d-none d-lg-block w-100 h-100"
                        />
                        <img
                            src={props.imgMd}
                            alt=""
                            className="d-none d-md-block d-lg-none w-100 h-100"
                        />
                        <img
                            src={props.imgSm}
                            alt=""
                            className="d-md-none w-100 h-100"
                        />
                    </div>
                </div>
                <div className="content-container col-lg-11 p-4 p-lg-5 py-5 h-100 position-absolute t-0">
                    <div className=" col-md-6 col-lg-5 banner-content h-100 d-flex flex-column justify-content-lg-center justify-content-end">
                        {props.title ? (
                            <h2
                                className="text-large text-700 text-uppercase"
                                style={{ lineHeight: "38px" }}
                            >
                                {props.title}
                            </h2>
                        ) : (
                            ""
                        )}
                        {props.description ? (
                            <p className="text-medium">{props.description}</p>
                        ) : (
                            ""
                        )}
                        {props.button ? (
                            <ButtonComponent.ButtonActive
                                text={props.button}
                                action={props.action}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
