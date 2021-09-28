import { useSelector } from "react-redux";
const MyAccount = () => {
    const account = useSelector((state: any) => state.isSign.signIn.account);
    return (
        <div className="row w-100 justify-content-center">
        <div className="content-container col-lg-11 row p-2 p-lg-5">
           <div className="row">
               <div className="col-6"><h3 className="text-uppercase text-700">hello {account?.email}</h3></div>
               <div className="col-6 text-uppercase d-flex justify-content-end"><span>not you? &nbsp;</span><span className="text-700" onClick={() => {localStorage.removeItem("__token");window.location.href="/"}}>log out</span></div>
           </div>
        </div>
    </div>
    )
}

export default MyAccount