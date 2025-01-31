import Code from '@/components/code';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center gap-16">
      <div className="left text-white leading-10">
        <div className="top">
          <h6>Hi all. I am</h6>
          <h1 className="text-6xl">Leman Zeynalli</h1>
          <h3 className="text-3xl text-custom_purple">
            &gt; Frontend Developer
          </h3>
        </div>
        <div className="bottom mt-4">
          <p className="text-main_color">
            <span>&#x2f; &#x2f;</span>
            <span className="px-2">welcome to my portfolio</span>
          </p>
          <p className="text-main_color">
            <span>&#x2f; &#x2f;</span>
            <span className="px-2">
              you can see my projects on my Github page
            </span>
          </p>
          <p className="flex gap-2">
            <span className="text-custom_purple">const</span>
            <span className="text-custom_green">githubLink</span>=
            <Link
              className="text-custom_orange underline"
              href="https://github.com/zzleman"
              target="_blank"
            >
              &quot;https://github.com/zzleman&quot;
            </Link>
          </p>
        </div>
      </div>
      <div className="right">
        <Code />
      </div>
    </div>
  );
}
