'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass =
    'hover:text-white border border-main_color flex items-center px-4 cursor-pointer border-opacity-15';

  const isActive = (href: string) =>
    pathname === href
      ? 'border-b-2 border-0 border-orange-300 border-opacity-100 text-white'
      : '';

  return (
    <div className="text-main_color flex justify-between min-h-14 border border-main_color border-opacity-15 z-50 ">
      <ul className="left grid grid-cols-5">
        <li className={`${linkClass} col-span-2`}>leman-zeynalli</li>
        <Link className={`${linkClass} ${isActive('/')}`} href="/">
          _hello
        </Link>
        <Link className={`${linkClass} ${isActive('/about')}`} href="/about">
          _about-me
        </Link>
        <Link
          className={`${linkClass} ${isActive('/projects')} `}
          href="/projects"
        >
          _projects
        </Link>
      </ul>
      <div className="right flex">
        <Link
          className={`${linkClass} ${isActive('/contact')}`}
          href="/contact"
        >
          _contact-me
        </Link>
      </div>
    </div>
  );
}
