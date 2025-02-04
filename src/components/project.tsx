import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectProps {
  number: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  number,
  img,
  description,
  url,
}) => {
  return (
    <div className="text-main_color flex flex-col gap-3">
      <div className="flex gap-4">
        <h3 className="text-custom_purple">Project {number}</h3>
        <p>{`// ${title}`}</p>
      </div>
      <div className="border border-main_color border-opacity-30 rounded-xl h-80">
        <Image className="rounded-t-xl" src={img} alt={title} />
        <div className="px-8 flex flex-col gap-4 py-4">
          <p className="text-lg">{description}</p>
          <Link href={url} target="_blank">
            <button className="border rounded-lg h-9 w-32 justify-start">
              view-project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
