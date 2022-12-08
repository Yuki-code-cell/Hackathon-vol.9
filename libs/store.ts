import create from 'zustand';
import { IpadicFeatures } from '../types/Resolve';
type MorphologicalStore = {
  tokenizedTexts: IpadicFeatures[];
  changeTokenizedTexts: (input: IpadicFeatures[]) => void;
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
