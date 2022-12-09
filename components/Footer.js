import React from "react";
import { Tooltip } from "@nextui-org/react";
// import logo from "../public/static/logoWithoutBackground.png";
import Overline from "./Overline";
import Image from "next/image";
import signature from "../public/static/signature.png";
import AboutModel from "./AboutModel";

import { IconContext } from "react-icons";
import { SiBuymeacoffee } from "react-icons/si";

function Footer() {
  return (
    <div>
      <Overline />
      <div className=" bg-white shadow-xl">
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
