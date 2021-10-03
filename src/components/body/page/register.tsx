import { ButtonActive } from "../../GlobalComponent/button";
import Icon from "@material-ui/core/Icon";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import FacebookLogo from "../../../asserts/img/icon/facebook-circular-logo.svg";
import axios from "axios";
import {
  InputComponent,
  DateInput,
} from "../../GlobalComponent/inputComponent";
import { CheckBoxNoAction } from "../../GlobalComponent/myCheckBox";
const initialUser = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  location: "",
  birth: "",
  email: "",
  password: "",
}
const AccountRegister = () => {
  const [disabled, setDisabled] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isDuplicate, setISDuplicate] = useState(false);
  const [user, setUser] = useState(initialUser);

  const responseGoogle = (response: any) => {
    if (response) {
      sessionStorage.setItem("Google_account", JSON.stringify(response));
      // window.location.href = "/";
    } else {
      sessionStorage.removeItem("Google_account");
    }
  };

  const responseFacebook = (response: any) => {
    if (response.status !== "unknown") {
      sessionStorage.setItem("Facebook_account", JSON.stringify(response));
      window.location.href = "/";
    } else {
      sessionStorage.removeItem("Facebook_account");
    }
  };

  const handleChange = (key: any, value: any) => {
    setUser((prevState: any) => ({ ...prevState, [key]: value }));
  };

  const submitAction = async () => {
    const data = new FormData();
    setDisabled(true);
    setISDuplicate(false);
    Object.keys(user).forEach((element: any) => {
      if ((user as any)[element] === "") {
        setIsValid(false);
        setDisabled(false);
      }
    });
    if (isValid) {
      data.append("firstName", user.firstName);
      data.append("lastName", user.lastName);
      data.append("phoneNumber", user.phoneNumber);
      data.append("location", user.location);
      data.append("birth", user.birth);
      data.append("email", user.email);
      data.append("password", user.password);
      await axios
        .post(`${process.env.REACT_APP_SERVER_URL}/register`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res: any) => {
          localStorage.setItem("__token", res.data);
          window.location.href = "/";
        })
        .catch((err: any) => {
          setDisabled(false);
          setISDuplicate(true);
          setUser(initialUser);
          throw err;
        });
    }
  };
  return (
    <main>
      <div className="row w-100 justify-content-center">
        <div className="content-container col-lg-10">
          <div className="row w-100">
            <div className="col-md-6 border-start border-end p-5 col-12">
              <h2 className="text-uppercase text-800 text-title">register</h2>
              <div>
                <div>
                  <p>Sign up with</p>
                  <div className="row">
                    <div className="col-6 pe-2">
                      <GoogleLogin
                        clientId="733293982707-ame53i3dj0oe9u4k6kfj4g0eeg9rcm2j.apps.googleusercontent.com"
                        buttonText="GOOGLE"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                        className="login_styled w-100"
                      />
                    </div>
                    <div className="col-6 ps-2">
                      <FacebookLogin
                        appId="874709023460058"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        textButton="FACEBOOK"
                        cssClass="login_styled w-100"
                        icon={<img src={FacebookLogo} alt="" height="18"></img>}
                      />
                    </div>
                  </div>
                </div>
                <span className="d-block mt-3 ">OR</span>
                <div className="mt-3">
                  <h3
                    className="text-uppercase text-800"
                    style={{ fontSize: "1.2em" }}
                  >
                    your name
                  </h3>
                  <InputComponent
                    label="First Name"
                    name="firstName"
                    isValid={isValid}
                    val={user.firstName}
                    handleChange={handleChange}
                  />
                  <InputComponent
                    label="Last Name"
                    name="lastName"
                    isValid={isValid}
                    val={user.lastName}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <h3
                    className="text-uppercase text-800"
                    style={{ fontSize: "1.2em" }}
                  >
                    for delivery
                  </h3>
                  <InputComponent
                    label="Phone Number"
                    name="phoneNumber"
                    isValid={isValid}
                    val={user.phoneNumber}
                    handleChange={handleChange}
                  />
                  <InputComponent
                    label="Location"
                    name="location"
                    isValid={isValid}
                    val={user.location}
                    handleChange={handleChange}
                  />
                </div>

                <div className="mt-3">
                  <h3
                    className="text-uppercase text-800 mb-3"
                    style={{ fontSize: "1.2em" }}
                  >
                    date of birth
                  </h3>
                  <DateInput
                    name="birth"
                    handleChange={handleChange}
                    isValid={isValid}
                    val={user.birth}
                  />
                  <p>
                    We collect date of birth to comply with our{" "}
                    <a
                      href="/privacy"
                      className="text-underline text-hover-bg-dark"
                    >
                      {" "}
                      Privacy Notice
                    </a>
                    . Plus you will get a surprise from us on your birthday!
                  </p>
                </div>
                <div className="mt-3">
                  <h3
                    className="text-uppercase text-800 mb-3"
                    style={{ fontSize: "1.2em" }}
                  >
                    login details
                  </h3>
                  <InputComponent
                    label="email"
                    name="email"
                    isValid={isValid}
                    val={user.email}
                    handleChange={handleChange}
                  />
                  <InputComponent
                    isValid={isValid}
                    label="password"
                    name="password"
                    val={user.password}
                    type="password"
                    handleChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <div className="row w-100 m-0">
                    <CheckBoxNoAction />
                    <p
                      style={{
                        width: "calc(100% - 60px)",
                      }}
                    >
                      I have read, understood and accepted the{" "}
                      <a
                        href="/privacy"
                        className="text-underline text-hover-bg-dark"
                      >
                        {" "}
                        Privacy Notice
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-underline text-hover-bg-dark"
                      >
                        {" "}
                        Terms and Conditions
                      </a>
                      .
                    </p>
                  </div>
                  <div className="row">
                    <CheckBoxNoAction />
                    <p
                      style={{
                        width: "calc(100% - 60px)",
                      }}
                    >
                      I hereby consent to the use of my personal data for
                      marketing and promotional purposes as set out in the
                      adidas{" "}
                      <a
                        href="/privacy"
                        className="text-underline text-hover-bg-dark"
                      >
                        {" "}
                        Privacy Notice
                      </a>
                    </p>
                  </div>
                  <div className="row">
                    <CheckBoxNoAction />
                    <p
                      style={{
                        width: "calc(100% - 60px)",
                      }}
                    >
                      I hereby consent to the transfer, sharing, use, collection
                      and disclosure of my personal data to third parties as set
                      out in the adidas{" "}
                      <a
                        href="/privacy"
                        className="text-underline text-hover-bg-dark"
                      >
                        {" "}
                        Privacy Notice
                      </a>
                      .{" "}
                    </p>
                  </div>
                </div>
                {isDuplicate?<p className="m-0 p-0 ms-2 mt-1" style={{color: "red"}}>User Already Exist. Please Login</p>: null}
                <div className="submit-button">
                  <ButtonActive
                    text="REGISTER"
                    action={submitAction}
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 border-end p-5 col-12">
              <h2 className="text-uppercase text-800 text-title">
                create an account
              </h2>
              <p className="text-small">
                Your Global Login will give you access to:
              </p>
              <ul className="mb-4">
                <li className="d-flex align-items-center mb-1 index-9">
                  <Icon className="me-2" style={{ fontSize: "1em" }}>
                    check
                  </Icon>
                  <span className="text-small">
                    A single global login to interact with adidas products and
                    services
                  </span>
                </li>
                <li className="d-flex align-items-center mb-1 index-9">
                  <Icon className="me-2" style={{ fontSize: "1em" }}>
                    check
                  </Icon>
                  <span className="text-small">Checkout faster</span>
                </li>
                <li className="d-flex align-items-center mb-1 index-9">
                  <Icon className="me-2" style={{ fontSize: "1em" }}>
                    check
                  </Icon>
                  <span className="text-small">
                    View your personal order history
                  </span>
                </li>
                <li className="d-flex align-items-center mb-1 index-9">
                  <Icon className="me-2" style={{ fontSize: "1em" }}>
                    check
                  </Icon>
                  <span className="text-small">
                    Add or change email preferences
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountRegister;
