// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import { VideoCard, CardProduct } from "../GlobalComponent/Card";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Slider(props: any) {
    const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className="row w-100 justify-content-center">
            <div className="content-container col-lg-11 p-2 p-lg-5 overflow-hidden">
                <div className="row w-100">
                    <h2 className="text-uppercase text-700 p-1">
                        {props.headerContent}
                    </h2>
                </div>
                <div className="row w-100">
                    <Swiper
                        slidesPerView={isMobile ? 1.2 : isTablet ? 2.7 : 4.7}
                        slidesPerGroup={isMobile ? 1 : isTablet ? 2 : 4}
                        loop={false}
                        spaceBetween={10}
                        loopFillGroupWithBlank={false}
                        navigation={isTablet ? false : true}
                        className="advertiseSwiper"
                    >
                        <SwiperSlide>
                            <VideoCard
                                video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-fw21-4dfwd-launch-hp-teaser-carousel-non-cc-d_bkgvii.mp4"
                                productName="A NEW COLOURWAY OF THE ADIDAS 4DFWD IS HERE"
                                description="4DFWD. Designed to move you forward."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/XCAT-SS21-Loungewear-Launch-HP-TeaserCarousel_tcm212-718149.jpg"
                                productName="ADIZERO ADIOS PRO 2"
                                description="FASTER THAN EVER"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/football-fw21-meteorite-pack-launch-hp-teaser-carousel-p0-d_tcm212-703090.jpg"
                                productName="FEEL THE ZX"
                                description="When a glow appears, we seek comfort within it. Let it relax you. The sensation is in the sole."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/running-fw21-adizero-june-early-access-hp-adios-pro-tc_tcm212-696528.jpg"
                                productName="ADIZERO ADIOS PRO 2"
                                description="FASTER THAN EVER"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/parley-ss21-mission-drop2-launch-hp-teaser-carousel-card-ftw-v1-all_jqs2ee.mp4"
                                productName="A NEW COLOURWAY OF THE ADIDAS 4DFWD IS HERE"
                                description="4DFWD. Designed to move you forward."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/originals-ss21-womans-originals-launch-teaser-carousel-01-d_tcm212-632203.jpg"
                                productName="ADIZERO ADIOS PRO 2"
                                description="FASTER THAN EVER"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/adicolor_FW21_June_July_HP_TC_Carousel_2_D_ezdp1b.mp4"
                                productName="A NEW COLOURWAY OF THE ADIDAS 4DFWD IS HERE"
                                description="4DFWD. Designed to move you forward."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/running-fw21-adizero-june-early-access-hp-adios-pro-tc_tcm212-696528.jpg"
                                productName="ADIZERO ADIOS PRO 2"
                                description="FASTER THAN EVER"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                video="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-fw21-4dfwd-launch-hp-teaser-carousel-non-cc-d_bkgvii.mp4"
                                productName="A NEW COLOURWAY OF THE ADIDAS 4DFWD IS HERE"
                                description="4DFWD. Designed to move you forward."
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <VideoCard
                                imgSrc="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enVN/Images/running-fw21-adizero-june-early-access-hp-adios-pro-tc_tcm212-696528.jpg"
                                productName="ADIZERO ADIOS PRO 2"
                                description="FASTER THAN EVER"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export function ProductSlide(props: any) {
    const isTablet = useMediaQuery({ query: "(max-width: 992px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const renderCard = props.state.map((item: any) => {
        const mapIndex = props.state.indexOf(item);
        return (
            <SwiperSlide key={mapIndex} style={{ width: "276px" }}>
                <CardProduct state={item} />
            </SwiperSlide>
        );
    });

    return (
        <div className="row w-100 justify-content-center">
            <div className="content-container col-lg-11 p-2 p-lg-5 overflow-hidden">
                <div className="row w-100">
                    <h2 className="text-uppercase text-700 p-1">
                        {props.headerContent}
                    </h2>
                </div>
                <div className="row w-100">
                    <Swiper
                        slidesPerView={isMobile ? 1.2 : isTablet ? 2.7 : 4.7}
                        slidesPerGroup={isMobile ? 1 : isTablet ? 2 : 4}
                        loop={false}
                        spaceBetween={10}
                        loopFillGroupWithBlank={false}
                        navigation={isTablet ? false : true}
                        pagination={{ clickable: true }}
                        className="productSwiper pb-5 w-100"
                    >
                        {renderCard}
                        <SwiperSlide style={{ width: "276px", minHeight: "399px" }}>
                            <div className="d-flex align-items-center justify-content-center h-100">
                                <Link
                                    className="text-capitalize cursor-pointer"
                                    to="/search"
                                >
                                    view more ...
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
