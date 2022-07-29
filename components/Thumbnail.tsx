import React from "react";
import Image from "next/image";
import { Data } from "../types";
import { useRouter } from "next/router";

interface Props {
  result: Data;
  path: string;
}

const Thumbnail = ({ result, path }: Props) => {
  const router = useRouter();

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      className="thumbnail"
      onClick={() => router.push(`/${path}/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Thumbnail;
