import { useEffect } from "react";
import { useState } from "react";
import Helper from "../../helper/helper";
export const MyCheckBox = (props: any) => {
    const [isChecked, setIsChecked] = useState(false);
    const objQuery = Helper.searchToObject()
    const toogleChecked = (e: any) => {
        setIsChecked(!isChecked);
        let query = window.location.search;
        if(query.includes("?startAt")) {
            query = query.replace(`?startAt=${objQuery.startAt}`, "")
        }
        if(query.includes("&startAt")) {
            query = query.replace(`&startAt=${objQuery.startAt}`, "")
        }
        if (query !== "" && !window.location.search.replaceAll("%20", " ").includes(props.name)) {
            window.location.href = `/search${query}&${props.category.toLowerCase()}=${e.target.name}${objQuery.startAt?"&startAt="+objQuery.startAt: ""}`;
        } 
        else if (query === "" && !window.location.search.replaceAll("%20", " ").includes(props.name)) {
            window.location.href = `/search?${props.category.toLowerCase()}=${e.target.name}${objQuery.startAt?"&startAt="+objQuery.startAt: ""}`;
        }
    };

    useEffect(() => {
        if(window.location.search.replaceAll("%20", " ").includes(props.name)) {
            setIsChecked(true);
        }
    }, [])

    return (
        <div className="filter-dropdown-item text-capitalize bg-hover-gray d-flex align-items-center position-relative">
            <label
                className={`m-0 w-100 d-flex align-items-center ps-3 ${
                    isChecked ? "filter-dropdown-item-checked" : ""
                }`}
                htmlFor={props.name}
                style={{ height: "40px" }}
            >
                {props.name}
            </label>
            <input
                className="position-absolute w-100 bg-warning cursor-pointer"
                type="checkbox"
                name={props.name}
                style={{ height: "42px", opacity: "0" }}
                onClick={(e: any) => {
                    toogleChecked(e);
                }}
            />
        </div>
    );
};

export const CheckBoxNoAction = (props: any) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className="filter-dropdown-item text-capitalize d-flex align-items-center position-relative w-auto" style={{height: "fit-content"}}>
            <label
                className={`m-0 w-100 d-flex align-items-center ps-3 ${
                    isChecked ? "filter-dropdown-item-checked" : ""
                }`}
                htmlFor={props.name}
                style={{ height: "40px" }}
            >
                {props.name}
            </label>
            <input
                className="position-absolute w-100 bg-warning cursor-pointer"
                type="checkbox"
                name={props.name}
                value={props.value}
                style={{ height: "42px", opacity: "0" }}
                onClick={() => {
                    setIsChecked(!isChecked)
                }}
            />
        </div>
    );
}