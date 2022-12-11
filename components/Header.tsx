import React from "react";
import Image from "next/image";
import { HomeIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";
import Links from "./Links";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, signInWithGoogle } from "../firebase";
import { useRouter } from "next/router";
import { doc, setDoc } from "@firebase/firestore";
import { LogoutIcon } from "@heroicons/react/outline";

const Header = () => {
  const router = useRouter();

  const [user] = useAuthState(auth);

  const loginHandler = async () => {
    await signInWithGoogle().then((res) => {
      setDoc(
        doc(db, "users", res.user.uid),
        {
          name: res.user.displayName,
          email: res.user.email,
          verified: res.user.emailVerified,
          photoUrl: res.user.photoURL,
        },
        { merge: true }
      );
    });
  };

  const logoutHandler = async () => {
    await auth.signOut().then(() => router.push("/"));
  };

  return (
    <header className="sticky top-0 w-full h-[72px] bg-[#040714] z-50 px-10 md:px-12 flex items-center">
      <Image
        className="cursor-pointer"
        src="/images/logo.svg"
        width={80}
        height={80}
        onClick={() => router.push("/")}
      />

      {user && (
        <div className="hidden lg:flex flex-1 items-center space-x-6 ml-10">
          <Links Icon={HomeIcon} text="Home" isHome={true} to="/" />

          <Links Icon={PlusIcon} text="Watchlist" to="#watchlist" />

          <Links Icon={StarIcon} text="Originals" to="#movies" />

          <Links imgLink="/images/movie-icon.svg" text="Movies" to="#movies" />

          <Links imgLink="/images/series-icon.svg" text="Series" to="#series" />
        </div>
      )}

      <div className="ml-auto">
        {user ? (
          <div className="flex items-center space-x-3">
            <img
              className="h-12 w-12 rounded-full object-cover cursor-pointer"
              src={`${user?.photoURL}`}
              alt=""
            />

            <button
              className="text-white group flex items-center space-x-2 cursor-pointer"
              onClick={logoutHandler}
            >
              <LogoutIcon className="h-5" />

              <p className="link">Sign Out</p>
            </button>
          </div>
        ) : (
          <button
            className="border rounded px-4 py-1.5 uppercase font-medium tracking-wide hover:border-0 hover:bg-white hover:text-[#040714] transition-all duration-200"
            onClick={loginHandler}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
