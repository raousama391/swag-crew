import React from "react";
import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomBtton from "../custom-button/custom-button";

import initAuth from "../../firebase/firebase.init";
import {  getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";

import "./sign-in.scss";


initAuth()
const provider = new GoogleAuthProvider();

const handleGoogle = ()=> {
    const auth = getAuth()

    signInWithPopup(auth, provider).then((resp)=>{
        const user = resp
        console.log(user)
    })
}




function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (e) =>{
    e.preventDefault();
    setState({ email: "", password: "" });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I Already Have Account</h2>
      <span>Sign in With your Email and Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={state.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={state.password}
          handleChange={handleChange}
          required
        />
        <CustomBtton type="submit">Sign In</CustomBtton>
        <CustomBtton onClick={handleGoogle}>Sign In with Google</CustomBtton>
      </form>
    </div>
  );
}

export default SignIn;
