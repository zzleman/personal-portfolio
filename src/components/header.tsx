import Link from 'next/link';

export default function Header() {
  const linkClass =
    'active:text-white active:border-b-custom_orange  hover:text-white border border-main_color flex items-center px-4 cursor-pointer border-opacity-15';
  const nameClass = 'col-span-2';
  return (
    <div className="text-main_color flex justify-between min-h-14 border border-main_color border-opacity-15 z-50 ">
      <ul className="left grid grid-cols-5">
        <li className={`${linkClass} ${nameClass}`}>leman-zeynalli</li>
        <Link className={linkClass} href="/">
          _hello
        </Link>
        <Link className={linkClass} href="/about">
          _about-me
        </Link>
        <Link className={linkClass} href="/projects">
          _projects
        </Link>
      </ul>
      <div className="right flex">
        <Link className={linkClass} href="">
          _contact-me
        </Link>
      </div>
    </div>
  );
}
