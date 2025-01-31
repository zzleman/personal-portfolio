export const codeSnippets = [
  {
    language: 'tsx',
    code: `
function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk as any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
      `,
  },
  {
    language: 'tsx',
    code: `
import { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api.example.com")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
      `,
  },
  {
    language: 'tsx',
    code: `
export async function generateStaticParams() {
  const posts = await fetch("https://dogsapi.com/posts")
  .then(res => res.json());

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
      `,
  },
];
