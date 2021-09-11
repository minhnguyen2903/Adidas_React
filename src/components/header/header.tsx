
import HeaderTopTop from './headerTopTop';
import HeaderMain from './mainHeader';
import "../../asserts/style/HeaderStyle.css";
import SearchBarAbsolute from '../GlobalComponent/searchBar-absolute';
import { useState } from 'react';
const HeaderComponent = () => {
    const [show, setShow] = useState(false);
    return (
        <header className="bg-white w-100 border-bottom d-flex align-items-center">
            <div id="header-container" className="w-100 h-100 d-flex align-items-center">
                <div className="row w-100 h-100">
                    <div className="col w-100 px-lg-5 px-3">
                        <HeaderTopTop />
                        <HeaderMain handleShow={setShow}/>
                    </div>
                </div>
                <SearchBarAbsolute show={show} handleShow={setShow}/>
            </div>
        </header>
    )
}   

export default HeaderComponent;