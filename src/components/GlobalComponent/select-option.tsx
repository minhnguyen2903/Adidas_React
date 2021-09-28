import { useEffect, useState } from "react";
import { ClickAwayListener } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export const SelectOption = (props: any) => {
    const [selectedOption, setSelectedOption] = useState("Select Size");
    const [isOpen, setIsOpen] = useState(false);

    const handleClickAway = () => {
        setIsOpen(false);
    };

    const setSize = (size: string) => {
        props.handleSize(size);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div
                className={`select-option mt-2 border border-dark position-relative bg-white ${
                    isOpen ? "select-option-after" : ""
                }`}
            >
                <div
                    className="displayed d-flex justify-content-between align-items-center cursor-pointer p-2"
                    style={{ width: "140px" }}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <span>{selectedOption}</span>
                    <Icon>expand_more</Icon>
                </div>
                <div
                    className={`row bg-white option-dropdown position-absolute border border-dark justify-content-around ${
                        isOpen ? "d-flex" : "d-none"
                    }`}
                    style={{
                        width: "calc(100% + 150px)",
                        left: "-1px",
                        height: "auto",
                    }}
                >
                    <div
                        className="col-3 cursor-pointer border border-dark p-1 m-2 bg-hover-dark text-center"
                        onClick={() => {
                            setSelectedOption("3.5 UK");
                            setSize("3.5 UK");
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">3.5 UK</span>
                    </div>
                    <div
                        className="col-3 cursor-pointer border border-dark p-1 m-2 bg-hover-dark text-center"
                        onClick={() => {
                            setSelectedOption("4 UK");
                            setSize("4 UK");
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">4 UK</span>
                    </div>
                    <div
                        className="col-3 cursor-pointer border border-dark p-1 m-2 bg-hover-dark text-center"
                        onClick={() => {
                            setSelectedOption("4.5 UK");
                            setSize("4.5 UK");
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">4.5 UK</span>
                    </div>
                    <div
                        className="col-3 cursor-pointer border border-dark p-1 m-2 bg-hover-dark text-center"
                        onClick={() => {
                            setSelectedOption("5 UK");
                            setSize("5 UK");
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">5 UK</span>
                    </div>
                    <div
                        className="col-3 cursor-pointer border border-dark p-1 m-2 bg-hover-dark text-center"
                        onClick={() => {
                            setSelectedOption("5.5 UK");
                            setSize("5.5 UK");
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">5.5 UK</span>
                    </div>
                    <div
                        className="col-3 cursor-pointer border border-dark p-1 m-2 bg-hover-dark text-center"
                        onClick={() => {
                            setSelectedOption("6 UK");
                            setSize("6 UK");
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">6 UK</span>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    );
};

export const SelectNumber = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickAway = () => {
        setIsOpen(false);
    };

    const putToLocalStorage = (element: any, number: number) => {
        if (props.type === "cart") {
            props.handleNumber(number);
            const getFromLocal = JSON.parse(
                String(localStorage.getItem("cart"))
            );
            if (getFromLocal !== null) {
                if (getFromLocal.length >= 1) {
                    const findItem = getFromLocal.filter(
                        (item: any) => item.productId === element.productId
                    );
                    const getIndex = getFromLocal.indexOf(findItem[0]);
                    getFromLocal[getIndex].number = number;
                    localStorage.setItem("cart", JSON.stringify(getFromLocal));
                } else {
                    getFromLocal.number = number;
                    localStorage.setItem("cart", JSON.stringify(getFromLocal));
                }
            }
        }
        if (props.type === "wishList") {
            props.handleNumber(number);
        }
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div
                className={`select-option mt-2 border border-dark position-relative bg-white ${
                    isOpen ? "select-option-after" : ""
                }`}
                style={{ width: "fit-content" }}
            >
                <div
                    className="displayed d-flex justify-content-between align-items-center cursor-pointer p-2"
                    style={{ width: "100px" }}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <span>{props.element?.number || "Number"}</span>
                    <Icon>expand_more</Icon>
                </div>
                <div
                    className={`row bg-white option-dropdown position-absolute border border-dark ${
                        isOpen ? "d-flex" : "d-none"
                    }`}
                    style={{ width: "calc(100% + 2px)", left: "-1px" }}
                >
                    <div
                        className="w-100 cursor-pointer p-1 bg-hover-dark text-center"
                        onClick={() => {
                            putToLocalStorage(props.element, 1);
                            props.element.number = 1;
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">1</span>
                    </div>
                    <div
                        className="w-100 cursor-pointer p-1 bg-hover-dark text-center"
                        onClick={() => {
                            putToLocalStorage(props.element, 2);
                            props.element.number = 2;
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">2</span>
                    </div>
                    <div
                        className="w-100 cursor-pointer p-1 bg-hover-dark text-center"
                        onClick={() => {
                            putToLocalStorage(props.element, 3);
                            props.element.number = 3;
                            setIsOpen(false);
                        }}
                    >
                        <span className="text-uppercase">3</span>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    );
};

export const SelectLocation = (props: any) => {
    const [warning, setWarning] = useState(false);
    const handleChange = (e: any) => {
        props.event(e.target.name, e.target.value);
    };
    useEffect(() => {
        if(props.isValid === false && props.current === "") {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }, [props.isValid, props.current])
    const renderOption = props.values?.map((element: any, index: number) => {
        return (
            <option
                value={element._name}
                key={index}
                className="text-capitalize"
            >
                {element._name}
            </option>
        );
    });
    return (
        <div className="mt-4 mb-4">
            <select
                name={props.name}
                id="province"
                defaultValue=""
                value={props.curent}
                style={{ height: "46px" }}
                className="outline-0 w-100 border border-dark p-2 bg-white"
                onChange={handleChange}
            >
                {props.curent!=="" ? (
                    <option value="">Select {props.name}</option>
                ) : null}
                {renderOption}
            </select>
            {warning?<p className="m-0 p-0 ms-2 mt-1" style={{color: "red"}}>Required</p>: null}

        </div>
    );
};
