import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PlusIcon, CheckIcon } from "@heroicons/react/solid";
import { Data } from "../types";
import {
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  src: string;
  title: string;
  onClick: () => void;
  result: Data;
}

const Layout = ({ children, src, title, onClick, result }: Props) => {
  const router = useRouter();

  const [path, setPath] = useState("");

  const [user] = useAuthState(auth);

  const [watchlist] = useCollection(
    collection(db, "users", `${user?.uid}`, "watchlist")
  );

  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  useEffect(() => {
    const split = router.asPath.split("/");

    setPath(split[1]);
  }, [router.asPath]);

  useEffect(
    () =>
      setAddedToWatchlist(
        watchlist?.docs.findIndex(
          (item: any) => Number(item.id) === result.id
        ) !== -1
      ),
    [watchlist]
  );

  const watchlistHandler = async () => {
    if (addedToWatchlist) {
      await deleteDoc(
        doc(db, "users", `${user?.uid}`, "watchlist", `${result?.id}`)
      );
    } else {
      await setDoc(
        doc(db, "users", `${user?.uid}`, "watchlist", `${result?.id}`),
        {
          backdrop_path: result?.backdrop_path,
          poster_path: result?.poster_path,
          path: path,
          timestamp: serverTimestamp(),
        }
      );
    }
  };

  return (
    <section className="relative">
      <div className="relative min-h-[calc(100vh-72px)]">
        <Image src={src} layout="fill" objectFit="cover" />

        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/40 to-black/70" />
      </div>

      <div className="absolute space-y-6 inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>

        <div className="flex space-x-3 md:space-x-3 items-center">
          <button
            onClick={() => onClick()}
            className="flex items-center justify-center bg-[#f9f9f9] text-black text-sm md:text-base px-5 py-1.5 rounded hover:bg-[#c6c6c6]"
          >
            <img
              src="/images/play-icon-black.svg"
              alt=""
              className="h-6 md:h-8"
            />

            <span className="uppercase font-medium tracking-wide">Play</span>
          </button>

          <button
            onClick={() => onClick()}
            className="flex items-center justify-center text-[#f9f9f9] bg-black/30 border border-[#f9f9f9] text-sm md:text-base px-5 py-1.5 rounded hover:bg-[#c6c6c6]"
          >
            <img
              src="/images/play-icon-white.svg"
              alt=""
              className="h-6 md:h-8"
            />

            <span className="uppercase font-medium tracking-wide">Trailer</span>
          </button>

          <button className="button" onClick={watchlistHandler}>
            {!addedToWatchlist ? (
              <PlusIcon className="h-6 w-6" />
            ) : (
              <CheckIcon className="h-6 w-6" />
            )}
          </button>

          <button className="button">
            <img src="/images/group-icon.svg" alt="" />
          </button>
        </div>

        {children}
      </div>
    </section>
  );
};

export default Layout;
