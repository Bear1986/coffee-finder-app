import React from "react";
// icons
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import {HiInformationCircle} from "react-icons/hi";
import { IconContext } from "react-icons";
// components
import AboutModel from "./AboutModel";
import Underline from "./Underline";

function Nav() {
  // styles
  const styles = {
    navWrapper: "display-flex flex-col bg-white pl-3 shadow-2xl p-1 shadow-xl",
    iconsWrapper: "justify-between w-[10rem] ",
  };
  

  return (
    <div>
      <div className={styles.navWrapper}>
        <div className="flex justify-between">
          <div>
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
              <button>
                <div className="hover:bg-yellow-400 rounded-full mt-2 ml-3 ">
                  <BsGithub />
                </div>
              </button>

              <button>
                <div className="hover:bg-yellow-400 rounded-full mt-2 ml-3">
                  <BsLinkedin />
                </div>
              </button>
              <button>
                <div className="hover:bg-yellow-400 rounded-full mt-2 ml-3">
                  <BsFacebook />
                </div>
              </button>
            </IconContext.Provider>
          </div>
          <IconContext.Provider
              value={{
                color: "black",
                size: "2.5rem",
              }}
            >
          <div className="mr-3 mt-1">
          <AboutModel
            TooltipText="about"
            TooltipDirection="bottom"
            ButtonText=
              <div >
                <HiInformationCircle/>
              </div>
           
            title="Coffee Finder"
            description="This is a website that helps you find the best coffee shops in your area. It is a work in progress and is still in development. If you have any suggestions or would like to contribute, please contact me at art.b.beckett@gmail.com"
          /> 
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <Underline />
    </div>
  );
}

export default Nav;
