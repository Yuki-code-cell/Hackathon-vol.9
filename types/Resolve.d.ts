export type { IpadicFeatures } from 'kuromoji';
export type TFaq = { question: string; answer: string };
// https://ja.wikipedia.org/?curid=${pageId}
export type TWikiResponse = {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
};
