export interface ISelectionConfig {
  selector: {
    market: string;
    diagram: string;
    name: string;
  };
  categories?: {
    selector: string;
    name: string;
  }[];
  title: string;
  unit?: string;
  extrema?: {
    min: number;
    max: number;
  };
}

const hotDrinkCategories = [
  { selector: "Kaffee", name: "Coffee" },
  { selector: "Tee", name: "Tea" },
  { selector: "Kakao", name: "Cocoa" },
];

export const selectionConfig: ISelectionConfig[] = [
  {
    selector: {
      market: "Heißgetränke",
      diagram: "Umsatzveränderung pro Segment",
      name: "Kaffee",
    },
    categories: [...hotDrinkCategories, { selector: "Total", name: "Total" }],
    title: "Change of Sales",
    unit: "%",
    extrema: {
      min: -40,
      max: 40,
    },
  },
  {
    selector: {
      market: "Heißgetränke",
      diagram: "Durchschnittlicher Umsatz pro Kopf",
      name: "Kaffee",
    },
    categories: [...hotDrinkCategories, { selector: "Total", name: "Total" }],
    title: "Average Sales per Head",
    unit: "€",
    extrema: {
      min: 0,
      max: 800,
    },
  },
  {
    selector: {
      market: "Heißgetränke",
      diagram: "Umsatz pro Segment",
      name: "Kaffee",
    },
    categories: [...hotDrinkCategories, { selector: "Total", name: "Total" }],
    title: "Sales per Segment",
    unit: "Mio. €",
    extrema: {
      min: 0,
      max: 800,
    },
  },
  {
    selector: {
      market: "Heißgetränke",
      diagram: "Preis pro Einheit",
      name: "Kaffee",
    },
    categories: [
      ...hotDrinkCategories,
      { selector: "Average", name: "Average" },
    ],
    title: "Average Price per Unit",
    unit: "€",
    extrema: {
      min: 0,
      max: 160,
    },
  },
  {
    selector: {
      market: "Heißgetränke",
      diagram: "Volumen pro Segment",
      name: "Kaffee",
    },
    categories: [...hotDrinkCategories, { selector: "Total", name: "Total" }],
    title: "Total Volume",
    unit: "Mio. kg",
    extrema: {
      min: 0,
      max: 500,
    },
  },
  {
    selector: {
      market: "Kaffee",
      diagram: "Außer-Haus-Umsatzanteil",
      name: "Außer Haus, Umsatzanteil",
    },
    title: "Out of House Sales Share",
    unit: "%",
    extrema: {
      min: 0,
      max: 100,
    },
  },
];
