export interface ISelectionConfig {
  selector: {
    market: string;
    diagram: string;
    name: string;
  };
  title: string;
  unit?: string;
  extrema?: {
    min: number;
    max: number;
  };
  facts?: string[];
}

export const selectionConfig: ISelectionConfig[] = [
  {
    selector: {
      market: "Kaffee",
      diagram: "Umsatzveränderung",
      name: "Total",
    },
    title: "Change of Sales",
    unit: "%",
    extrema: {
      min: -40,
      max: 40,
    },
    facts: []
  },
  {
    selector: {
      market: "Kaffee",
      diagram: "Durchschnittlicher Umsatz pro Kopf",
      name: "Total",
    },
    title: "Average Sales per Head",
    unit: "€",
    extrema: {
      min: 0,
      max: 800,
    },
    facts: [
      "🚀 The highest consuming country is <b>Finnland</b> with a value of <b>5 kg</b> per head.",
      "📉 The lowest consuming country is <b>Spain</b> with a value of <b>2 kg</b> per head.",
      "⚖️ The average consumption value is <b>3 kg</b> per head.",
    ],
  },
];
