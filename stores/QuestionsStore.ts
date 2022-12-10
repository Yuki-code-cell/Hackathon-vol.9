import create from 'zustand';
type Question = {
  flowId: string;
  question: string;
  order: number;
};
type QuestionsStore = {
  questions: Question[];
  addQuestions: ({ flowId, question, order }: Question) => void;
  removeQuestions: (order: number) => void;
  sortQuestions: ({ flowId, question, order }: Question) => void;
  // indexは配列の中のどの要素を変更するか、text変更する内容
  changeQuestion: ({ flowId, question, order }: Question) => void;
};

const sortByIndex = (array: Question[]) => {
  return array.sort((a, b) => (a.order < b.order ? -1 : 1));
};
export const QuestionsStore = create<QuestionsStore>((set) => ({
  questions: [],
  addQuestions: ({ flowId, question, order }) => {
    set((state) => {
      return {
        questions: sortByIndex([
          ...state.questions,
          { flowId, question, order },
        ]),
      };
    });
  },
  // 特定の値だけ変更するみたいなことした方が良さそう
  removeQuestions: (order) => {
    set((state) => {
      return {
        questions: [...state.questions].filter((ans) => ans.order !== order),
      };
    });
  },

  sortQuestions: ({ flowId, question, order }) => {
    set((state) => {
      return {
        questions: sortByIndex(
          [...state.questions].map((q) => {
            if (q.order > order) {
              return { flowId, question, order: q.order - 1 };
            } else {
              return q;
            }
          })
        ),
      };
    });
  },

  //   重複するobjectを消してから新しい値をpushし、値をsortして返す
  changeQuestion: ({ flowId, question, order }) => {
    set((state) => {
      return {
        questions: sortByIndex(
          [...state.questions].map((ans) => {
            if (ans.order !== order) {
              return ans;
            } else {
              return { flowId, question, order };
            }
          })
        ),
      };
    });
  },
}));
