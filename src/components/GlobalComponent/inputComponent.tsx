import { useEffect, useRef, useState } from "react";

const onFocusInput = (e: any) => {
    if(!e.target.offsetParent.firstChild.className.includes("transition-label")) {
        e.target.offsetParent.firstChild.className += " transition-label";
    }
};

const onBlurInput = (e: any) => {
    if(e.target.value === "") {
        e.target.offsetParent.firstChild.className = e.target.offsetParent.firstChild.className.replace("transition-label", "");
    }
};

export const InputComponent = (props: any) => {
    const [warning, setWarning] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const handleChange = (e: any, key: any) => {
        if(props.handleChange) {
            props.handleChange(key, e.target.value);
        }
    };
    useEffect(() => {
        if(props.isValid === false && inputRef.current?.value === "") {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }, [props.isValid, props.val])

    return (
        <div className="mt-4 mb-4">
            <div
            className="form-input position-relative d-flex align-items-center flex-wrap"
            onFocus={(e: any) => {
                onFocusInput(e);
            }}
            onBlur={(e: any) => {
                onBlurInput(e);
            }}
        >
            <label
                htmlFor={props.name}
                className={`text-capitalize position-absolute bg-white p-1`}
                style={{ left: "20px", transition: "0.3s" }}
            >
                {props.label}
            </label>
            <input
                type={props.type?props.type: "text"}
                ref={inputRef}
                className="w-100 border border-1 border-dark pt-2 pb-2 ps-4 pe-4 bg-transparent"
                name={props.name}
                autoComplete="off"
                style={{ height: "46px" }}
                value={props.val}
                onChange={(e: any) => {
                    handleChange(e, props.name);
                    onFocusInput(e);
                }}
            />
        </div>
                {warning?<p className="m-0 p-0 ms-2 mt-1" style={{color: "red"}}>Please complete this field</p>: null}
        </div>
    );
};

export const DateInput = (props: any) => {
    const [warning, setWarning] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: any, key: any) => {
        props.handleChange(key, e.target.value);
    };
    useEffect(() => {
        if(props.isValid === false && inputRef.current?.value === "") {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }, [props.isValid, props.val])
    return (
        <div className="row justify-content-between  mt-4 mb-4">
            <div className="col">
                <div
                    className="form-input position-relative d-flex align-items-center"
                >
                    <label
                        htmlFor="username"
                        className={`position-absolute bg-white p-1 transition-label`}
                        style={{ left: "20px" }}
                    >
                        dd
                    </label>
                    <input
                        type="date"
                        className="w-100 border border-1 border-dark pt-2 pb-2 ps-4 pe-4 bg-transparent"
                        name={props.name}
                        ref={inputRef}
                        autoComplete="off"
                        style={{ height: "42px" }}
                        min="1910-01-01" max="2020-12-31"
                        onChange={(e: any) => {
                            handleChange(e, props.name);
                        }}
                    />
                </div>
                {warning?<p className="m-0 p-0 ms-2 mt-1" style={{color: "red"}}>Please complete this field</p>: null}
            </div>
        </div>
    );
};
