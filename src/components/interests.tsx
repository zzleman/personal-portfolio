import { interests } from '@/data/mock';

export default function Interest() {
  const lines = interests.code.split('\n');
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
