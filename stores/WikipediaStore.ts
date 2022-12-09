import create from 'zustand';
import { TWikiResponse } from '../types/Wikipedia';
type WikipediaStore = {
  wikipediaInfo: TWikiResponse[];
  changeWikiInfo: (wikiInfo: TWikiResponse[]) => void;
  resetWikiInfo: () => void;
};
export const useWikipediaStore = create<WikipediaStore>((set) => ({
  wikipediaInfo: [],
  changeWikiInfo: (wikiInfo: TWikiResponse[]) => {
    set((wikis) => {
      return { wikipediaInfo: [...wikis.wikipediaInfo, ...wikiInfo].reverse() };
    });
  },
  resetWikiInfo: () =>
    set((wikis) => {
      return { wikipediaInfo: [] };
    }),
}));
