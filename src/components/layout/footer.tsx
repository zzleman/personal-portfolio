import React from 'react';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { EXTERNAL_LINKS } from '@/constants';

export default function Footer(): React.ReactElement {
  return (
    <div className="text-main_color flex items-center justify-between min-h-14 border-t border-main_color border-opacity-15 bg-[#011627]/80 backdrop-blur-sm">
      <div className="left flex items-center">
        <span className="text-main_color/70 text-sm md:text-base font-medium px-4 py-3 md:py-0 border-r border-main_color border-opacity-15">
          find me in:
        </span>
        <Link
          className="flex items-center justify-center min-w-[56px] h-14 border-r border-main_color border-opacity-15 hover:bg-main_color/10 hover:text-white transition-all duration-300 group relative"
          href={EXTERNAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6 text-main_color group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <Link 
          className="flex items-center justify-center min-w-[56px] h-14 hover:bg-main_color/10 hover:text-white transition-all duration-300 group relative"
          href={EXTERNAL_LINKS.TELEGRAM} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram profile"
        >
          <TelegramIcon className="w-5 h-5 md:w-6 md:h-6 text-main_color group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
      <div className="right flex items-center">
        <Link
          className="flex items-center gap-2 px-4 md:px-6 h-14 border-l border-main_color border-opacity-15 hover:bg-main_color/10 hover:text-white transition-all duration-300 group relative"
          href={EXTERNAL_LINKS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <span className="text-main_color group-hover:text-white transition-colors duration-300 font-medium text-sm md:text-base">@zzleman</span>
          <GitHubIcon className="w-5 h-5 md:w-6 md:h-6 text-main_color group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  );
}
