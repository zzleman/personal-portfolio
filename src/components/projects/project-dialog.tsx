import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  img: string | StaticImageData;
  description: string;
  url: string;
  techStack?: string[];
}

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  isOpen,
  onClose,
  title,
  img,
  description,
  url,
  techStack,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 pointer-events-none">
        <div
          className="bg-[#011627] border border-main_color/30 rounded-xl md:rounded-2xl max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-hidden shadow-2xl pointer-events-auto animate-scale-in flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-main_color/20">
            <h2 className="text-custom_purple font-semibold text-lg md:text-xl lg:text-2xl truncate pr-2">{title}</h2>
            <button
              onClick={onClose}
              className="text-main_color/60 hover:text-main_color hover:bg-main_color/10 rounded-lg p-2 transition-colors duration-200"
              aria-label="Close dialog"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="relative w-full h-48 md:h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-custom_purple/10 via-custom_green/5 to-custom_purple/10">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-[#011627]/50 to-transparent"></div>
            </div>

            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              <div>
                <h3 className="text-custom_green text-xs md:text-sm font-medium mb-2">{'//'} description</h3>
                <p className="text-main_color/90 leading-relaxed text-sm md:text-base">{description}</p>
              </div>

              {techStack && techStack.length > 0 && (
                <div>
                  <h3 className="text-custom_green text-xs md:text-sm font-medium mb-2 md:mb-3">{'//'} tech-stack</h3>
                  <div className="flex flex-wrap gap-2">
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
                          className={`px-2 md:px-3 py-1 md:py-1.5 rounded-md border text-xs md:text-sm font-medium ${colorClass}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {url && url !== '#' && (
                <div>
                  <h3 className="text-custom_green text-xs md:text-sm font-medium mb-2 md:mb-3">{'//'} project-link</h3>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    <button className="border border-custom_purple/50 rounded-xl h-10 md:h-12 px-6 md:px-8 flex items-center gap-2 text-custom_purple hover:bg-custom_purple/10 hover:border-custom_purple transition-all duration-300 hover:shadow-lg hover:shadow-custom_purple/30 group/btn font-medium text-sm md:text-base">
                      <span>Visit Project</span>
                      <OpenInNewIcon className="w-4 md:w-5 h-4 md:h-5" />
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

