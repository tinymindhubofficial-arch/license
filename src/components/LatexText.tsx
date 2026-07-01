import React from "react";
import katex from "katex";

interface LatexTextProps {
  text: string;
  className?: string;
}

export const LatexText: React.FC<LatexTextProps> = ({ text, className = "" }) => {
  if (!text) return null;

  // Split by single dollar signs '$'
  const parts = text.split("$");

  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Even indices are raw text, odd indices are LaTeX math
        if (index % 2 === 0) {
          return <span key={index}>{part}</span>;
        } else {
          try {
            // Render KaTeX inline
            const html = katex.renderToString(part, {
              throwOnError: false,
              displayMode: false,
            });
            return (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: html }}
                className="inline-block mx-0.5 align-middle font-sans"
              />
            );
          } catch (error) {
            console.error("KaTeX error rendering:", part, error);
            return <span key={index} className="text-rose-500 font-mono text-xs">${part}$</span>;
          }
        }
      })}
    </span>
  );
};
