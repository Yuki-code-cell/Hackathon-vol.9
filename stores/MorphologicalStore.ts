import { IpadicFeatures } from 'kuromoji';
import create from 'zustand';

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
