"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CityPhotoProps {
  cityPhoto: string;
  city: string;
  photoAuthor: string;
  photoLink: string;
}

const CityPhoto: FC<CityPhotoProps> = ({
  cityPhoto,
  city,
  photoAuthor,
  photoLink,
}) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    setIsLoadingImage(true);
  }, [cityPhoto, setIsLoadingImage]);

  return (
    <div className="w-full h-64 sm:h-80 xl:h-full xl:basis-full relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {isLoadingImage && (
        <Skeleton
          className="absolute inset-0 w-full h-full"
          style={{ borderRadius: "12px" }}
        />
      )}
      <Image
        src={cityPhoto}
        alt={city}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoadingImage ? "opacity-0" : "opacity-100"
        }`}
        fill
        onLoad={() => setIsLoadingImage(false)}
        priority
      />
      <span className="bg-white absolute bottom-3 right-3 p-2 rounded-lg shadow-lg">
        by {photoAuthor},{" "}
        <a href={photoLink} className="hover:text-dodger-blue transition">
          Unsplash
        </a>
      </span>
    </div>
  );
};

export default CityPhoto;
