import { Link } from "react-router-dom";
import logo from "../../asserts/img/images/logo.png"
import SearchBar from "../GlobalComponent/searchBar";
import DropDown from "../GlobalComponent/dropdown";
import Icon from '@material-ui/core/Icon';
import { useSelector } from "react-redux";
import AbsoluteNav from "../GlobalComponent/absolute-nav";
import { useState } from "react";
const HeaderMain = (props:any) => {
    const [show, setShow] = useState(false)
    const wishList = useSelector((state: any) => state.wishList.products);
    const cart = useSelector((state: any) => state.cart.products);
    return (
        <div className="row w-100">
            {show?<AbsoluteNav handleShow={setShow}/>:null}
            <div className="row w-100 align-items-end justify-content-between">
                <div className="col-4 h-100 d-flex align-items-center d-lg-none"><Icon className="cursor-pointer" style={{ fontSize: "32px" }} onClick={() => {setShow(true)}}>menu</Icon></div>
                <div className="col-1 d-flex justify-content-start py-lg-2 pt-0 logo me-5"><Link to="/"><img src={logo} alt="" width="70px" height="47px" style={{ cursor: "pointer" }} className="position-relative" /></Link></div>
                <div className="col w-100 d-none d-lg-flex align-items-end position-xl-absolute justify-content-xl-center" style={{ left: "0" }}>
                    <div className="row">
                        <div className="row m-0 h-100">
                            <div className="nav-item h-100 p-2 cursor-pointer w-auto">
                                <Link to="/men"><span className="text-uppercase text-600 letter-spacing button_active">men</span></Link>
                                <DropDown target={"men"} />
                            </div>
                            <div className="nav-item h-100 p-2 cursor-pointer w-auto">
                                <Link to="/women"><span className="text-uppercase  text-600 letter-spacing  button_active">women</span></Link>
                                <DropDown target={"women"} />
                            </div>
                            <div className="nav-item h-100 p-2 cursor-pointer w-auto">
                                <Link to="/kids"><span className="text-uppercase text-600 letter-spacing  button_active">kids</span></Link>
                                <DropDown target={"kids"} />
                            </div>
                            <div className="nav-item h-100 p-2 cursor-pointer w-auto">
                                <span className="text-uppercase  letter-spacing  button_active">sports</span>
                                <DropDown target={"men"} />
                            </div>
                            <div className="nav-item h-100 p-2 cursor-pointer w-auto">
                                <span className="text-uppercase letter-spacing button_active">brands</span>
                                <DropDown target={"men"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 h-100">
                    <div className="row h-100 align-items-center justify-content-end">
                        <SearchBar handleShow={props.handleShow}/>
                        {wishList.length > 0 ? <Link to="/wishlist-Show" className="w-auto d-flex align-items-center position-relative">
                            <span className="index-100 d-flex justify-content-center rounded-circle bg-primary text-light position-absolute" style={{ width: "16px", height: "16px", fontSize: "12px", top: "-4px", right: "2px" }}>{wishList.length}</span>
                            <Icon className="gl-icon cursor-pointer me-2">favorite_outline</Icon>
                        </Link> : null}
                        <Link to="/cart" className=" w-auto d-flex align-items-center position-relative">
                            {cart.length > 0 ? <span className="index-100 d-flex justify-content-center rounded-circle bg-primary text-light position-absolute" style={{ width: "16px", height: "16px", fontSize: "12px", top: "-4px", right: "-4px" }}>{cart.length}</span> : null}
                            <Icon className="material-icons-outlined gl-icon cursor-pointer">shopping_bag</Icon>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain;