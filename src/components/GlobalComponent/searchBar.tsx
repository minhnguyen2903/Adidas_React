import { Row } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";

const SearchBar = (props: any) => {
    const style = {
        width: "200px",
        padding: "0 35px 0 10px",
        height: "32px",
        outline: "0",
        border: "solid 1px transparent",
        background: "#EBEDEE",
    };

    const handleAbsoluteSearchBar = () => {
        props.handleShow(true);
    };

    const [val, setVal] = useState("");
    const handleState = (e: any) => {
        setVal(e.target.value);
    };

    const searchSubmit = () => {
        if(val !== "") {
            window.location.href = `/search?q=${val}`;
        }
    };

    return (
        <Row
            className="search-bar position-relative align-items-center me-3 me-lg-0"
            onKeyUp={(event: any) => {
                if (event.key === "Enter") {
                    searchSubmit();
                }
            }}
        >
            <input
                type="text"
                autoComplete="off"
                style={style}
                className="text-small me-3 d-none d-lg-block"
                placeholder="Search"
                value={val}
                onChange={handleState}
            />
            <div
                className="position-absolute d-lg-flex d-none  align-items-center"
                style={{ right: "20px" }}
                onClick={() => {
                    searchSubmit();
                }}
            >
                <Icon className="cursor-pointer gl-icon">search</Icon>
            </div>
            <div
                className="position-absolute d-flex d-lg-none  align-items-center"
                style={{ right: "20px" }}
                onClick={() => {
                    handleAbsoluteSearchBar();
                }}
            >
                <Icon className="cursor-pointer gl-icon">search</Icon>
            </div>
        </Row>
    );
};

export default SearchBar;
