import React from "react";
// icons
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import {HiInformationCircle} from "react-icons/hi";
import { IconContext } from "react-icons";
//About
import AboutModel from "./AboutModel";
import Underline from "./Underline";

function Nav() {
  const styles = {
    navWrapper: "display-flex flex-col bg-white pl-3 shadow-2xl p-1",
    iconsWrapper: "justify-between w-[10rem] ",
    icons: "",
    iconsButton: "hover:bg-yellow-400 rounded-full mt-2 ml-3",
    buttonWrapper: "",
    button: "pt-1 bg-yellow-400  w-[10rem] text-center w-[12rem] shadow-2xl",
  };
  return (
    <div>
      <div className={styles.navWrapper}>
        <div className="flex justify-between">
          <div>
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
              <button>
                <div className="hover:bg-[#455A64] rounded-full mt-2 ml-3">
                  <BsGithub />
                </div>
              </button>

              <button>
                <div className="hover:bg-[#0077B5] rounded-full mt-2 ml-3">
                  <BsLinkedin />
                </div>
              </button>
              <button>
                <div className="hover:bg-[#4267B2] rounded-full mt-2 ml-3">
                  <BsFacebook />
                </div>
              </button>
            </IconContext.Provider>
          </div>
          <AboutModel
            TooltipText="about"
            TooltipDirection="bottom"
            ButtonText=<IconContext.Provider
              value={{ color: "black", size: "2.5rem" }}
            >
              <HiInformationCircle className="mt-2" />
            </IconContext.Provider>
            title="Coffee Finder"
            description="This is a website that helps you find the best coffee shops in your area. It is a work in progress and is still in development. If you have any suggestions or would like to contribute, please contact me at art.b.beckett@gmail.com"
          />
        </div>
      </div>
      <Underline />
    </div>
  );
}

export default Nav;
