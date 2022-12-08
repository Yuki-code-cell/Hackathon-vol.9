import { TFaq } from '../../../types/Resolve';
import { Faq } from './Faq';

type TProps = {
  faqs: TFaq[];
};
export const Faqs = ({ faqs }: TProps) => {
  const faqColor = (ans: string) => (ans ? 'bg-green-300' : 'bg-red-300');
  return (
    <div className=" bg-white rounded-md w-3/5 my-10 shadow-2xl border-4 ml-auto mr-5">
      {faqs.map((faq, index) => {
        return (
          <Faq
            index={index}
            color={faqColor(faq.answer)}
            faq={faq}
            key={index}
          />
        );
      })}
    </div>
  );
};
