import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const linkClass =
    'active:text-white active:border-b-custom_orange  hover:text-white border border-main_color flex items-center px-4 cursor-pointer border-opacity-15';
  const githubClass = 'flex gap-2';
  return (
    <div className="text-main_color flex justify-between min-h-14 border border-main_color border-opacity-15">
      <ul className="left flex">
        <li className={`${linkClass}`}>find me in:</li>
        <Link
          className={linkClass}
          href="https://www.linkedin.com/in/leman-zeynalli-04812b233/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link className={linkClass} href="https://t.me/zzleman" target="_blank">
          <TelegramIcon />
        </Link>
      </ul>
      <div className="right flex">
        <Link
          className={`${linkClass} ${githubClass}`}
          href="https://github.com/zzleman"
          target="_blank"
        >
          <span>@zzleman</span>
          <GitHubIcon />
        </Link>
      </div>
    </div>
  );
}
