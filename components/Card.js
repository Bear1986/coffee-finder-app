import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Tooltip } from "@nextui-org/react";

const Card = (props) => {
  const styles = {
    cardWrapper:
      "bg-white bg-opacity-25 backdrop-blur-xxl drop-shadow-xl p-2 m-7  rounded-2xl  m-3 hover:bg-opacity-50 transition:3",
  };
  return (
    <div className={styles.cardWrapper}>
      <Link href={props.href}>
        <h2 className="text-[2rem] p-1 text-center font-bold">{props.name}</h2>
        <div className=" bg-[#111111] w-full h-1 "></div>
        <div className=" bg-yellow-700 w-full h-1"></div>
        <div className="flex justify-center">
          <Image
            src={props.url}
            alt={props.name}
            width={200}
            height={200}
            className="rounded-2xl p-1 "
          />
        </div>
        <div className=" bg-yellow-700 w-full h-1"></div>
        <div className=" bg-[#111111] w-full h-1 "></div>
        <div className="pt-1 pb-1">
          <p>{props.text}</p>
        </div>
      </Link>
      <button className="hover:bg-yellow-400  rounded-full text-center w-[2rem] h-[2rem] ml-2">
        <Tooltip content="like" placement="bottom" color="invert">
          <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
            <AiFillLike className="mt-[0.3rem] pb-[0.1rem] " />
          </IconContext.Provider>
        </Tooltip>
      </button>
      <button className="hover:bg-yellow-400  rounded-full text-center w-[2rem] h-[2rem]">
        <Tooltip
          content="share with the world"
          placement="right"
          color="invert"
        >
          <IconContext.Provider value={{ color: "black", size: "1.5rem" }}>
            <FaShareAlt className="mt-[0.3rem]  pr-[0.3rem]" />
          </IconContext.Provider>
        </Tooltip>
      </button>
    </div>
  );
};
export default Card;
