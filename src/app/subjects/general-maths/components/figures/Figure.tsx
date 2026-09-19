// components/figures/Figure.tsx
//
// Draws a scene from `scenes.ts`. Everything the scene says is in the
// problem's units with y upwards; everything below is in pixels with y
// downwards, and `P` is the one place the two meet. Text is never flipped,
// which is the reason the conversion is a function rather than an SVG
// transform on a group.

import type { Pt, Scene, Shape } from "./types";
import { scenes } from "./scenes";

// px the longer side of the drawing occupies, and the margin kept clear
// around it. Labels claim whatever extra room they need on top of this.
const SIZE = 250;
const PAD = 24;

const INK = "var(--color-gold-deep)"; // the figure itself
const AID = "var(--color-faint)"; // construction lines
const MARK = "var(--color-gold-soft)"; // angles and ticks
const NAME = "var(--color-parchment)"; // vertex letters
const TEXT = "var(--color-muted)"; // lengths and notes
const FONT = "var(--font-sans)";

interface XY {
  x: number;
  y: number;
}

function shapePoints(s: Shape): Pt[] {
  switch (s.t) {
    case "poly":
      return s.pts;
    case "ring":
      return [...s.outer, ...s.inner];
    case "seg":
    case "len":
    case "dim":
    case "tick":
      return [s.a, s.b];
    case "ang":
    case "sq":
      return [s.at, s.a, s.b];
    case "pt":
    case "note":
      return [s.at];
  }
}

const sub = (p: XY, q: XY): XY => ({ x: p.x - q.x, y: p.y - q.y });
const same = (p: Pt, q: Pt) => p[0] === q[0] && p[1] === q[1];

function unit(v: XY): XY {
  const n = Math.hypot(v.x, v.y) || 1;
  return { x: v.x / n, y: v.y / n };
}

// Where a label sits relative to its anchor. `d` is a direction in pixel
// space, so a positive y pushes the text downwards.
function place(d: XY) {
  return {
    textAnchor: d.x > 0.35 ? "start" : d.x < -0.35 ? "end" : "middle",
    dy: d.y > 0.35 ? "0.82em" : d.y < -0.35 ? "-0.15em" : "0.32em",
  } as const;
}

