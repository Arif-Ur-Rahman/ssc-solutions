// components/Table.tsx
//
// A সারণি. পরিসংখ্যান is written in tables — a গণসংখ্যা নিবেশন, a ক্রমযোজিত
// সারণি, the fᵢxᵢ column a গড় is added up in — and a table read as a run of
// prose is no longer a table. So a question or a solution step may carry one,
// written as a block of its own:
//
//   নিচের সারণিতে —
//   [[table]]                  the first row is the heading row
//   শ্রেণি ব্যাপ্তি | গণসংখ্যা
//   $30-35$ | $3$
//
//   বাকি কথা এখানে…
//
// `[[table side]]` instead makes the first *column* the heading, which is how
// the book prints its short, wide tables. A blank line ends the block, and so
// does the end of the string. Cells go through MathText, so a heading is
// Bangla prose and the numbers are KaTeX, exactly as on the page.

import MathText from "./MathText";

const OPEN = /^\[\[table( side)?\]\]$/;

interface Block {
  side: boolean;
  rows: string[][];
}

// The text, cut into the prose between the tables and the tables themselves.
function parse(text: string): (string | Block)[] {
  const out: (string | Block)[] = [];
  const lines = text.split("\n");
  let prose: string[] = [];

  const flush = () => {
    const joined = prose.join("\n").trim();
    if (joined) out.push(joined);
    prose = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const open = lines[i].trim().match(OPEN);
    if (!open) {
      prose.push(lines[i]);
      continue;
    }

    flush();
    const rows: string[][] = [];
    while (++i < lines.length && lines[i].trim() !== "") {
      rows.push(lines[i].split("|").map((cell) => cell.trim()));
    }
    if (rows.length > 0) out.push({ side: Boolean(open[1]), rows });
  }

  flush();
  return out;
}

function Grid({ block }: { block: Block }) {
  const pad = "px-3 py-1.5 whitespace-nowrap";

  return (
    <div className="my-3 overflow-x-auto">
      <table className="mx-auto border-collapse text-sm">
        <tbody>
          {block.rows.map((cells, r) => (
            <tr key={r}>
              {cells.map((cell, c) => {
                const head = block.side ? c === 0 : r === 0;
                return (
                  <td
                    key={c}
                    className={`border border-gold/20 ${pad} ${
                      head
                        ? "font-semibold text-gold-soft"
                        : "text-center text-parchment"
                    }`}
                  >
                    <MathText text={cell} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// One line of a question or a solution: prose and maths, with any সারণি in it
// drawn as a table rather than read out as text.
export default function Line({ text }: { text: string }) {
  const blocks = parse(text);

  if (blocks.length === 1 && typeof blocks[0] === "string") {
    return <MathText text={blocks[0]} />;
  }

  return (
    <>
      {blocks.map((block, i) =>
        typeof block === "string" ? (
          <MathText key={i} text={block} />
        ) : (
          <Grid key={i} block={block} />
        )
      )}
    </>
  );
}
