import create from 'zustand';
type Answer = {
  index: number;
  text: string;
};
type AnswersStore = {
  answers: Answer[];
  addAnswers: ({ index, text }: Answer) => void;
  removeAnswers: ({ index, text }: Answer) => void;
  // indexは配列の中のどの要素を変更するか、text変更する内容
  changeAnswer: ({ index, text }: Answer) => void;
};

const sortByIndex = (array: Answer[]) => {
  return array.sort((a, b) => (a.index < b.index ? -1 : 1));
};

export const AnswersStore = create<AnswersStore>((set) => ({
  answers: [],
  addAnswers: ({ index, text }) => {
    set((state) => {
      return {
        answers: sortByIndex([...state.answers, { index, text }]),
      };
    });
  },
  // 特定の値だけ変更するみたいなことした方が良さそう
  removeAnswers: ({ index, text }) => {
    set((state) => {
      return {
        answers: sortByIndex(
          [...state.answers].filter((ans) => ans.index !== index)
        ),
      };
    });
  },
  //   重複するobjectを消してから新しい値をpushし、値をsortして返す
  changeAnswer: ({ index, text }) => {
    set((state) => {
      return {
        answers: sortByIndex(
          [...state.answers].map((ans) => {
            if (ans.index !== index) {
              return ans;
            } else {
              return { index, text };
            }
          })
        ),
      };
    });
  },
}));
