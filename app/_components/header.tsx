import Link from "next/link";
import React from "react";
import NavbarComponent from "./navbar";

const HeaderComponent = () => {
  return (
    <header className="fixed z-20 flex h-20 w-full items-center justify-between bg-neutral-950 p-2">
      <Link href="/" className="flex flex-col items-center justify-center">
        <span className="text-[12px]">Bem vindo!</span>
        <span className="-mt-2 font-black text-emerald-400">Portfólio</span>
      </Link>
      <NavbarComponent />
    </header>
  );
};

export default HeaderComponent;
