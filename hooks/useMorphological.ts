import { builder, IpadicFeatures, TokenizerBuilder } from 'kuromoji';
type TProps = {
  text: string;
};
export const useMorphological = ({ text }: TProps) => {
  // return new Promise((resolve, reject) => {
  //     builder((err:any, tokenizer:any) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(tokenizer);
  //     });
  //   });
  builder({ dicPath: 'dict' }).build((err: any, tokenizer: any) => {
    if (err) {
      console.log(err);
    } else {
      const tokens = tokenizer.tokenize(text);
      console.log(tokens);
    }
  });
};
