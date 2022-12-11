import { AnswersStore } from '../../../stores/AnswersStore';
import { TQuestion } from '../../../types/Question';
import { AnswerInput } from './AnswerInput';
type TProps = {
  index: number;
  question: TQuestion;
};
export const Faq = ({ index, question }: TProps) => {
  const { answers, changeAnswer } = AnswersStore();
  return (
    <div className="flex place-items-start p-5 my-5">
      <span className={`rounded-md p-6 mx-2`}>{index + 1}</span>
      <div className="w-full">
        <p>Q. {question.question}</p>
        <AnswerInput index={index} answers={answers} onChange={changeAnswer} />
      </div>
    </div>
  );
};
