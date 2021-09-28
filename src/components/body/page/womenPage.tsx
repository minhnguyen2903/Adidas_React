import Banner from "../banner";
import { Slider, ProductSlide } from "../../GlobalComponent/slider";
import { VideoCard } from "../../GlobalComponent/Card";
import * as ButtonComponent from "../../GlobalComponent/button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WomenPage = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const newProducts = products.filter(
        (item: any) => item.subtitle === "Men Running"
    );
    return (
        <main className="pb-5">
            <div className="main-content">
                <Banner
                    imgLg="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/XCAT-SS21-Loungewear-Launch-HP-Large-MH-D_tcm212-729750.jpg"
                    imgMd="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/XCAT-SS21-Loungewear-Launch-HP-Large-MH-T_tcm212-729751.jpg"
                    imgSm="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/XCAT-SS21-Loungewear-Launch-HP-Large-MH-T_tcm212-729751.jpg"
                    title="the men x speedlow"
                    description="Available exclusively at adidas and selected partners."
                    button="exclusive here"
                />
                <Banner
                    imgLg="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/specialist_sports-ss21-olympics-tokyo_collection-sustain-glp_m-1-mh-d_tcm212-692839.jpg"
                    imgMd="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/specialist_sports-ss21-olympics-tokyo_collection-sustain-glp_m-1-mh-t_tcm212-692836.jpg"
                    imgSm="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/specialist_sports-ss21-olympics-tokyo_collection-sustain-glp_m-1-mh-m_tcm212-692828.jpg"
                    title="SEE SPORT RISE"
                    description="Multi-sport performance wear, powered by innovation. Aim higher, together."
                    button="shop footwear"
                />
                <div className="row w-100 justify-content-center">
                    <div className="content-container col-lg-11 row p-2 p-lg-5">
                        <div className="row w-100 justify-content-center mt-3 mb-3">
                            <h2 className="text-uppercase text-700 text-title">
                                women
                            </h2>
                        </div>
                        <div className="row w-100 justify-content-center">
                            <div
                                className="row w-100 justify-content-center p-2 ps-4 pe-4"
                                style={{ background: "#ebedee" }}
                            >
                                <Link
                                    to="/"
                                    className="w-auto text-uppercase p-1 ps-2 pe-2 m-2 text-medium"
                                >
                                    home
                                </Link>
                                <Link
                                    to="/"
                                    className="w-auto text-uppercase p-1 ps-2 pe-2 m-2 text-medium"
                                >
                                    shoes
                                </Link>
                                <Link
                                    to="/"
                                    className="w-auto text-uppercase p-1 ps-2 pe-2 m-2 text-medium"
                                >
                                    clothing
                                </Link>
                                <Link
                                    to="/"
                                    className="w-auto text-uppercase p-1 ps-2 pe-2 m-2 text-medium"
                                >
                                    accessories
                                </Link>
                                <Link
                                    to="/"
                                    className="w-auto text-uppercase p-1 ps-2 pe-2 m-2 text-medium text-nowrap"
                                >
                                    new arrivals
                                </Link>
                                <Link
                                    to="/"
                                    className="w-auto text-uppercase p-1 ps-2 pe-2 m-2 text-medium text-nowrap"
                                >
                                    view all products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider headerContent="what's hot" />
                <div className="row w-100 justify-content-center">
                    <div className="content-container col-lg-11 row p-2 p-lg-5">
                        <div className="col-md-6 p-2">
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/football-ss21-euro-nonfed-away-launch-GLPm-tc-d_tcm212-644400.jpg"
                                productName="RUN WITH SUPERNOVA+"
                                description="Everyone has their ritual. Ours just needs more carbs. Trust your run. Every time."
                            >
                                <ButtonComponent.ButtonHover text="shop now" />
                            </VideoCard>
                        </div>
                        <div className="col-md-6 p-2">
                            <VideoCard
                                video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/training-fw21-stayinplay-glp-sustain-2-teaser_card-d_au4dwf.mp4"
                                productName="adidas Originals by OAMC"
                                description="Featuring a new PRIMEGREEN upper."
                            >
                                <ButtonComponent.ButtonHover text="shop now" />
                            </VideoCard>
                        </div>
                    </div>
                </div>
                <ProductSlide
                    headerContent="new arrivals"
                    state={newProducts}
                />
            </div>
        </main>
    );
};

export default WomenPage;
