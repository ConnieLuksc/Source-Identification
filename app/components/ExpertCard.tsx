import React from "react";
import Image from "next/image";
import Link from "next/link";

type ExpertCardProps = {
  id: string;
  name: string;
  email: string;
  title: string;
  school: string;
  fields: string[];
  focus_areas: string[];
  image_src: string;
};

export default function ExpertCard({
  id,
  name,
  email,
  title,
  school,
  fields,
  focus_areas,
  image_src
}: ExpertCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Link href={`/experts/${id}`}>
        <div className="flex items-center space-x-4">
          <Image
            src={image_src}
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
          <span className="text-gray-700">{school}</span>
        </div>
        <div className="mt-2 pb-3">
          <span className="fas fa-map-marker-alt text-gray-600 mr-2 pb-1"></span>
          <span className="text-gray-700">{email}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          Fields:
          {fields.map((field, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {field}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          Focus areas:
          {focus_areas.map((focus_area, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {focus_area}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
