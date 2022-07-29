import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Log in | Disney+</title>
      </Head>

      <Header />

      <div className="relative h-[calc(100vh-72px)]">
        <Image
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-screen h-full flex items-center justify-center px-8">
        <div className="flex flex-col space-y-3 max-w-screen-sm">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />

          <button className="bg-blue-600 w-full rounded px-6 py-4 font-extrabold text-xl tracking-wide uppercase hover:bg-[#0485ee]">
            Get all there
          </button>

          <p className="text-xs text-center">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p>

          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
