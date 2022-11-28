
import React from "react";
import { Tooltip } from "@nextui-org/react";

const Banner = (props) => {
   const styles = {
     container: "mb-[6rem] flex flex-row justify-around  p-1",
     button: " bg-[#f0f0f0]  text-[2rem] font-bold py-5 px-5 m1 hover:bg-yellow-700 ",
   };
   return (
      <>
         
         <div className={styles.container}>
            <Tooltip content="stores near me" placement="bottom">
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonTextStores}
               </button>
            </Tooltip>
            <Tooltip content="best beans to buy" placement="bottom">
      <button className={styles.button} onClick={props.handleOnClick}>
        {props.buttonTextProducts}
               </button>
            </Tooltip>

     </div>
  </>
  );
};
export default Banner;
