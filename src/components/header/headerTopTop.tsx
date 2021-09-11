import { Link } from "react-router-dom";
const HeaderTopTop = () => {
    return(
        <div className="row justify-content-end pt-2 d-none d-lg-flex">
            <ul className="row m-0 w-auto">
                <li className="ms-3 cursor-pointer w-auto"><Link to="/help" className="text-small cursor-pointer">help</Link></li>
                <li className="ms-3 cursor-pointer w-auto"><Link to="/order-tracker" className="text-small cursor-pointer">order tracker</Link></li>
                <li className="ms-3 cursor-pointer w-auto"><Link to="/account-login" className="text-small cursor-pointer">newsletter signup</Link></li>
                <li className="ms-3 cursor-pointer w-auto"><Link to="/account-login" className="text-small cursor-pointer">login</Link></li>
                <li className="ms-3 cursor-pointer w-auto"><span className="text-small cursor-pointer">lanuage</span></li>
            </ul>
        </div>
    )
}

export default HeaderTopTop;