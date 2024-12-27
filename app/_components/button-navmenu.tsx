import { NavbarProps } from "./navbar";

const ButtonNavmenu = ({ openMenu, setOpenMenu }: NavbarProps) => {
  const handleClick = () => {
    if (openMenu) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
    return;
  };
  return (
    <div
      onClick={handleClick}
      className="flex h-10 w-12 cursor-pointer flex-col items-center justify-center md:hidden"
    >
      <div
        className={`${openMenu && "translate-x-[-10px] translate-y-[2px] !rotate-[45deg]"} h-1 w-10 translate-y-[-8px] rounded-2xl bg-white transition-all`}
      ></div>
      <div
        className={`${openMenu && "translate-x-[-50px] !bg-transparent"} h-1 w-10 translate-y-[-1px] rounded-2xl bg-white transition-all`}
      ></div>
      <div
        className={`${openMenu && "!translate-y-[-5px] translate-x-[-10px] rotate-[-45deg]"} h-1 w-10 translate-y-[7px] rounded-2xl bg-white transition-all`}
      ></div>
    </div>
  );
};

export default ButtonNavmenu;
