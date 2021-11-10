import {  useEffect, useState } from "react";
import { ClickAwayListener } from "@material-ui/core";
import { MyCheckBox, CheckBoxRadio} from "./myCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { AddToSearchResult, RemoveSearchResult } from "../../redux/action/action";

export const ToggleDropdown = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setIsOpen(false);
    };
    const renderDropdown = props.dropdown.map((item: any) => {
        const mapIndex = props.dropdown.indexOf(item);
        return <MyCheckBox category={props.category} name={item} key={mapIndex} />;
    });

    return (
        <div id={props.id} className={props.hide? "d-none w-auto": " w-auto"}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div style={props.style}>
                    <div
                        onClick={handleClick}
                        className={`filter-category letter-spacing p-2 show-dropdown position-relative border ${
                            isOpen
                                ? "filter-category-before border-dark"
                                : " border-white"
                        }`}
                    >
                        {props.category}
                    </div>
                    <div
                        className={`row flex-column filter-dropdown position-absolute pt-3 pb-3 border border-dark ${
                            isOpen ? "" : "d-none"
                        }`}
                        style={{ width: "15em" }}
                    >
                        {renderDropdown}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export const SortDropdown = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const products = useSelector((state: any) => state.searchResult.products); 
    const [selected, setSelected] = useState("");
    const dispatch = useDispatch();
    const handleClick = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setIsOpen(false);
    };

    const CheckBoxAction = (value: string) => {
        setSelected(value);
    }
    const renderDropdown = props.dropdown.map((item: any) => {
        const mapIndex = props.dropdown.indexOf(item);
        return <CheckBoxRadio category={props.category} name={item} key={mapIndex} action={CheckBoxAction} isChecked={selected===item?true:false} />;
    });

    useEffect(() => {
        if(selected === "price up") {
            const sortProduct = products.sort((a: any, b: any) => {
                return a.price - b.price;
            });
            dispatch(RemoveSearchResult());
            sortProduct.forEach((element: any) => {
                dispatch(AddToSearchResult(element))
            })
            localStorage.setItem("searchResult", JSON.stringify(sortProduct));
        }
        if(selected === "price down") {
            const sortProduct = products.sort((a: any, b: any) => {
                return b.price - a.price;
            });
            dispatch(RemoveSearchResult());
            sortProduct.forEach((element: any) => {
                dispatch(AddToSearchResult(element))
            })
            localStorage.setItem("searchResult", JSON.stringify(sortProduct));
        }
        if(selected === "A - Z") {
            const sortProduct = products.sort((a: any, b: any) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            dispatch(RemoveSearchResult());
            sortProduct.forEach((element: any) => {
                dispatch(AddToSearchResult(element))
            })
            localStorage.setItem("searchResult", JSON.stringify(sortProduct));
        }
        if(selected === "Z - A") {
            const sortProduct = products.sort((a: any, b: any) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0));
            dispatch(RemoveSearchResult());
            sortProduct.forEach((element: any) => {
                dispatch(AddToSearchResult(element))
            })
            localStorage.setItem("searchResult", JSON.stringify(sortProduct));
        }
    }, [selected])

    return (
        <div id={props.id} className={props.hide? "d-none w-auto": " w-auto"}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div style={props.style} className="position-relative">
                    <div
                        onClick={handleClick}
                        className={`filter-category letter-spacing p-2 show-dropdown position-relative border ${
                            isOpen
                                ? "filter-category-before border-dark"
                                : " border-white"
                        }`}
                    >
                        {props.category}
                    </div>
                    <div
                        className={`row flex-column filter-dropdown position-absolute pt-3 pb-3 border border-dark ${
                            isOpen ? "" : "d-none"
                        }`}
                        style={{ width: "15em" , right: "0"}}
                    >
                        {renderDropdown}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    );
};

