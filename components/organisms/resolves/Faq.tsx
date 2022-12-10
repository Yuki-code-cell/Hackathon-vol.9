import { TFaq } from '../../../types/Faq';
import { TQuestion } from '../../../types/Question';
import { AnswerInput } from './AnswerInput';
type TProps = {
  index: number;
  question: TQuestion;
};
export const Faq = ({ index, question }: TProps) => {
  return (
    <div key={index} className="flex place-items-start p-5 my-5">
      <span className={`rounded-md p-6 mx-2`}>{index + 1}</span>
      <div className="w-full">
        <p>Q. {question.question}</p>
        <AnswerInput answer={''} />
      </div>
    </div>
  );
};
