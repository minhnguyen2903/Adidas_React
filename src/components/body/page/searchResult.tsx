import RenderSearchResult from ".././renderSearchResult";
import "material-icons/iconfont/material-icons.css";
import ToggleDropdown from "../../GlobalComponent/button-dopdown";
import { Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helper from "../../../helper/helper";
import RenderSelectedFilter from "../renderSelected";
import Spinner from "../../../asserts/img/Spinner-1s-200px.gif";
import PagePagination from "../../GlobalComponent/pagination";
const Searchresult = () => {
    window.scrollTo(0, 0);
    const products = useSelector((state: any) => state.searchResult.products);
    const [filter, setFilter] = useState([""]);
    const [fetchDone, setFetchDone] = useState(false);
    const searchKey = window.location.search;
    const dispatch = useDispatch();
    const objQuery = Helper.searchToObject();

    const searchResultFor = (key: string) => {
        let result = "";
        if(window.location.search.includes("?startAt")) {
            result = "all products"
        } else {
            Object.keys(objQuery).forEach((element: any) => {
                if(result === "" && element !== "startAt") {
                    result = objQuery[element]
                } else {
                    if(element === "q") {
                        result = `${objQuery[element]} + ${result}`
                    } else if(element === "startAt") {
                        return;
                    } else {
                        result += ` + ${objQuery[element]}`
                    }
                }
            })
        }
        return result;
    };

    const filterText = () => {
        let rawQuery = window.location.search;
        if(rawQuery.includes("?startAt")) {
            rawQuery = rawQuery.replace(`?startAt=${objQuery.startAt}`, "")
        }
        if(rawQuery.includes("&startAt")) {
            rawQuery = rawQuery.replace(`&startAt=${objQuery.startAt}`, "")
        }
        let a = rawQuery.split("");
        const b: any = [];
        const c: any = [];
        a.forEach((element: string, index: number) => {
            if (element === "=" && a[index - 1] !== "q") {
                b.push(index);
            }
            if (element === "&") {
                c.push(index);
            }
        });
        b.forEach((element: any, index: number) => {
            if (index !== b.length - 1) {
                const val = a.slice(b[index] + 1, c[index]).join("");
                if (!filter.includes(val)) {
                    setFilter([val, ...filter]);
                }
            } else {
                const val = a.slice(b[index] + 1, a.length).join("");
                if (!filter.includes(val)) {
                    setFilter([val, ...filter]);
                }
            }
        });
    };

    const compareSearchKey = (searchKey: any, compareStr: Array<string>) => {
        let isValid = false;
        compareStr.forEach((item: any) => {
            if (searchKey.includes(item)) {
                isValid = true;
            }
        });
        return isValid;
    };
    const handleFetch = () => {
        setFetchDone(true);
    };
    useEffect(() => {
        filterText();
        Helper.UpdateSearchResult(dispatch, searchKey, handleFetch);
        window.scrollTo(0, 0);
    }, [filter]);

    return (
        <main className="pb-5 pt-4">
            <div className="row w-100 justify-content-center">
                <div className="content-container col-lg-10 pe-3 ps-3">
                    <div className="content-top pb-3">
                        <div className="bread-crumb">
                            <Breadcrumb style={{ background: "white" }}>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/search" active>
                                    Search
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="filtered-product pt-3 pb-3 d-flex align-items-center">
                            <h3
                                className="text-title text-uppercase"
                                style={{ fontStyle: "italic" }}
                            >
                                {searchKey.includes("?")
                                    ? searchResultFor(searchKey)
                                    : "all products"}
                            </h3>
                            <span className="ms-2">{`(${products.length})`}</span>
                        </div>
                        <div className="filter">
                            <div className="filter-bar border-top border-bottom pt-1 pb-1">
                                <div className="row">
                                    <ToggleDropdown
                                        id="gender"
                                        category="GENDER"
                                        dropdown={["men", "women", "kids"]}
                                        hide={
                                            compareSearchKey(searchKey, [
                                                "men",
                                                "women",
                                                "kid",
                                            ])
                                                ? true
                                                : false
                                        }
                                    />
                                    <ToggleDropdown
                                        id="division"
                                        category="DIVISION"
                                        dropdown={[
                                            "clothes",
                                            "shoes",
                                            "accessories",
                                        ]}
                                        hide={
                                            compareSearchKey(searchKey, [
                                                "clothes",
                                                "accessories",
                                                "shoes",
                                            ])
                                                ? true
                                                : false
                                        }
                                    />
                                    <ToggleDropdown
                                        id="sports"
                                        category="SPORTS"
                                        dropdown={[
                                            "lifestyle",
                                            "running",
                                            "training",
                                            "golf",
                                            "yoga",
                                            "football",
                                        ]}
                                    />
                                    <ToggleDropdown
                                        id="type"
                                        category="PRODUCT TYPE"
                                        dropdown={[
                                            "sneaker",
                                            "football boots",
                                            "slides & flip flops",
                                            "other sports shoes",
                                            "T-shirts",
                                            "shorts",
                                        ]}
                                    />
                                    <ToggleDropdown
                                        id="brand"
                                        category="BRAND"
                                        dropdown={[
                                            "performance",
                                            "originals",
                                            "sport inspired",
                                            "sportswear",
                                            "TERREX",
                                            "Essentials",
                                        ]}
                                    />
                                    <ToggleDropdown
                                        id="size"
                                        category="SIZE"
                                        dropdown={[
                                            "1",
                                            "10.5 UK",
                                            "104",
                                            "10K",
                                        ]}
                                    />
                                    <ToggleDropdown
                                        id="colour"
                                        category="COLOUR"
                                        dropdown={[
                                            "black",
                                            "white",
                                            "red",
                                            "yellow",
                                            "multicolor",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="selected-filter mt-2 d-flex">
                            <RenderSelectedFilter filter={filter} />
                            {filter[0] !== "" ? (
                                <div
                                    className="text-underline bg-hover-dark cursor-pointer ps-1 pe-1"
                                    onClick={() => {
                                        window.location.href = "/search";
                                    }}
                                >
                                    Clear all
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="search-result w-100">
                        <div className="product-grid row pb-5">
                            {fetchDone ? (
                                <div>
                                    <RenderSearchResult/>
                                    <PagePagination/>
                                </div>
                            ) : (
                                <div className="w-100 d-flex justify-content-center">
                                    <img src={Spinner} alt="" height="120px" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Searchresult;
