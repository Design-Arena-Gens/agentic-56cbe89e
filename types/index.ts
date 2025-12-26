export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  coverage: string[];
  cadence: string;
  language: "fr" | "en" | "multi";
};

export type SourceCategory = {
  id: string;
  label: string;
  description: string;
  focus: string;
  sources: Source[];
};

export type RoutineStep = {
  id: string;
  time: string;
  label: string;
  detail: string;
  output: string;
};

export type Insight = {
  id: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  sourceName: string;
  sourceUrl: string;
};
