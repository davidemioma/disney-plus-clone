import React from "react";
import { Data } from "../types";
import Thumbnail from "./Thumbnail";

interface Props {
  results: Data[];
  title: string;
  path: string;
}

const Rows = ({ results, title, path }: Props) => {
  return (
    <div className="flex flex-col space-y-2 my-8 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold capitalize">{title}</h2>

      <div className="flex p-2 space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {results?.map((result) => (
          <Thumbnail key={result.id} result={result} path={path} />
        ))}
      </div>
    </div>
  );
};

export default Rows;
