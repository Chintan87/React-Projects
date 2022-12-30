import React from "react";
import AuthForm from "../components/AuthForm";

const Signin = () => {
  return (
    <div>
      <AuthForm isSignin={true} />
    </div>
  );
};

export default Signin;
