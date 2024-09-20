import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../Components/UI/3d-card";
import Code from "../Icons/Code";
import Cloud from "../Icons/Cloud";

export default function Procard(props: any): React.ReactNode {
  return (
    <>
      <CardContainer className="inter-var mukta h-[28rem]">
        <CardBody className="hover:border-[2px] transition-all duration-300 border border-gray-600/50  hover:border-[#6EACDA] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem
            translateZ="50"
            className="text-xl flex gap-2 items-center font-bold text-[#6EACDA]"
          >
           <Code />  {props.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {props.desc}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={props.img}
              height="900"
              width="900"
              className="h-56 w-full object-cover rounded-xl hover:sha group-hover/card:shadow-xl"
              alt="thumbnail"
            />
            <div className="grid grid-cols-2 mt-4">
              <p className="text-[#6EACDA] mukta text-xs text-left">{props.auth}</p>
              <p className="text-[#6EACDA] mukta text-xs text-right">
                {props.used}</p>
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <Link
              to={props.dep}
              target="__blank"
              className="px-4 py-2 flex gap-2 items-center rounded-xl text-xs font-normal dark:text-white"
            >
              <Cloud /> Deployed →
            </Link>
            <Link
              to={props.gh}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Github
            </Link>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
