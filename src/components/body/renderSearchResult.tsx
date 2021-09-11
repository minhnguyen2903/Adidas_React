import { CardProduct } from "../GlobalComponent/Card";
import { useSelector } from "react-redux";


const RenderSearchResult = (props: any) => {
    const products = useSelector((state:any) => state.searchResult.products);
    const searchKey = window.location.search.substring(3)
    const renderProducts = products.map((item:any) => {
        const mapIndex = products.indexOf(item);
        return (
            <div className="col-md-3 col-sm-4 col-6" key={mapIndex}>
                <CardProduct state={item} wishListShow={true}/>
            </div>
        )
    })
    if(products.length > 0) {
        return (
            <div className="product-grid row pb-5 w-100">{renderProducts}</div>
        )
    } else {
        return (
            <div className="product-grid row pb-5 w-100">
                <h3 className="text-uppercase text-700">{`no result for "${searchKey}"`}</h3></div>
        )
    }
}

export default RenderSearchResult