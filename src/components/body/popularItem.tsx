import styles from "../../asserts/style/custom.module.css";
const PopularItem = () => {
    return (
        <div className="row w-100 pt-5 pb-5 justify-content-center">
            <div className="content-container col-lg-11 p-4 p-lg-5 d-flex flex-column align-items-md-center">
                <div className="row">
                    <h2 className="text-uppercase text-700">
                        popular right now
                    </h2>
                </div>
                <div className="row mt-4">
                    <div
                        className={`text-uppercase border p-2 m-1 ${styles.target_hover}`}
                        onClick={() => {
                            window.location.href = "/search?q=nmd";
                        }}
                    >
                        nmd
                    </div>
                    <div
                        className={`text-uppercase border p-2 m-1 ${styles.target_hover}`}
                        onClick={() => {
                            window.location.href = "/search?q=superstar";
                        }}
                    >
                        superstar
                    </div>
                    <div
                        className={`text-uppercase border p-2 m-1 ${styles.target_hover}`}
                        onClick={() => {
                            window.location.href = "/search?q=slides";
                        }}
                    >
                        slides
                    </div>
                    <div
                        className={`text-uppercase border p-2 m-1 ${styles.target_hover}`}
                        onClick={() => {
                            window.location.href = "/search?q=yezzy";
                        }}
                    >
                        yezzy
                    </div>
                    <div
                        className={`text-uppercase border p-2 m-1 ${styles.target_hover}`}
                        onClick={() => {
                            window.location.href = "/search?q=ultraboost";
                        }}
                    >
                        ultraboost
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;
