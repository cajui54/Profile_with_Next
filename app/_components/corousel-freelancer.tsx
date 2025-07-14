import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import { freelancers } from "../datas/freelancer";
import TitlesContainer from "./titles-container";

const CarouselFreelancer = () => {
  return (
    <div className="mx-auto mb-[100px]" id="freelancer-work">
      <TitlesContainer
        title="Freelancers"
        subtitle="Trabalhos freelancers realizados "
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className=":w-[900px] mx-auto w-[60%]"
      >
        <CarouselContent>
          {freelancers.map((freelancer, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-[400px] overflow-hidden border-none bg-transparent">
                  <CardContent className="flex h-full flex-col items-center justify-center p-0">
                    <div>
                      <h2 className="text-center font-semibold tracking-wide text-emerald-500">
                        {freelancer.title}
                      </h2>
                      <p className="-mt-1 text-[10px] text-white">
                        <span className="mr-1 inline-block h-1 w-5 rounded-md bg-white tracking-widest">
                          {" "}
                        </span>
                        {freelancer.subtitle}
                      </p>
                    </div>

                    <Image
                      src={freelancer.image}
                      alt="Phone Barbeshop"
                      width={0}
                      height={0}
                      className="h-[350px] w-[350px] object-cover"
                    />

                    <Link
                      href={`pages/work/${freelancer.slug}`}
                      className="block w-4/5 rounded-md bg-emerald-500 py-1 text-center opacity-65 hover:opacity-100"
                    >
                      <span className="text-sm font-semibold tracking-widest text-white">
                        View Details
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {freelancers.length > 1 && (
          <CarouselPrevious className="text-neutral-900" />
        )}
        {freelancers.length > 1 && (
          <CarouselNext className="text-neutral-900" />
        )}
      </Carousel>
    </div>
  );
};
export default CarouselFreelancer;
