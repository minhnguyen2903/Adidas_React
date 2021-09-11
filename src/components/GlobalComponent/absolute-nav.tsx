import logo from "../../asserts/img/images/logo.png";
import Icon from "@material-ui/core/Icon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AbsoluteNav = (props: any) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div
      className="nav-absolute position-fixed w-100 bg-white"
      data-aos="fade-right"
    >
      <div className="absolute-nav-header row w-100 border-bottom d-flex justify-content-between align-items-center p-3">
        <div></div>
        <div className="h-100">
          <img src={logo} alt="" width="70" className="h-100" />
        </div>
        <div
          className="d-flex justify-content-center align-items-end cursor-pointer"
          onClick={() => {
            props.handleShow(false);
          }}
        >
          <Icon style={{ fontSize: "2.5em" }}>close</Icon>
        </div>
      </div>
      <div className="absolute-nav-body pb-3 pt-3 border-bottom">
        <div className="h-100 p-3 cursor-pointer d-flex align-items-center justify-content-between ">
          <span
            className="text-uppercase text-700 letter-spacing button_active"
            style={{ fontSize: "1.5em" }}
          >
            men
          </span>
          <Icon style={{ fontSize: "2em" }}>chevron_right</Icon>
        </div>
        <div className="h-100 p-3 cursor-pointer d-flex align-items-center justify-content-between">
          <span
            className="text-uppercase text-700 letter-spacing button_active"
            style={{ fontSize: "1.5em" }}
          >
            women
          </span>
          <Icon style={{ fontSize: "2em" }}>chevron_right</Icon>
        </div>
        <div className="h-100 p-3 cursor-pointer d-flex align-items-center justify-content-between">
          <span
            className="text-uppercase text-700 letter-spacing button_active"
            style={{ fontSize: "1.5em" }}
          >
            kids
          </span>
          <Icon style={{ fontSize: "2em" }}>chevron_right</Icon>
        </div>
        <div className="h-100 p-3 cursor-pointer d-flex align-items-center justify-content-between">
          <span
            className="text-uppercase letter-spacing button_active"
            style={{ fontSize: "1.5em" }}
          >
            sports
          </span>
          <Icon style={{ fontSize: "2em" }}>chevron_right</Icon>
        </div>
        <div className=" h-100 p-3 cursor-pointer d-flex align-items-center justify-content-between">
          <span
            className="text-uppercase letter-spacing button_active"
            style={{ fontSize: "1.5em" }}
          >
            brands
          </span>
          <Icon style={{ fontSize: "2em" }}>chevron_right</Icon>
        </div>
      </div>
      <div className="absolute-nav-profile p-3">
        <div className="mb-3">
          <Link to="/account-login" style={{ fontSize: "1.5em" }}>
            My Profile
          </Link>
        </div>
        <div className="mb-3">
          <Link to="/account-login" style={{ fontSize: "1.5em" }}>
            Store Locator
          </Link>
        </div>
        <div className="mb-3">
          <Link to="/account-login" style={{ fontSize: "1.5em" }}>
            Newsletter Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteNav;
