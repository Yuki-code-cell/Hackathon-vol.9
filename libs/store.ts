import create from 'zustand';
type Tokenizer = {
  text: string;
  changeText: (text: string) => void;
  tokenize: () => void;
};

export const useTokenizer = create<Tokenizer>((set) => ({
  text: '',
  changeText: () =>
    set((input) => {
      return { text: input.text };
    }),
  tokenize: () => set({ text: '' }),
}));
