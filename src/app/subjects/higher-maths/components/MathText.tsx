// components/MathText.tsx

export default function MathText({ text }: { text: string }) {
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);

  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return (
            <div
              key={i}
              className="my-3 rounded bg-gray-100 p-2 text-center italic text-lg"
            >
              {part.slice(2, -2)}
            </div>
          );
        }

        if (part.startsWith("$") && part.endsWith("$")) {
          return (
            <em key={i} className="italic text-gray-700">
              {part.slice(1, -1)}
            </em>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}