import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  results: any;
  title: string;
}

const WatchList = ({ results, title }: Props) => {
  const router = useRouter();

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="flex flex-col space-y-2 my-8 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold capitalize">{title}</h2>

      <div className="flex p-2 space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {results?.map((doc: any, i: number) => (
          <div
            className="thumbnail"
            onClick={() => router.push(`/${doc.data().path}/${doc.id}`)}
          >
            <Image
              src={
                `${BASE_URL}${
                  doc.data().backdrop_path || doc.data().poster_path
                }` || `${BASE_URL}${doc.data().poster_path}`
              }
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
