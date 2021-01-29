import React, { useState } from "react";
import EachField from "../../../UI/FormField/FormField";
import MyCard from "../../../UI/MyCard/MyCard";
import "./SignUp.css";
// import SmallSpinner from "../../../UI/SmallSpinner/SmallSpinner";
import FormInfo from "../../../UI/FormInfo/FormInfo";
import { connect } from "react-redux";
import { loginSuccess, setVerified } from "../../../Store/actions";
import AsyncButton from "../../../UI/AsyncButton/AsyncButton";
import { axiosInstance } from "../../../Utility/axiosInstance";
import SmallSpinner from "../../../UI/SmallSpinner/SmallSpinner";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    email: props.email,
    password: "",
  });
  const [formInfo, setFormInfo] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const changeHandler = (event) => {
    setFormInfo(" ");
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const valid = () => {
    let requiredFields = [props.email, formData.password, confirmPassword];
    return (
      requiredFields.every((el) => el.trim() !== "") &&
      formData.password === confirmPassword
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axiosInstance
      .post("/giri/project", { ...formData, token: props.token })
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.status === 200) {
          props.setVerified(false);
          props.history.push("/auth");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setFormInfo("Something went wrong !");
      });
  };

  var schema = [
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
    {
      name: "confirmPassword",
      className: "signup__input",
      displayName: "Confirm Password",
      // placeholder: "Confirm Password",
      type: "password",
      value: confirmPassword,
      onChange: confirmPasswordChangeHandler,
      required: true,
    },
  ];

  return (
    <div className="signup-container full-page-wrapper flex-column auth-background">
      <img
        src={require("../../../../assets/images/EZWalkin-Logo.jpg")}
        className="main-logo auth-page-logo"
      />
      {/* <MyCard
        className="signup-form"
        title={"Create Your Account For " + props.email}
        titleCenter
      > */}
      <form className="signup blurred-box" onSubmit={submitHandler}>
        <h3>Create Your Account For {props.email.toLowerCase()}</h3>
        {formData.password !== confirmPassword ? (
          <FormInfo info="Password Not Equal !" />
        ) : (
          <FormInfo info={formInfo} />
        )}
        {schema.map((el, index) => (
          <div key={index} className="signup__field">
            <input {...el} id={el.name} />
            <label className="signup__label" htmlFor={el.name}>
              {el.displayName}
            </label>
          </div>
        ))}
        <button disabled={!valid()} type="submit">
          {loading ? <SmallSpinner /> : "Create"}
        </button>
        {/* {schema.map((el, index) => (
            <EachField key={index} {...el} />
          ))}
          {formData.password !== confirmPassword ? (
            <FormInfo info="Password Not Equal !" />
          ) : (
            <FormInfo info={formInfo} />
          )}
          <AsyncButton
            disabled={!valid()}
            className="bg-green lg box-shadow-none"
            type="submit"
            loading={loading}
          >
            Create
          </AsyncButton> */}
      </form>
      {/* </MyCard> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccessful: (token, userType) =>
      dispatch(loginSuccess(token, userType)),
    setVerified: (status) => dispatch(setVerified(status)),
  };
};

const matchStateToProps = (state) => {
  return {
    token: state.login.temporaryToken,
    email: state.login.email,
  };
};

export default connect(matchStateToProps, mapDispatchToProps)(SignUp);
