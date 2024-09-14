import React from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../Components/UI/3d-card";

export default function Procard(props: any): React.ReactNode {
  return (
    <>
      <CardContainer className="inter-var mukta h-[27rem]">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {props.title}
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
              className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <Link
              to={props.dep}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Deployed →
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
