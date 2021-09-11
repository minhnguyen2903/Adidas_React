const onFocusInput = (e: any) => {
    e.target.offsetParent.firstChild.className += " transition-label";
};

export const InputComponent = (props: any) => {
    const handleChange = (e: any, key: any) => {
        if(props.handleChange) {
            props.handleChange(key, e.target.value);
        }
    };

    return (
        <div
            className="form-input mt-4 mb-4 position-relative d-flex align-items-center"
            onFocus={(e: any) => {
                onFocusInput(e);
            }}
        >
            <label
                htmlFor={props.name}
                className={`text-capitalize position-absolute bg-white p-1`}
                style={{ left: "20px" }}
            >
                {props.label}
            </label>
            <input
                type={props.type?props.type: "text"}
                className="w-100 border border-1 border-dark pt-2 pb-2 ps-4 pe-4 bg-transparent"
                name={props.name}
                autoComplete="off"
                style={{ height: "46px" }}
                value={props.val}
                onChange={(e: any) => {
                    handleChange(e, props.name);
                }}
                
            />
        </div>
    );
};

export const DateInput = (props: any) => {
    const handleChange = (e: any, key: any) => {
        props.handleChange(key, e.target.value);
    };
    return (
        <div className="row justify-content-between">
            <div className="col">
                <div
                    className="form-input mt-4 mb-4 position-relative d-flex align-items-center"
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
                        autoComplete="off"
                        style={{ height: "42px" }}
                        min="1910-01-01" max="2020-12-31"
                        onChange={(e: any) => {
                            handleChange(e, props.name);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
