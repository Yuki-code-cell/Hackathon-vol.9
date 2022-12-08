import { builder } from 'kuromoji';
import type { Tokenizer, IpadicFeatures } from 'kuromoji';
import { useEffect } from 'react';
import { useMorphologicalStore } from '../libs/store';
type TProps = {
  text: string;
};
export const useMorphological = ({ text }: TProps): IpadicFeatures[] => {
  const { tokenizedTexts, changeTokenizedTexts } = useMorphologicalStore();
  useEffect(() => {
    builder({ dicPath: '/dict' }).build(
      (err: Error, tokenizer: Tokenizer<IpadicFeatures>) => {
        try {
          const filteredTokens = tokenizer
            .tokenize(text)
            .filter((x: IpadicFeatures) => {
              return x.pos === '名詞';
            });
          changeTokenizedTexts(filteredTokens);
        } catch (error) {
          throw new Error(err.message);
        }
      }
    );
  }, [text]);
  return tokenizedTexts;
};
