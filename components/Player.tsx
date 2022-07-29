import React from "react";
import { XIcon } from "@heroicons/react/solid";
import { Data } from "../types";
import ReactPlayer from "react-player/lazy";

interface Props {
  showPlayer: boolean;
  onClick: () => void;
  result: Data;
}

const Player = ({ showPlayer, onClick, result }: Props) => {
  const index = result.videos?.results?.findIndex(
    (element) => element.type === "Trailer"
  );

  return (
    <div
      className={`${
        showPlayer ? "opacity-100 z-40" : "opacity-0"
      } absolute top-24 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000`}
    >
      <div className="bg-black p-3.5 text-[#f9f9f9] flex items-center justify-between">
        <span className="font-semibold">Play trailer</span>

        <button
          onClick={onClick}
          className="flex items-center justify-center w-8 h-8 rounded-full opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
        >
          <XIcon className="h-5" />
        </button>
      </div>

      <div className="relative pt-[56.25%]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${result?.videos?.results?.[index]?.key}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          controls={true}
          playing={showPlayer}
        />
      </div>
    </div>
  );
};

export default Player;
