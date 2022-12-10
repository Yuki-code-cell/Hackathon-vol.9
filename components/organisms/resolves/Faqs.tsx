import { TQuestion } from '../../../types/Question';
import { Faq } from './Faq';

type TProps = {
  questions: TQuestion[];
  className?: string;
};
export const Faqs = ({ questions, className }: TProps) => {
  const faqColor = (ans: string) => (ans ? 'bg-green-300' : 'bg-red-300');
  return (
    <div className={`${className} bg-white rounded-md shadow-2xl border-4`}>
      {questions.map((question, index) => {
        return <Faq index={index} question={question} key={index} />;
      })}
    </div>
  );
};
