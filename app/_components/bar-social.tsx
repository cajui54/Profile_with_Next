import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

const BarSocialComponent = () => {
  return (
    <div className="mt-6 flex items-center justify-center space-x-5">
      <Link
        className="flex flex-col items-center justify-center"
        href="https://www.linkedin.com/in/jacksoncajui/"
      >
        <FaLinkedin className="text-3xl text-emerald-500 transition-all hover:scale-[1.1]" />
        <span className="text-[7px]">Linkedin</span>
      </Link>

      <Link
        className="flex flex-col items-center justify-center"
        href="https://github.com/cajui54"
      >
        <FaGithub className="text-3xl text-emerald-500 transition-all hover:scale-[1.1]" />
        <span className="text-[7px]">Github</span>
      </Link>

      <Link
        className="flex flex-col items-center justify-center"
        href="https://wa.me/5511941515753"
      >
        <PiWhatsappLogoDuotone className="text-3xl text-emerald-500 transition-all hover:scale-[1.1]" />
        <span className="text-[7px]">Whats app</span>
      </Link>
    </div>
  );
};

export default BarSocialComponent;
