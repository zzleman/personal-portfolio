'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ROUTES } from '@/constants';
import { classNames } from '@/utils/classNames';

const LINK_BASE_CLASS = 'hover:text-white border border-main_color flex items-center px-2 md:px-4 cursor-pointer border-opacity-15 transition-all duration-300 hover:bg-main_color/5 hover:border-opacity-30 text-sm md:text-base';

const ACTIVE_LINK_CLASS = 'border-b-2 border-0 border-custom_orange border-opacity-100 text-white bg-main_color/5';

export default function Header(): React.ReactElement {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string): boolean => pathname === href;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="text-main_color flex justify-between min-h-14 border border-main_color border-opacity-15 z-50 bg-[#011627]/80 backdrop-blur-sm sticky top-0">
        <ul className="left hidden md:grid grid-cols-5 flex-1">
        <li className={classNames(LINK_BASE_CLASS, 'col-span-2 cursor-not-allowed opacity-60 hover:opacity-100')}>
            <span className="truncate">leman-zeynalli</span>
        </li>
        <Link 
          className={classNames(LINK_BASE_CLASS, isActive(ROUTES.HOME) && ACTIVE_LINK_CLASS)} 
          href={ROUTES.HOME}
        >
          _hello
        </Link>
        <Link 
          className={classNames(LINK_BASE_CLASS, isActive(ROUTES.ABOUT) && ACTIVE_LINK_CLASS)} 
          href={ROUTES.ABOUT}
        >
          _about-me
        </Link>
        <Link
          className={classNames(LINK_BASE_CLASS, isActive(ROUTES.PROJECTS) && ACTIVE_LINK_CLASS)}
          href={ROUTES.PROJECTS}
        >
          _projects
        </Link>
      </ul>
        <div className="right hidden md:flex">
        <Link
          className={classNames(LINK_BASE_CLASS, isActive(ROUTES.CONTACT) && ACTIVE_LINK_CLASS)}
          href={ROUTES.CONTACT}
          >
            _contact-me
          </Link>
        </div>
        
        <div className="md:hidden flex items-center justify-between w-full px-4">
          <span className="text-base font-medium text-white">leman-zeynalli</span>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-main_color hover:text-white transition-colors rounded-lg hover:bg-main_color/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 border-b border-main_color border-opacity-15 bg-[#011627] backdrop-blur-sm z-40 shadow-lg animate-fade-in-smooth">
          <div className="flex flex-col py-2">
            <Link 
              className={classNames(
                'px-6 py-4 text-base font-medium transition-all duration-200 rounded-lg mx-2 my-1',
                isActive(ROUTES.HOME)
                  ? 'text-white bg-custom_orange/20 border-l-4 border-custom_orange shadow-md'
                  : 'text-main_color hover:text-white hover:bg-main_color/10'
              )} 
              href={ROUTES.HOME}
              onClick={closeMobileMenu}
            >
              _hello
            </Link>
            <Link 
              className={classNames(
                'px-6 py-4 text-base font-medium transition-all duration-200 rounded-lg mx-2 my-1',
                isActive(ROUTES.ABOUT)
                  ? 'text-white bg-custom_orange/20 border-l-4 border-custom_orange shadow-md'
                  : 'text-main_color hover:text-white hover:bg-main_color/10'
              )} 
              href={ROUTES.ABOUT}
              onClick={closeMobileMenu}
            >
              _about-me
            </Link>
            <Link
              className={classNames(
                'px-6 py-4 text-base font-medium transition-all duration-200 rounded-lg mx-2 my-1',
                isActive(ROUTES.PROJECTS)
                  ? 'text-white bg-custom_orange/20 border-l-4 border-custom_orange shadow-md'
                  : 'text-main_color hover:text-white hover:bg-main_color/10'
              )}
              href={ROUTES.PROJECTS}
              onClick={closeMobileMenu}
            >
              _projects
            </Link>
            <Link
              className={classNames(
                'px-6 py-4 text-base font-medium transition-all duration-200 rounded-lg mx-2 my-1',
                isActive(ROUTES.CONTACT)
                  ? 'text-white bg-custom_orange/20 border-l-4 border-custom_orange shadow-md'
                  : 'text-main_color hover:text-white hover:bg-main_color/10'
              )}
              href={ROUTES.CONTACT}
              onClick={closeMobileMenu}
        >
          _contact-me
        </Link>
      </div>
    </div>
      )}
    </>
  );
}
