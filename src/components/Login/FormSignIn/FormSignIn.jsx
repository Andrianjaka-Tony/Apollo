import React, { useState } from "react";
import RowInput from "../RowInput/RowInput";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import LogoBig from "../../../assets/icons/LogoBig";
import useIdentity from "../../../hooks/useIdentity";
import "./FormSignIn.sass";

const FormSignIn = ({ go = () => {} }) => {
  const [formData, setFormData] = useState({});
  const { signIn } = useIdentity();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    signIn(formData, "/");
  };

  const handleInputForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="sign_in_form">
      <div className="logo">
        <LogoBig />
      </div>
      <div className="title">Sign in</div>
      <div className="subtitle">Let's dive with us in this incredible journey.</div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <RowInput title="Email" type="email" id="email" name="email" onChange={handleInputForm} fullWidth />
        <RowInput title="Password" type="password" id="password" name="password" onChange={handleInputForm} fullWidth />
        <div className="button">
          <button>Login</button>
        </div>
        <div className="sign_up_link">
          <div className="text">Don't have an account ?</div>
          <div className="link" onClick={go}>
            Register here.
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
