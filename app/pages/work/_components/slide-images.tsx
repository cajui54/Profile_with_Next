"use client";
import { IFreelancer } from "@/app/datas/freelancer";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface SlideImage {
  path: StaticImageData;
  style: string;
}

const SlideImages = ({ images, title }: IFreelancer) => {
  const [image, setImage] = useState<SlideImage>({
    path: images[0].image,
    style: images[0].style,
  });

  const handleChangeImageClick = (_image: StaticImageData, _style: string) => {
    setImage({
      path: _image,
      style: _style,
    });
  };

  return (
    <div className="mx-auto mt-[50px] sm:w-[600px] lg:m-0">
      <div className="mx-auto mt-1 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg">
        <Image
          src={image.path}
          alt={title}
          width={0}
          height={0}
          className={`${image.style} block rounded-lg`}
        />
      </div>

      {images.length > 1 && (
        <div className="mx-auto mt-[20px] grid w-full grid-cols-4 gap-4 overflow-x-auto py-3 sm:w-[500px]">
          {images.map((_image, index) => (
            <div
              key={index}
              onClick={() => handleChangeImageClick(_image.image, _image.style)}
              className="h-[90px] w-[90px] transition-transform hover:scale-125"
            >
              <Image
                src={_image.image}
                alt={title}
                width={0}
                height={0}
                className="block h-full w-full cursor-pointer rounded-md border-2 border-neutral-500"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SlideImages;
