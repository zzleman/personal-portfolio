import Image from 'next/image';
import React from 'react';

interface ProjectProps {
  number: number;
  title: string;
  img: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  number,
  img,
  description,
}) => {
  return (
    <div>
      <div>
        <h3>Project ${number}</h3>
        <p>{title}</p>
      </div>
      <div>
        <Image src={img} alt={title} width={300} height={150} />
        <p>{description}</p>
        <button>view-project</button>
      </div>
    </div>
  );
};

export default Project;
