type TInput = {
  flowId: string;
  question: string;
  order: number;
};

type TProps = {
  flowId: string;
  question: string;
  order: number;
  changeQuestion: ({ flowId, question, order }: TInput) => void;
};

export const Question = ({
  flowId,
  question,
  order,
  changeQuestion,
}: TProps) => {
  return (
    <div className="flex items-center  my-5">
      <p className="mr-2 bg-orange-400 p-5 rounded-md flex justify-center items-center">
        {order}
      </p>

      <div className="flex items-center">
        <textarea
          value={question}
          className=" border-2 border-black rounded-md p-3 h-16"
          onChange={(e) => {
            changeQuestion({ flowId, question: e.target.value, order });
          }}
        />
      </div>
    </div>
  );
};
