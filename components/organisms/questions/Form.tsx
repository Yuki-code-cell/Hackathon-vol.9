import { useRouter } from 'next/router';
import { useState } from 'react';
import { createQuestion } from '../../../apis/questions/create';
import { QuestionsStore } from '../../../stores/QuestionsStore';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
type TProps = {
  flowId: string | undefined;
};
export const Form = ({ flowId }: TProps) => {
  const {
    questions,
    addQuestions,
    changeQuestion,
    removeQuestions,
    sortQuestions,
  } = QuestionsStore();
  const [formQuestion, setFormQuestion] = useState('');
  const router = useRouter();
  console.log(questions);
  return (
    <div className=" bg-white p-5 mx-auto my-5 w-4/5 shadow-2xl rounded-md">
      <div className=" mx-auto">
        <div className="flex items-center justify-center">
          <Input
            name="質問"
            content={formQuestion}
            onChange={setFormQuestion}
          ></Input>
          <Button
            className="mx-3"
            onClick={() => {
              addQuestions({
                flowId: flowId as string,
                question: formQuestion,
                order: questions.length + 1,
              });
              setFormQuestion('');
            }}
          >
            追加
          </Button>
        </div>
        {/* 別コンポーネントにするとなぜかダメだった */}
        {/* おそらくchengeQuestionに何か入れるたびにコンポーネントが作り直されてる */}
        {questions.map((q, index) => {
          return (
            <div className="flex items-center  my-5" key={index}>
              <p className="mr-2 bg-orange-400 p-5 rounded-md flex justify-center items-center">
                {q.order}
              </p>
              <div className="flex items-center">
                <textarea
                  value={q.question}
                  className=" border-2 border-black rounded-md p-3 h-16"
                  onChange={(e) => {
                    changeQuestion({
                      flowId: flowId as string,
                      question: e.target.value,
                      order: q.order,
                    });
                  }}
                />
              </div>
              <Button
                className="mx-2"
                onClick={() => {
                  removeQuestions(q.order);
                  sortQuestions({
                    flowId: flowId as string,
                    question: q.question,
                    order: q.order,
                  });
                }}
              >
                削除
              </Button>
            </div>
          );
        })}
        <div className="flex justify-center ">
          <Button
            className=" w-2/3 mt-10"
            onClick={() => {
              createQuestion(questions).then(() => {
                router.push('/');
              });
            }}
          >
            作成する
          </Button>
        </div>
      </div>
    </div>
  );
};
