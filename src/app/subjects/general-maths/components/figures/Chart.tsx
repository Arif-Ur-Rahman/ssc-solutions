// components/figures/Chart.tsx
//
// Draws a chart from `charts.ts`. A chart carries its numbers in the table's
// own units; everything below is pixels, and `X`/`Y` are the two places the
// units meet. The two axes are scaled independently, which is the one thing
// that separates a chart from a `Scene`.

import type { Chart } from "./charts";

// The plot area, and the room kept around it for the numbers and the letters.
const PW = 430;
const PH = 250;
const ML = 40;
const MR = 30;
// The top margin holds the Y that sits above the axis, so it is the height of
// that letter plus the gap, not the bare 10px the plot itself wants.
const MT = 30;
const MB = 38;

const INK = "var(--color-gold-deep)"; // bars and lines
const GRID = "var(--color-faint)"; // the ছক কাগজ under them
const NAME = "var(--color-parchment)"; // the X and Y letters
const TEXT = "var(--color-muted)"; // the numbers on the axes
const FONT = "var(--font-sans)";

export default function ChartFigure({ chart }: { chart: Chart }) {
  const { bars = [], line = [], xTicks, yTicks } = chart;

  const xs = [
    ...xTicks,
    ...bars.flatMap(([a, b]) => [a, b]),
    ...line.map(([x]) => x),
  ];
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMax = Math.max(
    ...yTicks,
    ...bars.map(([, , h]) => h),
    ...line.map(([, y]) => y)
  );

  const X = (v: number) => ML + ((v - xMin) / (xMax - xMin || 1)) * PW;
  const Y = (v: number) => MT + PH - (v / (yMax || 1)) * PH;

  const width = ML + PW + MR;
  const height = MT + PH + MB;

  // A tick's number, printed the way the book prints it — 45.5 stays 45.5,
  // and a whole number keeps no decimal point.
  const num = (v: number) => (Number.isInteger(v) ? String(v) : v.toFixed(1));

  return (
    <figure className="mb-5 rounded-xl border border-gold/8 bg-parchment/[0.02] px-3 py-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        role="img"
        aria-label={chart.caption ?? "লেখচিত্র"}
        className="mx-auto block h-auto max-w-full"
      >
        {/* ── ছক কাগজ ── */}
        {xTicks.map((v) => (
          <line
            key={`gx${v}`}
            x1={X(v)}
            y1={Y(0)}
            x2={X(v)}
            y2={Y(yMax)}
            stroke={GRID}
            strokeWidth={0.6}
            opacity={0.4}
          />
        ))}
        {yTicks.map((v) => (
          <line
            key={`gy${v}`}
            x1={X(xMin)}
            y1={Y(v)}
            x2={X(xMax)}
            y2={Y(v)}
            stroke={GRID}
            strokeWidth={0.6}
            opacity={0.4}
          />
        ))}

        {/* ── আয়তলেখ. The book alternates the shading of the rectangles so
             that two neighbours of the same height stay two rectangles. ── */}
        {bars.map(([a, b, h], i) => (
          <rect
            key={`bar${i}`}
            x={X(a)}
            y={Y(h)}
            width={X(b) - X(a)}
            height={Y(0) - Y(h)}
            fill="var(--color-gold)"
            fillOpacity={i % 2 ? 0.2 : 0.09}
            stroke={INK}
            strokeWidth={1}
          />
        ))}

        {/* ── বহুভুজ বা অজিভ ── */}
        {line.length > 0 && (
          <polyline
            points={line.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}
            fill="none"
            stroke={INK}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
        )}
        {line.map(([x, y], i) =>
          // The ends are carried down to the axis to close the figure; they
          // are not readings, so they carry no dot.
          y === 0 && (i === 0 || i === line.length - 1) ? null : (
            <circle key={`d${i}`} cx={X(x)} cy={Y(y)} r={3} fill={INK} />
          )
        )}

        {/* ── অক্ষদ্বয় ── */}
        <line
          x1={X(xMin)}
          y1={Y(0)}
          x2={X(xMax) + 16}
          y2={Y(0)}
          stroke={NAME}
          strokeWidth={1.4}
        />
        <line
          x1={X(xMin)}
          y1={Y(0)}
          x2={X(xMin)}
          y2={Y(yMax) - 14}
          stroke={NAME}
          strokeWidth={1.4}
        />
        <text
          x={X(xMax) + 22}
          y={Y(0) + 4}
          fill={NAME}
          fontFamily={FONT}
          fontSize={12}
          fontStyle="italic"
        >
          X
        </text>
        <text
          x={X(xMin)}
          y={Y(yMax) - 20}
          textAnchor="middle"
          fill={NAME}
          fontFamily={FONT}
          fontSize={12}
          fontStyle="italic"
        >
          Y
        </text>

        {/* ── The ছেদ চিহ্ন, saying the x-axis skips everything up to its
             first number ── */}
        {chart.xBreak && (
          <g stroke={NAME} strokeWidth={1.2}>
            <line x1={X(xMin) + 6} y1={Y(0) + 5} x2={X(xMin) + 12} y2={Y(0) - 5} />
            <line x1={X(xMin) + 12} y1={Y(0) + 5} x2={X(xMin) + 18} y2={Y(0) - 5} />
          </g>
        )}

        {/* ── The numbers ── */}
        {xTicks.map((v) => (
          <text
            key={`tx${v}`}
            x={X(v)}
            y={Y(0) + 15}
            textAnchor="middle"
            fill={TEXT}
            fontFamily={FONT}
            fontSize={10}
          >
            {num(v)}
          </text>
        ))}
        {yTicks.map((v) => (
          <text
            key={`ty${v}`}
            x={X(xMin) - 7}
            y={Y(v) + 3.5}
            textAnchor="end"
            fill={TEXT}
            fontFamily={FONT}
            fontSize={10}
          >
            {num(v)}
          </text>
        ))}
      </svg>
      {chart.caption && (
        <figcaption className="mt-3 text-center text-xs leading-relaxed text-faint">
          {chart.caption}
        </figcaption>
      )}
    </figure>
  );
}
