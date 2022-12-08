import { TFaq } from '../../../types/Resolve';
import { Faq } from './Faq';

type TProps = {
  faqs: TFaq[];
  className?: string;
};
export const Faqs = ({ faqs, className }: TProps) => {
  const faqColor = (ans: string) => (ans ? 'bg-green-300' : 'bg-red-300');
  return (
    <div className={`${className} bg-white rounded-md shadow-2xl border-4`}>
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
