import { CardProduct } from "../GlobalComponent/Card";
import { useSelector } from "react-redux";
import Helper from "../../helper/helper";

const RenderSearchResult = (props: any) => {
    const products = useSelector((state: any) => state.searchResult.products);
    const objQuery=  Helper.searchToObject()
    const searchKey = window.location.search.substring(3);
    const paginationStart = objQuery.startAt || 0
    const renderProducts = products.map((item: any, index: number) => {
        if (
            index >= paginationStart &&
            index < paginationStart - 0 + 20
        ) {
            return (
                <div className="col-md-3 col-sm-4 col-6" key={index}>
                    <CardProduct state={item} wishListShow={true} />
                </div>
            );
        } else {
            return;
        }
    });
    if (products.length > 0) {
        return (
            <div className="product-grid row pb-5 w-100">{renderProducts}</div>
        );
    } else {
        return (
            <div className="product-grid row pb-5 w-100">
                <h3 className="text-uppercase text-700">{`no result for "${searchKey}"`}</h3>
            </div>
        );
    }
};

export default RenderSearchResult;
