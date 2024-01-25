import React from "react";
import Image from "next/image";

type ExpertCardProps = {
  name: string;
  title: string;
  country: string;
  profession: string;
  tags: string[];
  image: string;
};

export default function ExpertCard({
  name,
  title,
  profession,
  country,
  tags,
  image,
}: ExpertCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <Image
          src={image}
          alt={`Profile image of ${name}`}
          className="rounded-full"
          width={100}
          height={100}
        />
        <div>
          <div className="text-xl text-gray-700 font-semibold">{name}</div>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="fas fa-briefcase text-gray-600 mr-2"></span>
        <span className="text-gray-700">{profession}</span>
      </div>
      <div className="mt-2 pb-3">
        <span className="fas fa-map-marker-alt text-gray-600 mr-2 pb-1"></span>
        <span className="text-gray-700">{country}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
