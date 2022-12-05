import React from "react";
import Image from "next/image";
import signature from "../public/static/signature.png";
// icons
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
// tooltip
import { Tooltip } from "@nextui-org/react";
//About
import AboutModel from "./AboutModel";

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
    <>
      <div className={styles.navWrapper}>
        <div className="flex justify-between">
          <div>
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
              <button>
                <div className={styles.iconsButton}>
                  <BsGithub />
                </div>
              </button>

              <button>
                <div className={styles.iconsButton}>
                  <BsLinkedin />
                </div>
              </button>

              <button>
                <div className={styles.iconsButton}>
                  <BsFacebook />
                </div>
              </button>
            </IconContext.Provider>
          </div>
          <AboutModel />
        </div>
      </div>
      <div className=" bg-yellow-700 w-full h-1"></div>
      <div className=" bg-[#111111] w-full h-1 mb-[1rem]"></div>
    </>
  );
}

export default Nav;
