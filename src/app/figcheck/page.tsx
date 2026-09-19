import Figure from "../subjects/general-maths/components/figures/Figure";
import { scenes } from "../subjects/general-maths/components/figures/scenes";

export default function FigCheck() {
  return (
    <div className="bg-ink p-6">
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(scenes).map((k) => (
          <div key={k}>
            <div className="mb-1 text-xs text-gold">{k}</div>
            <Figure name={k} />
          </div>
        ))}
      </div>
    </div>
  );
}