export default function Figure({ name }: { name: string }) {
  const scene: Scene | undefined = scenes[name];
  if (!scene) return null;

  const pts = scene.shapes.flatMap(shapePoints);
  if (pts.length === 0) return null;

  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);

  const span = Math.max(maxX - minX, maxY - minY) || 1;
  const k = (scene.size ?? SIZE) / span;
  const pad = scene.pad ?? PAD;
  const width = (maxX - minX) * k + 2 * pad;
  const height = (maxY - minY) * k + 2 * pad;

  const P = ([x, y]: Pt): XY => ({
    x: (x - minX) * k + pad,
    y: (maxY - y) * k + pad,
  });

  // A label with no direction of its own is pushed away from the middle of
  // whatever it belongs to — the polygon it is an edge or a vertex of, and
  // the whole drawing otherwise. The distinction matters in the scenes that
  // put two shapes side by side, where the middle of the drawing is in the
  // gap between them and would send half the labels inwards.
  const closed = scene.shapes.filter(
    (s): s is Extract<Shape, { t: "poly" }> => s.t === "poly" && !s.open
  );
  const centre = (list: Pt[]): XY =>
    P([
      list.reduce((n, p) => n + p[0], 0) / list.length,
      list.reduce((n, p) => n + p[1], 0) / list.length,
    ]);
  const whole = P([(minX + maxX) / 2, (minY + maxY) / 2]);

  const edgeHome = (a: Pt, b: Pt): XY => {
    for (const poly of closed) {
      const n = poly.pts.length;
      for (let i = 0; i < n; i++) {
        const p = poly.pts[i];
        const q = poly.pts[(i + 1) % n];
        if ((same(p, a) && same(q, b)) || (same(p, b) && same(q, a))) {
          return centre(poly.pts);
        }
      }
    }
    return whole;
  };
  const vertexHome = (a: Pt): XY => {
    const owners = closed.filter((poly) => poly.pts.some((p) => same(p, a)));
    return owners.length === 1 ? centre(owners[0].pts) : whole;
  };

  // A label's rough footprint, collected as the shapes are drawn so that the
  // viewBox can be grown to hold it. Character count is a crude width, but a
  // generous one, and the alternative is measuring text the browser has not
  // laid out yet.
  interface Box {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
  }
  const boxOf = (at: XY, text: string, size: number, anchor: string): Box => {
    const w = text.length * size * 0.62;
    const left =
      anchor === "start" ? at.x : anchor === "end" ? at.x - w : at.x - w / 2;
    return {
      x0: left - 3,
      y0: at.y - size * 1.2,
      x1: left + w + 3,
      y1: at.y + size * 1.1,
    };
  };

  const d = (pt: Pt) => {
    const p = P(pt);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  };
  const path = (list: Pt[]) =>
    list.map((p, i) => `${i === 0 ? "M" : "L"}${d(p)}`).join(" ") + "Z";

  const arrow = `arrow-${name.replace(/[^a-zA-Z0-9]/g, "")}`;
  const hasDim = scene.shapes.some((s) => s.t === "dim");

  const drawn: { el: React.ReactNode; boxes: Box[] }[] = scene.shapes.map(
    (s, i): { el: React.ReactNode; boxes: Box[] } => {
    switch (s.t) {
      case "poly":
        return {
          boxes: [],
          el: (
          <path
            key={i}
            d={
              s.pts.map((p, j) => `${j === 0 ? "M" : "L"}${d(p)}`).join(" ") +
              (s.open ? "" : "Z")
            }
            fill={s.fill ? "var(--color-gold)" : "none"}
            fillOpacity={s.fill ? 0.07 : undefined}
            stroke={s.dash ? AID : INK}
            strokeWidth={s.dash ? 1.2 : 1.6}
            strokeDasharray={s.dash ? "5 4" : undefined}
            strokeLinejoin="round"
          />
          ),
        };

      case "ring":
        return {
          boxes: [],
          el: (
          <path
            key={i}
            d={`${path(s.outer)} ${path(s.inner)}`}
            fillRule="evenodd"
            fill="var(--color-gold)"
            fillOpacity={0.14}
            stroke="none"
          />
          ),
        };

      case "seg":
        return {
          boxes: [],
          el: (
          <line
            key={i}
            x1={P(s.a).x}
            y1={P(s.a).y}
            x2={P(s.b).x}
            y2={P(s.b).y}
            stroke={s.dash ? AID : INK}
            strokeWidth={s.dash ? 1.2 : 1.6}
            strokeDasharray={s.dash ? "5 4" : undefined}
          />
          ),
        };

      case "pt": {
        const p = P(s.at);
        const dir = s.dir
          ? unit({ x: s.dir[0], y: -s.dir[1] })
          : unit(sub(p, vertexHome(s.at)));
        const at = { x: p.x + dir.x * 13, y: p.y + dir.y * 13 };
        const box = place(dir);
        return {
          boxes: s.label ? [boxOf(at, s.label, 13, box.textAnchor)] : [],
          el: (
          <g key={i}>
            {s.dot !== false && <circle cx={p.x} cy={p.y} r={2.4} fill={MARK} />}
            {s.label && (
              <text
                x={at.x}
                y={at.y}
                {...box}
                fill={NAME}
                fontFamily={FONT}
                fontSize={13}
                fontWeight={500}
              >
                {s.label}
              </text>
            )}
          </g>
          ),
        };
      }

      case "len":
      case "dim": {
        const a = P(s.a);
        const b = P(s.b);
        const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        const u = unit(sub(b, a));
        // Either normal will do; take the one pointing away from the shape the
        // side belongs to, then let the scene flip it with `side`.
        const home = edgeHome(s.a, s.b);
        let n = { x: -u.y, y: u.x };
        if (n.x * (m.x - home.x) + n.y * (m.y - home.y) < 0) {
          n = { x: -n.x, y: -n.y };
        }
        if (s.side === -1) n = { x: -n.x, y: -n.y };
        const off = s.off ?? 14;
        const at = { x: m.x + n.x * off, y: m.y + n.y * off };
        const box = place(n);
        return {
          boxes: [boxOf(at, s.text, 12, box.textAnchor)],
          el: (
          <g key={i}>
            {s.t === "dim" && (
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={AID}
                strokeWidth={1.1}
                markerStart={`url(#${arrow})`}
                markerEnd={`url(#${arrow})`}
              />
            )}
            <text
              x={at.x}
              y={at.y}
              {...box}
              fill={TEXT}
              fontFamily={FONT}
              fontSize={12}
            >
              {s.text}
            </text>
          </g>
          ),
        };
      }

      case "ang": {
        const o = P(s.at);
        const a1 = Math.atan2(P(s.a).y - o.y, P(s.a).x - o.x);
        const a2 = Math.atan2(P(s.b).y - o.y, P(s.b).x - o.x);
        let turn = a2 - a1;
        while (turn <= -Math.PI) turn += 2 * Math.PI;
        while (turn > Math.PI) turn -= 2 * Math.PI;
        const r = s.r ?? 22;
        const from = { x: o.x + r * Math.cos(a1), y: o.y + r * Math.sin(a1) };
        const to = { x: o.x + r * Math.cos(a2), y: o.y + r * Math.sin(a2) };
        const half = a1 + turn / 2;
        const lab = {
          x: o.x + (r + 14) * Math.cos(half),
          y: o.y + (r + 14) * Math.sin(half),
        };
        const box = place({ x: Math.cos(half), y: Math.sin(half) });
        return {
          boxes: s.text ? [boxOf(lab, s.text, 11.5, box.textAnchor)] : [],
          el: (
          <g key={i}>
            <path
              d={`M${from.x.toFixed(1)},${from.y.toFixed(1)} A${r},${r} 0 0 ${
                turn > 0 ? 1 : 0
              } ${to.x.toFixed(1)},${to.y.toFixed(1)}`}
              fill="none"
              stroke={MARK}
              strokeWidth={1.2}
            />
            {s.text && (
              <text
                x={lab.x}
                y={lab.y}
                {...box}
                fill={MARK}
                fontFamily={FONT}
                fontSize={11.5}
              >
                {s.text}
              </text>
            )}
          </g>
          ),
        };
      }

      case "sq": {
        const o = P(s.at);
        const u = unit(sub(P(s.a), o));
        const v = unit(sub(P(s.b), o));
        const m = 9;
        return {
          boxes: [],
          el: (
          <polyline
            key={i}
            points={`${o.x + u.x * m},${o.y + u.y * m} ${
              o.x + (u.x + v.x) * m
            },${o.y + (u.y + v.y) * m} ${o.x + v.x * m},${o.y + v.y * m}`}
            fill="none"
            stroke={INK}
            strokeWidth={1.2}
          />
          ),
        };
      }

      case "tick": {
        const a = P(s.a);
        const b = P(s.b);
        const m = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        const u = unit(sub(b, a));
        const n = { x: -u.y, y: u.x };
        const count = s.n ?? 1;
        return {
          boxes: [],
          el: (
          <g key={i}>
            {Array.from({ length: count }, (_, j) => {
              const t = (j - (count - 1) / 2) * 4.5;
              const c = { x: m.x + u.x * t, y: m.y + u.y * t };
              return (
                <line
                  key={j}
                  x1={c.x - n.x * 4.5}
                  y1={c.y - n.y * 4.5}
                  x2={c.x + n.x * 4.5}
                  y2={c.y + n.y * 4.5}
                  stroke={MARK}
                  strokeWidth={1.3}
                />
              );
            })}
          </g>
          ),
        };
      }

      case "note": {
        const p = P(s.at);
        const dir = s.dir ? unit({ x: s.dir[0], y: -s.dir[1] }) : { x: 0, y: 0 };
        const at = { x: p.x + dir.x * 12, y: p.y + dir.y * 12 };
        const box = place(dir);
        return {
          boxes: [boxOf(at, s.text, 12, box.textAnchor)],
          el: (
          <text
            key={i}
            x={at.x}
            y={at.y}
            {...box}
            fill={TEXT}
            fontFamily={FONT}
            fontSize={12}
          >
            {s.text}
          </text>
          ),
        };
      }
    }
  }
  );

  const boxes = drawn.flatMap((d) => d.boxes);
  const x0 = Math.min(0, ...boxes.map((b) => b.x0));
  const y0 = Math.min(0, ...boxes.map((b) => b.y0));
  const x1 = Math.max(width, ...boxes.map((b) => b.x1));
  const y1 = Math.max(height, ...boxes.map((b) => b.y1));
  const vw = x1 - x0;
  const vh = y1 - y0;

  return (
    <figure className="mb-5 rounded-xl border border-gold/8 bg-parchment/[0.02] px-3 py-4">
      <svg
        viewBox={`${x0.toFixed(1)} ${y0.toFixed(1)} ${vw.toFixed(1)} ${vh.toFixed(1)}`}
        width={vw}
        height={vh}
        role="img"
        aria-label={scene.caption ?? "চিত্র"}
        className="mx-auto block h-auto max-w-full"
      >
        {hasDim && (
          <defs>
            <marker
              id={arrow}
              viewBox="0 0 8 8"
              refX={7}
              refY={4}
              markerWidth={5}
              markerHeight={5}
              orient="auto-start-reverse"
            >
              <path d="M0,1 L7,4 L0,7 z" fill={AID} />
            </marker>
          </defs>
        )}
        {drawn.map((d) => d.el)}
      </svg>
      {scene.caption && (
        <figcaption className="mt-3 text-center text-xs leading-relaxed text-faint">
          {scene.caption}
        </figcaption>
      )}
    </figure>
  );
}
