import React from "react";
import Button from "./Button";
import Input from "./Input";

const AuthForm = ({ isSignin, isSingup }) => {
  return (
    <div className="grid grid-cols-20 pt-60 place-items-center">
      <h1 className="text-center m-4 font-bold text-3xl font-serif">
        {isSignin ? "Sign In" : "Sign Up"}
      </h1>
      <div>
        <Button
          configClassNames="bg-blue-500 text-white p-2 rounded-md font focus:outline-1"
          buttonText="Sign In using Open ID Connect"
          buttonStyles=""
        />
      </div>
      <div className="mt-5 text-sm font-light">or sign in with your email</div>
      <form action="" className="">
        <div className="my-6">
          <label htmlFor="email" className="text-slate-700">
            Email Address
          </label>
          <Input
            inputConfig={{
              type: "email",
              name: "email",
              placeholder: "Enter your email address",
              className:
                "py-1.5 px-2 mt-1 outline-none border border-blue-400 rounded-md",
            }}
          />
        </div>
        <div className="my-6">
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="text-slate-700">
              Password
            </label>
            <a
              href="#"
              className="text-sm ml-5 font-medium text-blue-600 dark:text-blue-500 hover:underline "
            >
              Forgot password?
            </a>
          </div>
          <Input
            inputConfig={{
              type: "password",
              name: "password",
              placeholder: "Enter your password",
              className:
                "py-1.5 px-2 mt-1 outline-none border border-blue-400 rounded-md",
            }}
          />
        </div>
        <div className="">
          <Button
            configClassNames="w-full text-center mr-4 bg-green-500 text-white p-2 rounded-md font focus:outline-1"
            buttonText="Sign In"
            buttonStyles="text-center"
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
