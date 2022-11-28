
import React from "react";
import Image from "next/image";
import signature from "../public/static/signature.png";
// icons
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
// tooltip
import { Tooltip } from "@nextui-org/react";

function Nav() {
  const styles = {
    navWrapper: "display-flex flex-col bg-yellow-700 mb-[1rem] p-1 ",
    iconsWrapper: "justify-between w-[10rem]",
    icons: "",
    iconsButton: "hover:bg-yellow-500 rounded-full mt-2 ml-3",
    buttonWrapper: "",
    button: "pt-1 bg-yellow-400  w-[10rem] text-center w-[12rem]",
  };
  return (

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
        <Tooltip content="about me" placement="bottom">
          <button className={styles.button}>
            <Image src={signature} alt="signature" />
          </button>
        </Tooltip>
      </div>
      </div>
  );
}

export default Nav;
