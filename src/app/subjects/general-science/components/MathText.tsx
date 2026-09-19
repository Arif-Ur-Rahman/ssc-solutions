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
          const tex = part.slice(2, -2);

          // A step may carry a trailing justification — "…\\qquad\\left[ … ]".
          // That aside roughly doubles the line, which is what pushes a step
          // off the side of a phone. Split it out so it can wrap onto its own
          // line when there is no room, and sit alongside when there is.
          const note = tex.match(/^([\s\S]*?)\\qquad\\left\[([\s\S]*)\\right\]\s*$/);
          if (note) {
            return (
              <span key={i} className="my-2 flex flex-wrap items-baseline gap-x-6">
                <span
                  className="math-scroll min-w-0 max-w-full overflow-x-auto py-1"
                  dangerouslySetInnerHTML={{ __html: render(note[1], true) }}
                />
                <span
                  className="math-note math-scroll min-w-0 max-w-full overflow-x-auto py-1"
                  dangerouslySetInnerHTML={{
                    __html: render(`\\left[${note[2]}\\right]`, true),
                  }}
                />
              </span>
            );
          }

          return (
            <span
              key={i}
              className="math-scroll my-2 block overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: render(tex, true) }}
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
