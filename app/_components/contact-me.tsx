import React from "react";
import TitlesContainer from "./titles-container";
import Link from "next/link";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div id="contact" className="bg-gradient-image-hero mt-28 h-[600px] p-3">
      <TitlesContainer title="Contact-Me" subtitle="Meus Contatos" />

      <div className="m-auto w-4/5 sm:w-[500px]">
        <ul>
          <li className="mb-4 rounded-xl bg-neutral-900">
            <span className="flex items-center p-2">
              <FaExclamationTriangle className="mx-3 text-2xl text-yellow-500" />

              <span>
                Atenção: Contatos apenas para empregos dentro do escopo.
              </span>
            </span>
          </li>
          <li className="mb-4 rounded-xl bg-neutral-900">
            <Link
              className="flex items-center p-2"
              href="https://wa.me/5511941515753"
            >
              <PiWhatsappLogoDuotone className="mx-3 text-2xl text-emerald-500" />
              <span className="font-bold">11-941515753</span>
            </Link>
          </li>

          <li className="mb-4 rounded-xl bg-neutral-900">
            <span className="flex items-center p-2">
              <MdOutlineMailOutline className="mx-3 text-2xl text-emerald-500" />
              <span>cajuishop@gmail.com</span>
            </span>
          </li>

          <li className="mb-4 rounded-xl bg-neutral-900">
            <address className="flex items-center p-2">
              <FaMapLocationDot className="mx-3 text-2xl text-emerald-500" />
              <span>Mauá - São Paulo / Brasil</span>
            </address>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
