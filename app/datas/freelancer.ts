import { StaticImageData } from "next/image";

//images Cake
import imgPhoneCake from "@/app/assets/images/mobile-cake-removebg-preview.png";
import PhoneCake01 from "@/app/assets/images/de-cake/01decake.png";
import PhoneCake02 from "@/app/assets/images/de-cake/02-decake.png";
import PhoneCake03 from "@/app/assets/images/de-cake/03-decake.png";
import PhoneCake04 from "@/app/assets/images/de-cake/04-decake.png";
//images Som
import imgPhoneSom from "@/app/assets/images/mobile-som-removebg-preview.png";
import imgPhoneSom01 from "@/app/assets/images/dgs-sound/01-sound.png";
import imgPhoneSom02 from "@/app/assets/images/dgs-sound/02-sound.png";
import imgPhoneSom03 from "@/app/assets/images/dgs-sound/03-sound.png";
import imgPhoneSom04 from "@/app/assets/images/dgs-sound/04-sound.png";
//images Barbeshop
import imgBarbeshop01 from "@/app/assets/images/relaxamento.jpg";
import imgBarbeshop02 from "@/app/assets/images/phone-barbeshop.png";
import imgBarbeshop03 from "@/app/assets/images/barbershop/booking-barbershop01.png";
import imgBarbeshop04 from "@/app/assets/images/barbershop/booking-barbershop02.png";
//images Petshop
import imgPhonePetshop from "@/app/assets/images/mobile-petshop-removebg-preview.png";
import imgPetshop01 from "@/app/assets/images/dog-maltes-tosa.png";
import imgPetshop02 from "@/app/assets/images/petshop_app.jpg";
import imgPetshop03 from "@/app/assets/images/petshop/petshop-01.jpg";

interface IImages {
  image: StaticImageData;
  style: string;
}
export interface IFreelancer {
  title: string;
  subtitle: string;
  image: StaticImageData;
  path: string;
  slug: string;
  content: string;
  images: IImages[];
}

export const freelancers: IFreelancer[] = [
  {
    title: "Barbershop Destak",
    subtitle: "Sistema de agendamento",
    image: imgBarbeshop02,
    path: "https://barbershop-distak.vercel.app/",
    slug: "barbershop-destak",
    content:
      "Barbershop Destak é um sistema de gestão de agendamentos de uma barbearia, nele o cliente em poucos click possível, consegue realizar um agendamento em uma barbearia.",
    images: [
      { image: imgBarbeshop01, style: "h-[500px] w-full" },
      { image: imgBarbeshop02, style: "w-[350px] h-[300px]" },
      { image: imgBarbeshop03, style: "w-[350px] h-[300px]" },
      { image: imgBarbeshop04, style: "w-[350px] h-[300px]" },
    ],
  },
  {
    title: " Petshop App.",
    subtitle: "Sistema de agendamento",
    image: imgPhonePetshop,
    path: "https://petshop-app-flax.vercel.app/",
    slug: "petshop-app",
    content:
      "Petshop App é um sistema de gestão de agendamentos de uma barbearia, nele o cliente em poucos click possível, consegue realizar um agendamento em uma barbearia.",
    images: [
      { image: imgPetshop01, style: "h-[500px] w-full mt-[50px]" },
      { image: imgPetshop03, style: "w-[350px] h-[300px]" },
      { image: imgPhonePetshop, style: "w-[350px] h-[300px]" },
      { image: imgPetshop02, style: "w-[350px] h-[300px]" },
    ],
  },
  {
    title: "DeCake.",
    subtitle: "Catálogo de Bolos",
    image: imgPhoneCake,
    path: "https://d-cake-confeitaria-artesanal.vercel.app/",
    slug: "decake",
    content:
      "DeCake é uma single page aplication, para exibir um catálogo de uma confeitária.",
    images: [
      { image: PhoneCake01, style: "h-[300px] w-[200px]" },
      { image: PhoneCake02, style: "h-[300px] w-[200px]" },
      { image: PhoneCake03, style: "h-[300px] w-[200px]" },
      { image: PhoneCake04, style: "h-[300px] w-[200px]" },
    ],
  },
  {
    title: "DGS Sound",
    subtitle: "Catálogo de Produtos de Som",
    image: imgPhoneSom,
    path: "https://dgssound-alto-falantes.vercel.app/",
    slug: "dgs-sound",
    content:
      "DGS Sound é uma single page aplication, para exibir um catálogo de uma que vende produtos de alto falantes automotivos.",
    images: [
      { image: imgPhoneSom01, style: "h-[300px] w-full" },
      { image: imgPhoneSom02, style: "h-[300px] w-[200px]" },
      { image: imgPhoneSom03, style: "h-[300px] w-[200px]" },
      { image: imgPhoneSom04, style: "h-[300px] w-[200px]" },
    ],
  },
];
