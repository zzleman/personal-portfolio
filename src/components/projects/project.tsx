import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ProjectData } from '@/types';

interface ProjectProps extends ProjectData {
  number: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  url: string;
  onCardClick?: () => void;
}

const Project: React.FC<ProjectProps> = ({
  title,
  number,
  img,
  description,
  url,
  techStack,
  onCardClick,
}) => {
  return (
    <div className="text-main_color flex flex-col gap-5 group h-full">
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 rounded-lg bg-custom_purple/20 flex items-center justify-center border border-custom_purple/30 flex-shrink-0">
          <span className="text-custom_purple font-bold text-sm">{number}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-custom_purple font-semibold text-lg truncate">{title}</h3>
        </div>
      </div>
      <div 
        className="border border-main_color/20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#011627] to-[#011627]/80 transition-all duration-500 hover:border-custom_purple/60 hover:shadow-2xl hover:shadow-custom_purple/30 hover:-translate-y-2 relative cursor-pointer flex flex-col h-full"
        onClick={onCardClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-custom_purple/0 via-custom_purple/0 to-custom_green/0 group-hover:from-custom_purple/10 group-hover:via-custom_purple/5 group-hover:to-custom_green/10 transition-all duration-500 rounded-2xl pointer-events-none"></div>
        
        <div className="relative h-40 md:h-48 lg:h-52 overflow-hidden bg-gradient-to-br from-custom_purple/10 via-custom_green/5 to-custom_purple/10 flex-shrink-0">
          <Image 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
            src={img} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-[#011627]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        
        <div className="px-4 md:px-6 flex flex-col gap-3 md:gap-5 py-4 md:py-6 relative z-10 flex-1 min-h-0">
          <p className="text-sm md:text-base leading-relaxed text-main_color/90 line-clamp-3 flex-shrink-0">{description}</p>
          
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {techStack.map((tech, index) => {
                const colorClasses = [
                  'bg-custom_purple/10 border-custom_purple/20 text-custom_purple',
                  'bg-custom_green/10 border-custom_green/20 text-custom_green',
                  'bg-custom_orange/10 border-custom_orange/20 text-custom_orange',
                ];
                const colorClass = colorClasses[index % colorClasses.length];

                return (
                  <span
                    key={index}
                    className={`px-2.5 py-1 rounded-md border text-xs font-medium ${colorClass}`}
                  >
                    {tech}
            </span>
                );
              })}
          </div>
          )}
          
          <Link 
            href={url || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="self-start mt-auto flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              if (!url || url === '#') {
                e.preventDefault();
              }
            }}
          >
            <button className="border border-custom_purple/50 rounded-xl h-11 px-6 flex items-center gap-2 text-custom_purple hover:bg-custom_purple/10 hover:border-custom_purple transition-all duration-300 hover:shadow-lg hover:shadow-custom_purple/30 group/btn font-medium">
              <span className="text-sm">view-project</span>
              <OpenInNewIcon className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
