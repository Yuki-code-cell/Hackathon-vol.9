import { builder } from 'kuromoji';
import type { Tokenizer, IpadicFeatures } from 'kuromoji';
type TProps = {
  text: string;
  setTokenizer: (text: IpadicFeatures[]) => void;
};
export const Morphologicalize = ({ text, setTokenizer }: TProps): void => {
  builder({ dicPath: '/dict' }).build(
    (err: Error, tokenizer: Tokenizer<IpadicFeatures>) => {
      try {
        const filteredTokens = tokenizer
          .tokenize(text)
          .filter((x: IpadicFeatures) => {
            return x.pos === '名詞';
          });
        setTokenizer(filteredTokens);
      } catch (error) {
        throw new Error(err.message);
      }
    }
  );
};
