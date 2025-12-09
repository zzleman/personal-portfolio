import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EXTERNAL_LINKS } from '@/constants';

const mainImg = '/images/mainIconsdark.svg';

export default function Home(): React.ReactElement {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-4 md:px-8 py-8 lg:py-0 overflow-auto">
      <div className="left text-white leading-8 md:leading-10 animate-fade-in text-center lg:text-left w-full lg:w-auto">
        <div className="top space-y-2">
          <h6 className="text-base md:text-lg text-main_color/80 animate-slide-up">Hi all. I am</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up-delay-1">
            Leman Zeynalli
          </h1>
          <h3 className="text-2xl md:text-3xl text-custom_purple font-semibold animate-slide-up-delay-2">
            &gt; Frontend Developer
          </h3>
        </div>
        <div className="bottom mt-6 md:mt-8 space-y-3 animate-slide-up-delay-3">
          <p className="text-main_color flex items-center gap-2 justify-center lg:justify-start text-sm md:text-base">
            <span className="text-custom_green">{'//'}</span>
            <span>welcome to my portfolio</span>
          </p>
          <p className="text-main_color flex items-center gap-2 justify-center lg:justify-start text-sm md:text-base">
            <span className="text-custom_green">{'//'}</span>
            <span className="text-center lg:text-left">you can see my projects on my Github page</span>
          </p>
          <p className="flex gap-2 flex-wrap items-center justify-center lg:justify-start text-sm md:text-base">
            <span className="text-custom_purple">const</span>
            <span className="text-custom_green">githubLink</span>
            <span className="text-main_color">=</span>
            <Link
              className="text-custom_orange underline hover:text-custom_orange/80 transition-colors duration-300 hover:no-underline break-all"
              href={EXTERNAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              &quot;https://github.com/zzleman&quot;
            </Link>
            <span className="text-main_color">;</span>
          </p>
        </div>
      </div>
      <div className="right animate-fade-in-delay flex-shrink-0">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-custom_purple/20 to-custom_green/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <Image 
            src={mainImg} 
            alt="Leman Zeynalli - Frontend Developer" 
            height={650} 
            width={650}
            className="relative z-10 transition-transform duration-500 group-hover:scale-105 w-full h-auto max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px]"
          />
        </div>
      </div>
    </div>
  );
}
