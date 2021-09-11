import React, { useState } from "react";
import { ClickAwayListener } from "@material-ui/core";
import {MyCheckBox} from "./myCheckBox";
import { useEffect } from "react";


const ToggleDropdown = (props: any) => {
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

    useEffect(() => {

    },[])

    return (
        <div id={props.id} className={props.hide? "d-none": ""}>
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
                        style={{ width: "250px" }}
                    >
                        {renderDropdown}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default ToggleDropdown;
