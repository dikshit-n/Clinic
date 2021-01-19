import React, { useState } from "react";
import EachField from "../../../UI/FormField/FormField";
import MyCard from "../../../UI/MyCard/MyCard";
import "./SignIn.css";
import FormInfo from "../../../UI/FormInfo/FormInfo";
import { loginSuccess } from "../../../Store/actions";
import { connect } from "react-redux";
import AsyncButton from "../../../UI/AsyncButton/AsyncButton";
import { deleteCookie, setCookie } from "../../../Utility/cookies";
import { axiosInstance } from "../../../Utility/axiosInstance";
import SmallSpinner from "../../../UI/SmallSpinner/SmallSpinner";

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(" ");
  const [loading, setLoading] = useState(false);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setError(" ");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const valid = () => {
    let requiredFields = [formData.email, formData.password];
    return requiredFields.every((el) => el.trim() !== "");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axiosInstance
      .post("/login", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const setToken = async () => {
            await setCookie("token", res.data.token, {
              expires: new Date(3030, 0, 1).toUTCString(),
            });
            console.log(new Date(3030, 0, 1).toUTCString());
            setTimeout(() => {
              window.location.reload();
            }, 100);
          };
          setToken();
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response !== null && err.response !== undefined) {
          if (err.response.status === 401) {
            deleteCookie("token");
            setError("Incorrect Email / Password");
          } else {
            setError(err.response.message || "Something went wrong");
          }
        } else {
          setError("Something went wrong");
        }
      });
  };

  var schema = [
    {
      name: "email",
      displayName: "Email",
      // placeholder: "Enter Email",
      className: "signup__input",
      type: "text",
      value: formData.email,
      onChange: changeHandler,
      required: true,
    },
    {
      name: "password",
      className: "signup__input",
      displayName: "Password",
      // placeholder: "Enter Password",
      type: "password",
      value: formData.password,
      onChange: changeHandler,
      required: true,
    },
  ];

  return (
    <div className="signup-container full-page-wrapper flex-column">
      <img
        src={require("../../../../assets/images/EZWalkin-Logo.jpg")}
        className="auth-page-logo"
      />
      <form
        className="signup blurred-box"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <h3>Sign in</h3>
        <FormInfo info={error} />
        {schema.map((el, index) => (
          <div key={index} className="signup__field">
            <input {...el} id={el.name} />
            <label className="signup__label" htmlFor={el.name}>
              {el.displayName}
            </label>
          </div>
        ))}
        {/* <div className="signup__field">
          <input
            className="signup__input"
            type="text"
            name="username"
            id="username"
            required
          />
          <label className="signup__label" htmlFor="username">
            Username
          </label>
        </div>
        <div className="signup__field">
          <input
            className="signup__input"
            type="text"
            name="email"
            id="email"
            required
          />
          <label className="signup__label" htmlFor="email">
            Email
          </label>
        </div>
        <div className="signup__field">
          <input
            className="signup__input"
            type="password"
            name="password"
            id="password"
            required
          />
          <label className="signup__label" htmlFor="password">
            Password
          </label>
        </div> */}
        <button disabled={!valid()} type="submit">
          {loading ? <SmallSpinner /> : "Sign in"}
        </button>
      </form>
      {/* <MyCard className="signup-form" title="LOGIN TO YOUR ACCOUNT" titleCenter>
        <FormInfo info={error} />
        <form onSubmit={submitHandler}>
          {schema.map((el, index) => (
            <EachField key={index} {...el} />
          ))}
          <AsyncButton
            disabled={!valid()}
            className="bg-green lg box-shadow-none"
            type="submit"
            loading={loading}
            // loading
          >
            Login
          </AsyncButton>
        </form>
      </MyCard> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (token, userType) => dispatch(loginSuccess(token, userType)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
