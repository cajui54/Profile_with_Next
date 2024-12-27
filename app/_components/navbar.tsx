"use client";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import ButtonNavmenu from "./button-navmenu";
import { Link, scrollSpy } from "react-scroll";
export interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}
const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleSetActive = (to: any) => {
    console.log(to);
  };
  useEffect(() => {
    scrollSpy.update();
  }, []);
  return (
    <div className="relative flex h-full w-4/5 cursor-pointer items-center justify-end px-2">
      <ButtonNavmenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <nav
        className={`${!openMenu && "hidden opacity-0"} absolute top-[72px] flex h-[85vh] !w-[95vw] flex-col items-center bg-neutral-950 text-center text-xl transition-all sm:space-y-5 md:relative md:top-0 md:!block md:h-16 md:flex-row md:justify-end md:space-x-7 md:pt-4 md:opacity-100`}
      >
        <Link
          onClick={() => setOpenMenu(false)}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="relative py-3 transition-all hover:text-emerald-400 sm:py-1"
        >
          Home
          <span className="absolute inline-block"></span>
        </Link>

        <Link
          onClick={() => setOpenMenu(false)}
          className="relative cursor-pointer py-3 transition-all hover:text-emerald-400 sm:py-1"
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
        >
          About me
          <span className="absolute inline-block"></span>
        </Link>

        <Link
          onClick={() => setOpenMenu(false)}
          className="relative cursor-pointer py-3 transition-all hover:text-emerald-400 sm:py-1"
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
        >
          My Skills
          <span className="absolute"></span>
        </Link>

        <Link
          onClick={() => setOpenMenu(false)}
          className="relative cursor-pointer py-3 transition-all hover:text-emerald-400 sm:py-1"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
        >
          Projects
          <span className="absolute"></span>
        </Link>

        <Link
          onClick={() => setOpenMenu(false)}
          className="relative py-3 transition-all hover:text-emerald-400 sm:py-1"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
        >
          Contact-me
          <span className="absolute"></span>
        </Link>
      </nav>
    </div>
  );
};

export default NavbarComponent;
