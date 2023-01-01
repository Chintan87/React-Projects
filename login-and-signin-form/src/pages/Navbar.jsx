import React from "react";

import Button from "../components/Button";
import Logo from "../assets/images/Logo-01.png";

const Navbar = () => {
  return (
    <div className="px-16 my-5 flex items-center justify-between">
      <div className="">
        <img src={Logo} alt="Nav Logo" className="w-13 h-12" />
      </div>
      <div className="flex items-center" style={{ margin: "5px 20px" }}>
        <Button
          buttonText="New to Country?"
          buttonStyles=""
          configClassNames="px-5"
        />
        <Button
          buttonText="Create an account"
          buttonStyles=""
          configClassNames="p-2 px-5 border rounded-lg shadow-sm hover:shadow-md transition duration-100"
        />
      </div>
    </div>
  );
};

export default Navbar;
