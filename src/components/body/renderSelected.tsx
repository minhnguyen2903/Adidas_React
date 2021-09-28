import Icon from "@material-ui/core/Icon";
const RenderSelectedFilter = (props: any) => {
    const removeFilter = (element: any) => {
        const locate = window.location.href;
        const filter = [`&gender=${element}`, `?gender=${element}`,
        `&division=${element}`, `?division=${element}`,
        `&sports=${element}`, `?sports=${element}`,
        `&product%20type=${element}`, `?product%20type=${element}`,
        `&brand=${element}`, `?brand=${element}`,
        `&size=${element}`, `?size=${element}`,
        `&brand=${element}`, `?brand=${element}`,
        `&colour=${element}`, `?colour=${element}`,]

        filter.forEach((value: string) => {
            if(locate.includes(value)) {
                window.location.href = locate.replace(value, "").replace("search&", "search?");
            }
        })
    }

    const render = props.filter.map((element: any, index: number) => {
        if(element !== "") {
            return (
                <div
                    key={index}
                    className="d-flex align-items-center rounded-1 ps-1 pe-1 me-2 cursor-pointer"
                    onClick={() => {removeFilter(element)}}
                    style={{
                        width: "fit-content",
                        background: "#ebedee",
                    }}
                >
                    <span>{element.replaceAll("%20", " ")}</span>
                    <Icon className="index-1 ms-1" style={{ fontSize: "0.8em" }}>
                        close
                    </Icon>
                </div>
            );
        } else {
            return null
        }
    });

    return <div className="d-flex">{render}</div>;
};

export default RenderSelectedFilter;
