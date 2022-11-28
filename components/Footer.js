import React from "react";
import { Tooltip } from "@nextui-org/react";
import logo from "../public/static/logoWithoutBackground.png";
import Image from "next/image";


function Footer() {
   return (<>
      <div className=" bg-yellow-700 w-full h-1 mt-5"></div>
    <div className="flex flex-">

      <button>
        <Tooltip content="buy me a coffee" placement="right">
          <Image src={logo} alt="logo" width={80} height={80} />
        </Tooltip>
        </button>
        <h2>Thanks for visiting</h2>
     </div>
  </>
  );
}

export default Footer;
