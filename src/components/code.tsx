'use client';
import { useEffect, useState } from 'react';
import { getHighlighter } from 'shiki';

interface CodeSnippetProps {
  snippets?: { language: string; code: string }[];
  snippet?: { language: string; code: string };
}

export default function CodeSnippet({ snippets, snippet }: CodeSnippetProps) {
  const [codeHTML, setCodeHTML] = useState<string[]>([]);

  useEffect(() => {
    const allSnippets = snippets || (snippet ? [snippet] : []);

    if (allSnippets.length === 0) return;

    getHighlighter({ themes: ['dark-plus'], langs: ['tsx', 'js'] }).then(
      (highlighter) => {
        const formattedSnippets = allSnippets.map((snip) =>
          highlighter.codeToHtml(snip.code, {
            lang: snip.language,
            theme: 'dark-plus',
          })
        );
        setCodeHTML(formattedSnippets);
      }
    );
  }, [snippets, snippet]);

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
