import React from 'react';
import { TFaq } from '../../../types/Resolve';
import { AnswerInput } from './AnswerInput';
type TProps = {
  index: number;
  color: string;
  faq: TFaq;
};
export const Faq = ({ index, color, faq }: TProps) => {
  return (
    <div key={index} className="flex place-items-start p-5 my-5">
      <span className={`${color} rounded-md p-6 mx-2`}>{index + 1}</span>
      <div className="w-full">
        <p>Q. {faq.question}</p>
        <AnswerInput answer={faq.answer} />
      </div>
    </div>
  );
};
