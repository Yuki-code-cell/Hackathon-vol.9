import { builder, IpadicFeatures, TokenizerBuilder } from 'kuromoji';
type TProps = {
  text: string;
};
// const createMorphologicalTexts = async (text: string): Promise<any> => {
builder({ dicPath: '/dict' }).build(async (err: any, tokenizer: any) => {
  let res;
  if (err) {
    throw new Error('kuromoji');
  } else {
    const tokens = await tokenizer.tokenize(text).filter((x: any) => {
      return x.pos === '名詞';
    });
    res = tokens;
  }
  console.log(res);
  return res;
});
// };
export const useMorphological = async ({ text }: TProps): Promise<any> => {
  builder({ dicPath: '/dict' }).build();
};
