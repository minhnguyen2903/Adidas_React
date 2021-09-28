import Banner from "../banner";
import PopularItem from "../popularItem";
import { Slider, ProductSlide } from "../../GlobalComponent/slider";
import { VideoCard } from "../../GlobalComponent/Card";
import * as ButtonComponent from "../../GlobalComponent/button";
import { useSelector } from "react-redux";

const BodyComponent = () => {
    const products = useSelector((state: any) => state.allProducts.products);
    const newProducts = products.filter(
        (item: any) => item.badgeText === "New"
    );
    return (
        <main className="pb-5">
            <div className="main-content">
                <Banner
                    imgLg={`${process.env.REACT_APP_SERVER_URL}/YEEZY_BOOST_700_MNVN_BLUE_TINT_HP_DT_tcm212-711640.jpg`}
                    imgMd={`${process.env.REACT_APP_SERVER_URL}/YEEZY_BOOST_700_MNVN_BLUE_TINT_HP_T_tcm212-711641.jpg`}
                    imgSm={`${process.env.REACT_APP_SERVER_URL}/YEEZY_BOOST_700_MNVN_BLUE_TINT_HP_M_tcm212-711639.jpg`}
                    title="yeezy boost 700 mnvn blue tint"
                    description="COMING SOON 5 JULY"
                    button="preview now"
                />
                <Banner
                    imgLg={`${process.env.REACT_APP_SERVER_URL}/vn-3sd-sale-mh-d_tcm212-702997.jpg`}
                    imgMd={`${process.env.REACT_APP_SERVER_URL}/vn-3sd-sale-mh-m_tcm212-702998.jpg`}
                    imgSm={`${process.env.REACT_APP_SERVER_URL}/vn-3sd-sale-mh-m_tcm212-702998.jpg`}
                    title=" "
                    description="Discount applied at cart. Exclusions apply. Terms and conditions apply."
                    button="shop now"
                    action={() => {window.location.href = "/search"}}
                />
                <PopularItem />
                <Slider headerContent="what's hot" />
                <ProductSlide
                    headerContent="new arrivals"
                    state={newProducts}
                />
                <div className="row w-100 justify-content-center">
                    <div className="content-container col-lg-11 row p-2 p-lg-5">
                        <div className="col-md-6 p-2">
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/running-ss21-supernova-launch-glp-m-teaser-large-d_tcm212-630153.jpg"
                                productName="RUN WITH SUPERNOVA+"
                                description="Everyone has their ritual. Ours just needs more carbs. Trust your run. Every time."
                            >
                                <ButtonComponent.ButtonHover text="shop now" />
                            </VideoCard>
                        </div>
                        <div className="col-md-6 p-2">
                            <VideoCard
                                video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/QuiccsXHarden-v-d_y14zm6.mp4"
                                productName="stan smith, forever"
                                description="Featuring a new PRIMEGREEN upper."
                            >
                                <ButtonComponent.ButtonHover text="shop now" />
                            </VideoCard>
                        </div>
                    </div>
                </div>
          
            </div>
        </main>
   
   );
};

export default BodyComponent;
