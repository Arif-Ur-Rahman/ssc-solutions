// components/MathText.tsx
//
// Renders mixed prose + LaTeX. Inline maths goes between single dollars
// ($a^n$), display maths between double dollars ($$ ... $$). Single newlines
// in the source are preserved as line breaks.

import katex from "katex";

function render(tex: string, displayMode: boolean) {
  return katex.renderToString(tex, {
    displayMode,
    // Solution lines read as a left-aligned column of steps, not centred
    // equations, so display maths is flush-left.
    fleqn: true,
    throwOnError: false,
    strict: false,
    output: "html",
  });
}

export default function MathText({ text }: { text: string }) {
  const parts = text.trim().split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g);

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return (
            <span
              key={i}
              className="my-2 block overflow-x-auto py-1"
              dangerouslySetInnerHTML={{
                __html: render(part.slice(2, -2), true),
              }}
            />
          );
        }

        if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{
                __html: render(part.slice(1, -1), false),
              }}
            />
          );
        }

        const lines = part.split("\n");
        return (
          <span key={i}>
            {lines.map((line, j) => (
              <span key={j}>
                {j === 0 ? line : line.replace(/^\s+/, "")}
                {j < lines.length - 1 && <br />}
              </span>
            ))}
          </span>
        );
      })}
    </span>
  );
}
