import React from "react";
import { Tooltip } from "@nextui-org/react";
// import logo from "../public/static/logoWithoutBackground.png";
import Image from "next/image";
import signature from "../public/static/signature.png";
import AboutModel from "./AboutModel";

import { IconContext } from "react-icons";
import { SiBuymeacoffee } from "react-icons/si"



function Footer() {
  
  return (
    <div>
      <div className=" bg-[#111111] w-full h-1 mt-6"></div>
      <div className=" bg-yellow-700 w-full h-1"></div>
      <div className=" bg-white">
        <div className="display-flex flex-row flex justify-between">
          <button
            className="p-3"
            // buymeacoffee.com/?via=artbbecketX
          >
            <Tooltip
              content={"buy me a coffee"}
              placement="right"
              color="invert"
            >
              <IconContext.Provider value={{ color: "black", size: "2.5rem" }}>
                <SiBuymeacoffee />
              </IconContext.Provider>
            </Tooltip>
          </button>
          <div className="p-3">
          <AboutModel
            TooltipText="about me"
            TooltipDirection="top"
            ButtonText=<Image
              src={signature}
              alt="signature of the author of the site"
              width={200}
            />
            title="About Me"

            />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
