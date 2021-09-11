import { ButtonActive } from "../GlobalComponent/button";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="row bg-warning justify-content-center">
                <div className="footer-container row col-lg-7 pt-4 pb-4">
                    <div className="col-md-6 pe-4 ps-4 pt-2 pb-2 d-flex align-items-center">
                        <h2 className="text-uppercase text-700">
                            sign up & get an exclusive offer
                        </h2>
                    </div>
                    <div className="col-md-6 d-flex align-items-center pe-4 ps-4 pt-2 pb-2">
                        <ButtonActive
                            text="sign up for newsletter"
                            action={() => {
                                window.location.href = "/account-login";
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="row bg-white p-3 p-md-5 justify-content-center">
                <div className="footer-container row col-lg-7 justify-content-center">
                    <div className="footer-nav row w-100">
                        <div className="col-sm-3 col-6 p-3">
                            <h3 className="text-uppercase text-700 text-medium">
                                products
                            </h3>
                            <ul>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/shoes">
                                        shoes
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/clothing">
                                        clothing
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/accessories"
                                    >
                                        accessories
                                    </Link>
                                </li>
                                <li className="text-capitalize"></li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/new-arrivals"
                                    >
                                        new arrivals
                                    </Link>
                                </li>
                                <li className="text-capitalize"></li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/tops">
                                        tops
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/pants">
                                        pants
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/hoodies">
                                        hoodies
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/bags">
                                        bags
                                    </Link>
                                </li>
                                <li className="text-capitalize"></li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/ultra-boost"
                                    >
                                        ultra boost
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/pureboost"
                                    >
                                        pureboost
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-6 p-3">
                            <h3 className="text-uppercase text-700 text-medium">
                                sports
                            </h3>
                            <ul>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/gym-clothes"
                                    >
                                        gym clothes
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/sports-bras"
                                    >
                                        sports bras
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/women-tights"
                                    >
                                        women's tights
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/men-gym-shorts"
                                    >
                                        men's gym shorts
                                    </Link>
                                </li>
                                <li className="text-capitalize"></li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/soccer-boots"
                                    >
                                        soccer boots
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/indoor-soccer-shoes"
                                    >
                                        indoor soccer shoes
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/soccer-balls"
                                    >
                                        soccer balls
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-6 p-3">
                            <h3 className="text-uppercase text-700 text-medium">
                                collections
                            </h3>
                            <ul>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/adidas-pharrell-williams"
                                    >
                                        adidas pharrell williams
                                    </Link>
                                </li>
                                <li className="text-capitalize"></li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/superstar"
                                    >
                                        superstar
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/stan-smith"
                                    >
                                        stan smith
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/gazalle">
                                        gazalle
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/NMD">
                                        NMD
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/QPT">
                                        QPT
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/VRCT">
                                        VRCT
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link
                                        className="text-small"
                                        to="/athletic-ZNE"
                                    >
                                        athletic ZNE
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-6 p-3">
                            <h3 className="text-uppercase text-700 text-medium">
                                company info
                            </h3>
                            <ul>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/about-us">
                                        about us
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/careers">
                                        careers
                                    </Link>
                                </li>
                                <li className="text-capitalize">
                                    <Link className="text-small" to="/press">
                                        press
                                    </Link>
                                </li>
                            </ul>
                            <div className="mt-2">
                                <h3 className="text-uppercase text-700 text-medium">
                                    support
                                </h3>
                                <ul>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/contact"
                                        >
                                            help & customer service
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link className="text-small" to="help">
                                            FAQ
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/store-finder"
                                        >
                                            Store Finder
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/size-chart"
                                        >
                                            size chart
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/payment"
                                        >
                                            payment
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/delivery"
                                        >
                                            delivery
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/return"
                                        >
                                            returns & refunds
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/promotions"
                                        >
                                            promotions
                                        </Link>
                                    </li>
                                    <li className="text-capitalize">
                                        <Link
                                            className="text-small"
                                            to="/sitemap"
                                        >
                                            sitemap
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row footer-copyright bg-dark text-small pe-5 ps-5 align-items-center">
                <div
                    id="copyright"
                    className="text-light col-sm-4 p-2 text-center"
                >
                    Minh Nguyen
                </div>
                <div className="footer-nav col-8 d-sm-block d-none">
                    <ul className="d-md-flex m-0 w-100 justify-content-end">
                        <li className="text-capitalize ps-2 pe-2 border-right mb-2 mt-2">
                            <Link
                                className="text-small text-light"
                                to="/privacy"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="text-capitalize ps-2 pe-2 border-right mb-2 mt-2">
                            <Link
                                className="text-small text-light"
                                to="/term-and-condition"
                            >
                                term and conditions
                            </Link>
                        </li>
                        <li className="text-capitalize ps-2 pe-2 border-right mb-2 mt-2">
                            <Link
                                className="text-small text-light"
                                to="/imprint"
                            >
                                imprint
                            </Link>
                        </li>
                        <li className="text-capitalize text-light ps-2 pe-2 mb-2 mt-2 text-small d-flex align-items-center">
                            © 2020 adidas Vietnam Company Limited
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
