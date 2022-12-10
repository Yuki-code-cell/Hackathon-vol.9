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
  const { questions, addQuestions } = QuestionsStore();
  const [formQuestion, setFormQuestion] = useState('');
  const router = useRouter();

  return (
    <div className=" bg-white p-5 mx-auto my-5 w-4/5 shadow-2xl rounded-md">
      <p>質問作成</p>
      <div className="flex justify-center items-center">
        <Input
          name="質問"
          content={formQuestion}
          onChange={setFormQuestion}
        ></Input>
        <Button
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
      <div className="w-2/3 mx-auto">
        {questions.map((q, idx) => {
          return (
            <div key={q.order} className="flex items-center my-5 w-2/3 ">
              <p className="mx-1 bg-orange-400 w-10 h-10 rounded-md flex justify-center items-center">
                {q.order}
              </p>
              <p className="mx-1">{q.question}</p>
            </div>
          );
        })}
        <div className="flex justify-center">
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
