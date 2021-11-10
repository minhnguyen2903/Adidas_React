import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HeaderTopTop = () => {
    const isSign = useSelector((state: any) => state.isSign);
    return(
        <div className="row justify-content-end pt-2 d-none d-lg-flex">
            <ul className="row m-0 w-auto">
                <li className="ms-3 cursor-pointer w-auto"><Link to="/help" className="text-small cursor-pointer">help</Link></li>
                <li className="ms-3 cursor-pointer w-auto"><Link to="/order-tracker" className="text-small cursor-pointer">order tracker</Link></li>
                {isSign.signIn?null: <li className="ms-3 cursor-pointer w-auto"><Link to="/account-login" className="text-small cursor-pointer">newsletter signup</Link></li>}
                <li className="ms-3 cursor-pointer w-auto">{isSign.signIn?<Link to="/myAccount" className="text-small cursor-pointer text-capitalize">{`welcome ${isSign.signIn.info.firstName} ${isSign.signIn.info.lastName}`}</Link>:<Link to="/account-login" className="text-small cursor-pointer">login</Link>}</li>
                <li className="ms-3 cursor-pointer w-auto"><span className="text-small cursor-pointer">lanuage</span></li>
            </ul>
        </div>
    )
}

export default HeaderTopTop;