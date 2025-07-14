import Link from "next/link";
import React from "react";
import { TiArrowBack } from "react-icons/ti";

const HeaderBack = () => {
  return (
    <header className="flex h-[50px] items-center justify-end border-b border-neutral-800 bg-neutral-900 px-6">
      <Link
        href="/"
        className="flex items-center font-semibold text-emerald-300"
      >
        <TiArrowBack className="mr-2" />
        Voltar
      </Link>
    </header>
  );
};

export default HeaderBack;
