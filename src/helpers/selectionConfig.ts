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
    }
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
    }
  },
  {
    selector: {
      market: "Kaffee",
      diagram: "Umsatz",
      name: "Total",
    },
    title:  "Total Sales",
    unit: "Mio. €",
    extrema: {
      min: 0,
      max: 800,
    }
  },
  {
    selector: {
      market: "Kaffee",
      diagram: "Preis pro Einheit",
      name: "Average",
    },
    title:  "Average Price per Unit",
    unit: "€",
    extrema: {
      min: 0,
      max: 160,
    }
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
    }
  },
  {
    selector: {
      market: "Kaffee",
      diagram: "Volumen",
      name: "Total",
    },
    title: "Total Volume",
    unit: "Mio. kg",
    extrema: {
      min: 0,
      max: 500,
    }
  },
];
