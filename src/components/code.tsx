'use client';
import { useEffect, useState } from 'react';
import { getHighlighter } from 'shiki';

interface CodeSnippetProps {
  snippets: { language: string; code: string }[];
}

export default function CodeSnippet({ snippets }: CodeSnippetProps) {
  const [codeHTML, setCodeHTML] = useState<string[]>([]);

  useEffect(() => {
    getHighlighter({ themes: ['dark-plus'], langs: ['tsx', 'js'] }).then(
      (highlighter) => {
        const formattedSnippets = snippets.map((snippet) =>
          highlighter.codeToHtml(snippet.code, {
            lang: snippet.language,
            theme: 'dark-plus',
          })
        );
        setCodeHTML(formattedSnippets);
      }
    );
  }, [snippets]);

  return (
    <div className="flex flex-col gap-4 w-full overflow-x-auto">
      {codeHTML.map((html, index) => (
        <div
          key={index}
          className="bg-gray-900 p-3 rounded-lg overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}
    </div>
  );
}
