import React from 'react';
import { TQuestion } from '../../../types/Question';
import { Faq } from './Faq';

type TProps = {
  questions: TQuestion[];
  className?: string;
};
export const Faqs = React.memo(({ questions, className }: TProps) => {
  console.log('Faqs');
  return (
    <div className={`${className} bg-white rounded-md shadow-2xl border-4`}>
      {questions.map((question, index) => {
        return <Faq index={index} question={question} key={index} />;
      })}
    </div>
  );
});
Faqs.displayName = 'Faqs';
