import React from "react";

interface TitlesContainerProps {
  title: string;
  subtitle: string;
}

const TitlesContainer = ({ title, subtitle }: TitlesContainerProps) => {
  return (
    <div className="m-auto mb-8 w-4/5 md:w-[600px]">
      <h2 className="relative text-3xl font-bold text-emerald-500">
        <span className="absolute -bottom-2 inline-block h-2 w-9 rounded-full bg-slate-200"></span>
        {title}
        <span className="text-white">.</span>
      </h2>
      <p className="-mt-1 ml-10 text-[9px] font-extralight">{subtitle}</p>
    </div>
  );
};

export default TitlesContainer;
