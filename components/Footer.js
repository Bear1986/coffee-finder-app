import React from "react";
import { Tooltip } from "@nextui-org/react";
// import logo from "../public/static/logoWithoutBackground.png";
// import Image from "next/image";
import { IconContext } from "react-icons";
import {SiBuymeacoffee} from "react-icons/si"


function Footer() {
  
  return (
    <>
      <div className=" bg-[#111111] w-full h-1 mt-6"></div>
      <div className=" bg-yellow-700 w-full h-1"></div>
      <div className="flex bg-white">
        <button
          className="p-3"
        // buymeacoffee.com/?via=artbbecketX
        >
          <Tooltip content={"buy me a coffee"} placement="right" color="invert">
            <IconContext.Provider value={{ color: "black", size: "2.5rem" }}>
              <SiBuymeacoffee />
            </IconContext.Provider>
          </Tooltip>
        </button>
      </div>
    </>
  );
}

export default Footer;
