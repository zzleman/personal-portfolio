import { bio, education, interests } from '@/data/mock';

interface BioProps {
  option: string;
}

export default function PersonalInfo({ option }: BioProps) {
  let lines: string[] = [];
  if (option === 'bio') {
    lines = bio.code.split('\n');
  } else if (option === 'interests') {
    lines = interests.code.split('\n');
  } else {
    lines = education.code.split('\n');
  }

  return (
    <div>
      <ol className="list-decimal px-9">
        <li className="px-5">{`/ *`}</li>
        {lines.map((line, index) => (
          <li className="px-8" key={index}>
            * {line.trim()}
          </li>
        ))}
        <li className="px-5">{`* /`}</li>
      </ol>
    </div>
  );
}
