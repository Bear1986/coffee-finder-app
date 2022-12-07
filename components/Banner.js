import React from "react";
import { Tooltip } from "@nextui-org/react";

const Banner = (props) => {
  const styles = {
    container: "flex flex-row justify-around p-1 mb-10",
    button:
      " bg-[#f0f0f0]  sm:text-[2rem] md:text-[2.5rem] font-bold py-5 px-5 m1 hover:bg-[#623B24] hover:text-white shadow-2xl rounded-2xl ",
  };
  return (
    <div className={styles.container}>
      <Tooltip content="stores near me" placement="topStart" color="invert">
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonTextStores}
        </button>
      </Tooltip>
      <Tooltip content="best beans to buy" placement="topEnd" color="invert">
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonTextProducts}
        </button>
      </Tooltip>
    </div>
  );
};
export default Banner;
