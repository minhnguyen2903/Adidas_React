import { useEffect } from "react";
import { useState } from "react";

export const MyCheckBox = (props: any) => {
    const [isChecked, setIsChecked] = useState(false);
    const toogleChecked = (e: any) => {
        setIsChecked(!isChecked);
        const query = window.location.search;
        if (query !== "" && !window.location.search.replaceAll("%20", " ").includes(props.name)) {
            window.location.href = `/search${query}&${props.category.toLowerCase()}=${e.target.name}`;
        } 
        else if (query === "" && !window.location.search.replaceAll("%20", " ").includes(props.name)) {
            window.location.href = `/search?${props.category.toLowerCase()}=${e.target.name}`;
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
        <div className="filter-dropdown-item text-capitalize d-flex align-items-center position-relative" style={{height: "fit-content"}}>
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
                onClick={() => {
                    setIsChecked(!isChecked)
                }}
            />
        </div>
    );
}