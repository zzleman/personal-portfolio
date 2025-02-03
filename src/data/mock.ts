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

export const bio = {
  language: 'tsx',
  code: `About Me 
   I have 1.5 years of experience in frontend development. 
   Skilled in React, Redux, TypeScript, and Tailwind CSS. 
   Fast learner, always seeking new challenges. 
   Team player, ready to support teammates. 
   Passionate about learning and exploring new opportunities. 
   Most interested in React and TypeScript. 
   Thank you for reading my bio.`,
};

export const interests = {
  language: 'tsx',
  code: `My Interests: 
  
    🎬 Movies & Series:  
    I absolutely love watching movies and serials! My favorite genres are Thriller and Sci-Fi.  Here are my top 3 favorites:  
    1. Inception
    2. Game of Thrones (ignore the last season :D)  
    3. Eternal Sunshine of Spotless Mind

    🎶 Music:  
    I’m a huge fan of Indie Pop, but I listen to anything that sounds good! Here are the top 3 favorite songs I can’t stop listening to lately:  
    1. "Mirrors" by Justin Timberlake  
    2. "Hayloft II" by Mother Mother
    3. "Stole the show" by Kygo

    💻 Coding:  
    I love coding, and I work most often with React, Next.js, TypeScript, and Tailwind CSS.  
    It doesn’t matter if I write in React or just HTML, CSS, and JS always use Tailwind CSS because it’s my favorite for styling.  
    I'm passionate about building efficient and scalable web applications!
  `,
};

export const education = {
  language: 'tsx',
  code: `Education:
    🎓 Bachelor of Information Technologies, Azerbaijan State Economic University, Baku, Azerbaijan
    🎓 Fullstack Development, Code Academy
  `,
};
