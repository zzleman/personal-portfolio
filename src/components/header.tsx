import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <ul className="left">
        <li>leman-zeynalli</li>
        <Link href="/">_hello</Link>
        <Link href="/about">_about-me</Link>
        <Link href="/projects">_projects</Link>
      </ul>
      <div className="right">
        <Link href="">_contact-me</Link>
      </div>
    </div>
  );
}
