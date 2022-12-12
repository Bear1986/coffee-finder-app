import React from "react";
import Image from "next/image";
import Link from "next/link";
// components
import Underline from "./Underline";
import Overline from "./Overline";
//images
import Like from "../public/static/likedIcon.png";
// icons
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { FaPoop } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Tooltip } from "@nextui-org/react";
//state
import { useState } from "react";

const Card = (props) => {
  const styles = {
    cardWrapper:
      "bg-white bg-opacity-25 backdrop-blur-xxl drop-shadow-xl p-2 m-7  rounded-2xl  m-3 hover:bg-opacity-50 transition:3 h-70 w-70 shadow-xl",
  };
  // is liked
  const [isLiked, setIsLiked] = useState(false);
  const hadeleClickIsLiked = () => {
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };
  // is disliked
  const [isDisliked, setIsDisliked] = useState(false);
  const hadeleClickIsDisliked = () => {
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };
  // is removed
  const [isRemoved, setIsRemoved] = useState(false);
  const hadeleClickIsRemoved = () => {
    setIsRemoved(!isRemoved);
    setIsLiked(false);
    setIsDisliked(false);
  };

  return (
    <div className={styles.cardWrapper}>
      <Link href={props.href}>
        <h2 className="text-[2rem] p-1 text-center font-bold">{props.name}</h2>
        {/*is liked image*/}
        {isLiked && (
          <div className="absolute top-0 left-0  text-center w-[2.5rem] h-[2.5rem] bg-white m-1 rounded-full  shadow-xl">
            <Image src={Like} alt="liked" width={50} height={20} />
          </div>
        )}
        {/*is disliked*/}
        {isDisliked && (
          <div className="absolute top-0 right-0  text-center w-[2.5rem] h-[2.5rem] bg-white m-1 rounded-full shadow-md">
            <FaPoop className="text-yellow-800 text-4xl pl-1" />
          </div>
        )}

        <Overline />
        <div className="flex">
          <Image
            src={props.url}
            alt={props.name}
            width={400}
            height={100}
            className="rounded-2xl p-1 "
          />
        </div>
        <Underline />
        <div className="pt-1 pb-1">
          <p>{props.text}</p>
        </div>
      </Link>
      <div className="flex space-x-3 pt-2 pb-2 pl-2">
        <div className="flex justify-center content-center">
          <button className="hover:bg-yellow-400  rounded-full text-center w-[2rem] h-[2rem] flex justify-center content-center">
            <Tooltip content="like" placement="bottom" color="invert">
              <IconContext.Provider value={{ color: "black", size: "2rem" }}>
                <AiFillLike
                  
                  onClick={
                    isLiked
                      ? () => {
                          setIsLiked(!isLiked);
                          setIsDisliked(false);
                        }
                      : hadeleClickIsLiked
                  }
                />
              </IconContext.Provider>
            </Tooltip>
          </button>
        </div>
        <button className="hover:bg-yellow-400  rounded-full text-center w-[2rem] h-[2rem] pt-1 flex justify-center content-center">
          <Tooltip content="dislike" placement="bottom" color="invert">
            <IconContext.Provider value={{ color: "black", size: "2rem" }}>
              <AiFillDislike
                onClick={
                  isDisliked
                    ? () => {
                        setIsDisliked(!isDisliked);
                        setIsLiked(false);
                      }
                    : hadeleClickIsDisliked
                }
              />
            </IconContext.Provider>
          </Tooltip>
        </button>
        {isLiked || isDisliked ? (
          <button className=" rounded-full text-center w-[2rem] h-[2rem]  flex justify-center content-center">
            <Tooltip
              content={isLiked ? "remove your like" : "remove your dislike"}
              placement="right"
              color="invert"
            >
              <IconContext.Provider value={{ color: "black", size: "2rem" }}>
                <IoRemoveCircleSharp
                  onClick={
                    isRemoved
                      ? () => {
                          setIsRemoved(!isRemoved);
                          setIsLiked(false);
                          setIsDisliked(false);
                        }
                      : hadeleClickIsRemoved
                  }
                />
              </IconContext.Provider>
            </Tooltip>
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Card;
