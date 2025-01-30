import Image from 'next/image';
import codeMain from '../assets/code.png';
import codeSecondary from '../assets/code-secondary.png';

export default function CodeClient() {
  return (
    <div className="my-20 flex flex-col gap-7">
      <div>
        <Image src={codeSecondary} alt="code" width={500} height={300} />
      </div>
      <div>
        <Image src={codeSecondary} alt="code" width={500} height={300} />
      </div>
      <div>
        <Image src={codeMain} alt="code" width={500} height={300} />
      </div>
      <div>
        <Image src={codeSecondary} alt="code" width={500} height={300} />
      </div>
      <div>
        <Image src={codeSecondary} alt="code" width={500} height={300} />
      </div>
    </div>
  );
}
