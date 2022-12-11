import { useRouter } from "next/router";
import React from "react";

interface Props {
  Icon?: any;
  text: string;
  imgLink?: string;
  to?: string;
  isHome?: boolean;
}

const Links = ({ Icon, text, imgLink, to, isHome }: Props) => {
  const router = useRouter();

  return (
    <>
      {!isHome ? (
        <a
          href={to}
          className="text-white group flex items-center space-x-2 cursor-pointer"
        >
          {imgLink ? (
            <img className="h-5" src={imgLink} alt="" />
          ) : (
            <Icon className="h-4" />
          )}

          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            {text}
          </span>
        </a>
      ) : (
        <div
          onClick={() => (isHome ? router.push(`${to}`) : "")}
          className="text-white group flex items-center space-x-2 cursor-pointer"
        >
          {imgLink ? (
            <img className="h-5" src={imgLink} alt="" />
          ) : (
            <Icon className="h-4" />
          )}

          <span className="link">{text}</span>
        </div>
      )}
    </>
  );
};

export default Links;
