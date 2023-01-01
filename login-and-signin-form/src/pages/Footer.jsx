import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full px-20 py-11 flex justify-between items-center">
      <div className="">
        <p className="text-left">&copy;2021 Countly Limited.</p>
      </div>
      <div>
        <ul className="flex items-center ">
          <li>
            <a href="#" className="mr-4 text-blue-700">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 text-blue-700">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 text-blue-700">
              Security
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 text-blue-700">
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
