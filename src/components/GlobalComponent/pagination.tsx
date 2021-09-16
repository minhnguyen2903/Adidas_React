import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Icon from "@material-ui/core/Icon";
import Helper from "../../helper/helper";
const PagePagination = (props: any) => {
    const products = useSelector((state: any) => state.searchResult.products);
    const query = Helper.searchToObject();
    const [currentPagination, setCurrentPagination] = useState(parseInt(query.startAt )/20 + 1 || 1);
    const paginationNumber = Math.ceil(products.length / 20);
    const increaseCurrentPagination = () => {
        if(currentPagination < paginationNumber) {
            hrefEvent(currentPagination+1)
        }
    }
    const decreaseCurrentPagination = () => {
        if(currentPagination > 1) {
            hrefEvent(currentPagination-1)
        }
    }
    const hrefEvent = (value: any) => {
        console.log(value);
        let splitQuery = window.location.href.split("&startAt");
        let rawQuery = splitQuery[0]
        if(splitQuery[0].includes("?startAt")) {
            splitQuery = splitQuery[0].split("?startAt");
            rawQuery = splitQuery[0]
        }
        window.location.href= `${rawQuery}${rawQuery.includes("?")?"&": "?"}startAt=${(value-1)*20}`
    }

    const renderPagination = () => {
        const renderList = [];
        for (let i = 1; i <= paginationNumber; i++) {
            renderList.push (
                <div
                    key={i}
                    className={`text-hover-bg-dark border p-3 d-flex align-items-center justify-content-center position-relative ${currentPagination === i?"text-bg--border-dark": ""}`}
                    style={{ width: "38px", height: "38px" }}
                >
                    {i}
                    <input
                        type="text"
                        value={i}
                        className="border-0 w-100 h-100 position-absolute bg-primary opacity-0 cursor-pointer"
                        onClick={(e: any) => {hrefEvent(e.target.value)}}
                        readOnly
                    />
                </div>
            );
        }
        return renderList;
    };
    return (
        <div className=" row justify-content-center">
            <div
                className="text-hover-bg-dark cursor-pointer border p-3 d-flex align-items-center justify-content-center"
                style={{ width: "38px", height: "38px" }}
                onClick = {decreaseCurrentPagination}
            >
                <Icon
                    className="text-hover-bg-dark m-0 p-0 d-flex align-items-center justify-content-center"
                    style={{ width: "36px", height: "36px" }}
                >
                    chevron_left
                </Icon>
            </div>
            {renderPagination()}
            <div
                className="text-hover-bg-dark cursor-pointer border p-3 d-flex align-items-center justify-content-center"
                style={{ width: "38px", height: "38px" }}
                onClick={increaseCurrentPagination}
            >
                <Icon
                    className="text-hover-bg-dark m-0 p-0 d-flex align-items-center justify-content-center"
                    style={{ width: "36px", height: "36px" }}
                >
                    chevron_right
                </Icon>
            </div>
        </div>
    );
};

export default PagePagination;
