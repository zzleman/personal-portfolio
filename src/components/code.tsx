import Image from 'next/image';
import mainImg from '../assets/mainIconsdark.svg';

export default function CodeClient() {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 bg-custom_purple rounded-full blur-3xl opacity-30 z-0"></div>
      <Image
        src={mainImg}
        alt="code"
        height={650}
        width={650}
        className="relative z-10"
      />
    </div>
  );
}
