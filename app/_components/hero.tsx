import React from "react";
import profileImage from "@/app/assets/images/profile.png";
import Image from "next/image";
import BarSocialComponent from "./bar-social";

const HeroComponent = () => {
  return (
    <div id="home" className="bg-gradient-image-hero h-[100vh] w-full">
      <div className="relative top-28 m-auto flex min-h-[300px] w-[95%] flex-col items-center sm:flex-row sm:justify-center sm:space-x-5">
        <div className="flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-full border-2 border-solid border-emerald-600">
          <Image
            className="relative scale-[1.5] bg-black"
            src={profileImage}
            alt="Image profile"
          />
        </div>
        <div className="mt-9 lg:!ml-[100px]">
          <p className="ml-3 text-[12px] lg:-mt-[70px] lg:ml-4">
            Seja bem vindo, ao portfólio.
          </p>
          <h2 className="-mt-[8px] text-4xl font-semibold text-emerald-500 lg:-mt-1 lg:text-[50px]">
            Jackson Silva
          </h2>
          <p className="-mt-2 ml-20 font-extrabold">Desenvolvedor Web</p>
          <BarSocialComponent />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
