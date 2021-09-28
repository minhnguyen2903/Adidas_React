import { ButtonActive } from "../../GlobalComponent/button";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
import FacebookLogo from "../../../asserts/img/icon/facebook-circular-logo.svg";
import { useDispatch } from "react-redux";
import { SignIn } from "../../../redux/action/action";
import { InputComponent } from "../../GlobalComponent/inputComponent";
import axios from "axios";
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [disabled, setDisabled] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const dispatch = useDispatch();
    const responseGoogle = (response: any) => {
        if (response) {
            sessionStorage.setItem("_user", JSON.stringify(response));
            if(response.error) {
                sessionStorage.removeItem("_user");
                return
            }
            window.location.href = "/";
        } else {
            sessionStorage.removeItem("_user");
        }
    };

    const responseFacebook = (response: any) => {
        if (response.status !== "unknown") {
            dispatch(SignIn(true));
            sessionStorage.setItem(
                "_user",
                JSON.stringify(response)
            );
            window.location.href = "/";
        } else {
            sessionStorage.removeItem("_user");
        }
    };

    const handleChange = (key: any, value: any) => {
        setUser((prevState: any) => ({ ...prevState, [key]: value }));
    };

    const onFormSubmit = async (e: any) => {
        try {
            e.preventDefault();
            setDisabled(true);
            const data = new FormData();
            data.append("email", user.email);
            data.append("password", user.password);
            axios
                .post(`${process.env.REACT_APP_SERVER_URL}/login`, data)
                .then((res: any) => {
                    setInvalid(false);
                    localStorage.setItem("__token", res.data);
                    dispatch(SignIn(true));
                    window.location.href = "/";
                })
                .catch((err: any) => {
                    setInvalid(true);
                    setDisabled(false);
                });
        } catch (err: any) {
            throw err;
        }
    };

    return (
        <main>
            <div className="row w-100 justify-content-center">
                <div className="content-container col-lg-10">
                    <div className="row w-100">
                        <div className="col-sm-5 border p-5 col-12">
                            <h2 className="text-uppercase text-800 text-title">
                                log in
                            </h2>
                            <p className=" text-small text-capitalize text-underline text-hover-bg-dark">
                                forgotten your password?
                            </p>
                            <form onSubmit={onFormSubmit}>
                                <div>
                                    {" "}
                                    <InputComponent
                                        label="email"
                                        name="email"
                                        type="email"
                                        handleChange={handleChange}
                                    />
                                </div>
                                <div>
                                    {" "}
                                    <InputComponent
                                        label="password"
                                        name="password"
                                        type="password"
                                        handleChange={handleChange}
                                    />
                                </div>
                                {invalid ? (
                                    <div className="text-danger mt-3 mb-3">
                                        Invalid email or password
                                    </div>
                                ) : null}
                                <div className="submit-button">
                                    <ButtonActive
                                        text="LOG IN"
                                        disabled={disabled}
                                    />
                                    <span className="d-block mt-3 ">OR</span>
                                    <GoogleLogin
                                        clientId="733293982707-ame53i3dj0oe9u4k6kfj4g0eeg9rcm2j.apps.googleusercontent.com"
                                        buttonText="GOOGLE"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={"single_host_origin"}
                                        className="login_styled"
                                    />
                                    <ReactFacebookLogin
                                        appId="874709023460058"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        textButton="FACEBOOK"
                                        cssClass="login_styled"
                                        icon={
                                            <img
                                                src={FacebookLogo}
                                                alt=""
                                                height="18"
                                            ></img>
                                        }
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-7 border p-5">
                            <h2 className="text-uppercase text-800 text-title">
                                create an account
                            </h2>
                            <p className="text-small">
                                Creating an account is easy. Enter your email
                                address and fill in the form on the next page
                                and enjoy the benefits of having an account.
                            </p>
                            <ul className="mb-4">
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        Simple overview of your personal
                                        information
                                    </span>
                                </li>
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        Faster checkout
                                    </span>
                                </li>
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        A single global login to interact with
                                        adidas products and services
                                    </span>
                                </li>
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        Exclusive offers and promotions
                                    </span>
                                </li>
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        Latest products arrivals
                                    </span>
                                </li>
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        New season and limited collections
                                    </span>
                                </li>
                                <li className="d-flex align-items-center mb-1">
                                    <Icon
                                        className="me-2"
                                        style={{ fontSize: "1em" }}
                                    >
                                        check
                                    </Icon>
                                    <span className="text-small">
                                        Upcoming events
                                    </span>
                                </li>
                            </ul>
                            <ButtonActive
                                text="register"
                                action={() => {
                                    window.location.href = "/account-register";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
