import { builder, IpadicFeatures, TokenizerBuilder } from 'kuromoji';
type TProps = {
  text: string;
  setTokenizer: (text: any) => void;
};
// 型ちゃんととってこないとダメだ
export const useMorphological = ({ text, setTokenizer }: TProps) => {
  builder({ dicPath: '/dict' }).build(async (err: any, tokenizer: any) => {
    try {
      const tokens = await tokenizer.tokenize(text).filter((x: any) => {
        return x.pos === '名詞';
      });
      setTokenizer(tokens);
    } catch (error) {
      throw new Error(err);
    }
  });
};
