
import React from "react";

const Banner = (props) => {
   const styles = {
      container:"mb-[6rem]",
      title:"letter-spacing-[0.1rem] text-[1rem] font-bold",
      button: "box-shadow bg-[#f0f0f0] hover:bg-[#e0e0e0] text-[0.8rem] font-bold py-2 px-4 rounded",
      span:""
   };
  return (
     <div className={styles.container}>
        <div>

        </div>
      <p className={styles.title}>Find me some:</p>
      <button className={styles.button}  onClick={props.handleOnClick}>{props.buttonText}</button>
    </div>
  );
};
export default Banner;
