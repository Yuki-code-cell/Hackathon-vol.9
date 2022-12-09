import create from 'zustand';
import { IpadicFeatures } from '../types/Resolve';
import { TWikiResponse } from '../types/Resolve';
type MorphologicalStore = {
  tokenizedTexts: IpadicFeatures[];
  changeTokenizedTexts: (input: IpadicFeatures[]) => void;
};
type WikipediaStore = {
  wikipediaInfo: TWikiResponse[];
  changeWikiInfo: (wikiInfo: TWikiResponse[]) => void;
};

export const useMorphologicalStore = create<MorphologicalStore>((set) => ({
  tokenizedTexts: [],
  changeTokenizedTexts: (tokenized: IpadicFeatures[]) =>
    set(() => {
      return {
        tokenizedTexts: tokenized,
      };
    }),
}));

export const useWikipediaStore = create<WikipediaStore>((set) => ({
  wikipediaInfo: [],
  changeWikiInfo: (wikiInfo: TWikiResponse[]) => {
    set((wikis) => {
      return { wikipediaInfo: [...wikis.wikipediaInfo, ...wikiInfo].reverse() };
    });
  },
}));
