import { Row } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";

const SearchBarAbsolute = (props: any) => {
    const style = {
        padding: "0 35px 0 10px",
        height: "40px",
        outline: "0",
        border: "solid 1px transparent",
        background: "#ffffff",
        fontSize: "1.1em",
    };

    const [val, setVal] = useState("");
    const handleState = (e: any) => {
        setVal(e.target.value);
    };

    const searchSubmit = () => {
        if(val !== "") {
            window.location.href = `/search?q=${val}`;
        }
    }

    return (
        <Row
            className={`row search-bar-absolute position-absolute align-items-center m-0 h-100 w-100 ps-3 pe-3 ${
                props.show ? "d-flex" : "d-none"
            }`}
            onKeyUp={(event: any) => {
                if (event.key === "Enter") {
                    searchSubmit();
                }
            }}
        >
            <div
                className="d-flex align-items-center end-0 col-1"
                style={{width: "30px"}}
                onClick={() => {
                    props.handleShow(false);
                }}
            >
                <Icon className="cursor-pointer gl-icon">chevron_left</Icon>
            </div>
            <div className="row position-relative align-items-center" style={{width: "calc(100% - 30px)"}}>
                <input
                    type="text"
                    autoComplete="off"
                    style={style}
                    className="text-small w-100"
                    placeholder="Search"
                    value={val}
                    onChange={handleState}
                    autoFocus={true}
                />
                <div
                    className="position-absolute d-flex align-items-center end-0 w-auto"
                    onClick={() => {
                        searchSubmit();
                    }}
                >
                    <Icon className="cursor-pointer gl-icon">search</Icon>
                </div>
            </div>
        </Row>
    );
};

export default SearchBarAbsolute;
