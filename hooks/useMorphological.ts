import { builder, IpadicFeatures, TokenizerBuilder } from 'kuromoji';
type TProps = {
  text: string;
};
export const useMorphological = ({ text }: TProps) => {
  builder({ dicPath: 'dict' }).build((err: any, tokenizer: any) => {
    if (err) {
      console.log(err);
    } else {
      const tokens = tokenizer.tokenize(text);
      console.log(tokens);
    }
  });
};
