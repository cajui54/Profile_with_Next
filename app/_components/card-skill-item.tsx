import React from "react";
import { IconType } from "react-icons";

export const Icon = ({ icon: IconComponent }: { icon: IconType }) => {
  return <IconComponent className="text-5xl text-neutral-950" />;
};
export const Title = ({ title }: { title: string }) => {
  const text = title.split(" ");
  return (
    <h2 className="flex flex-col items-center justify-center font-bold text-neutral-950">
      <span className="text-sm">{text[0]}</span>
      {text[1] && <span className="text-xs"> {text[1]}</span>}
    </h2>
  );
};

const CardSkillItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-md bg-emerald-500 text-neutral-950">
      {children}
    </div>
  );
};

export default CardSkillItem;
