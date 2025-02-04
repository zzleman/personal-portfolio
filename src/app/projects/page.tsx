import React from 'react';
import Image from 'next/image';
import htmlIcon from '@/assets/langs/Logos/html5-plain.png';
import cssIcon from '@/assets/langs/Logos/css3-plain.png';
import jsIcon from '@/assets/langs/Logos/javascript-original.png';
import tsIcon from '@/assets/langs/Logos/typescript-original.png';
import reactIcon from '@/assets/langs/Logos/react-original.png';
import reduxIcon from '@/assets/langs/Logos/redux-original.png';
import nextIcon from '@/assets/langs/Logos/nextjs-original.png';
import tailwindIcon from '@/assets/langs/Logos/tailwindcss-plain.png';
import muiIcon from '@/assets/langs/Logos/materialui-plain.png';
import firebaseIcon from '@/assets/langs/Logos//firebase-plain.png';
import eslintIcon from '@/assets/langs/Logos/eslint-original.png';
import gitIcon from '@/assets/langs/Logos/git-original.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Project from '@/components/project';
import projectOne from '@/assets/projects/project-1.png';

const Page = () => {
  const borderStyle = `border-r h-screen border-main_color border-opacity-30`;
  return (
    <div className="text-main_color grid grid-cols-12 w-full h-screen">
      <div className={`left col-span-2 ${borderStyle}`}>
        <h3 className="border px-3 h-10 flex items-center border-main_color border-opacity-30 text-white">
          <ArrowDropDownIcon />
          tech-stack
        </h3>
        <div className="grid grid-cols-2 gap-16 px-6 py-10">
          <Image src={htmlIcon} alt="tech stack" width={50} height={50} />
          <Image src={cssIcon} alt="tech stack" width={50} height={50} />
          <Image src={jsIcon} alt="tech stack" width={50} height={50} />
          <Image src={tsIcon} alt="tech stack" width={50} height={50} />
          <Image src={reactIcon} alt="tech stack" width={50} height={50} />
          <Image src={reduxIcon} alt="tech stack" width={50} height={50} />
          <Image src={nextIcon} alt="tech stack" width={50} height={50} />
          <Image src={firebaseIcon} alt="tech stack" width={50} height={50} />
          <Image src={tailwindIcon} alt="tech stack" width={50} height={50} />
          <Image src={muiIcon} alt="tech stack" width={50} height={50} />
          <Image src={eslintIcon} alt="tech stack" width={50} height={50} />
          <Image src={gitIcon} alt="tech stack" width={50} height={50} />
        </div>
      </div>
      <div className={`right col-span-10 ${borderStyle}`}>
        <h3 className="border px-3 h-10 flex items-center border-main_color border-opacity-30">
          projects
        </h3>
        <div className="grid grid-cols-3 py-5 px-24 gap-10">
          <Project
            number={1}
            title="_ir-master-group"
            img={projectOne}
            description="Duis aute irure dolor in velit esse cillum dolore."
            url="https://irmastergroup.az/"
          />
          <Project
            number={2}
            title="_ir-master-group"
            img={projectOne}
            description="Duis aute irure dolor in velit esse cillum dolore."
            url="https://irmastergroup.az/"
          />
          <Project
            number={3}
            title="_ir-master-group"
            img={projectOne}
            description="Duis aute irure dolor in velit esse cillum dolore."
            url="https://irmastergroup.az/"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
