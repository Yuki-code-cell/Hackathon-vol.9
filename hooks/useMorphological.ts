import { builder } from 'kuromoji';
import { useEffect, useState } from 'react';
import { TTokenizer } from '../types/Resolve';
type TProps = {
  text: string;
};
export const useMorphological = ({ text }: TProps): TTokenizer[] => {
  const [tokenizedText, setTokenizedText] = useState<TTokenizer[]>([]);
  useEffect(() => {
    builder({ dicPath: '/dict' }).build(async (err: any, tokenizer: any) => {
      try {
        const filteredTokens = await tokenizer
          .tokenize(text)
          .filter((x: any) => {
            return x.pos === '名詞';
          });
        setTokenizedText(filteredTokens);
      } catch (error) {
        throw new Error(err);
      }
    });
  }, [text]);
  return tokenizedText;
};
