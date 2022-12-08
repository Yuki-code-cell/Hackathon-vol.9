type TProps = {
  faqs: { question: string; answer: string }[];
};
export const SideBar = ({ faqs }: TProps) => {
  return (
    <div className=" bg-white rounded-md w-1/3 m-5 shadow-2xl border-4 ">
      {faqs.map((faq, index) => {
        return (
          <div key={faq.question} className="p-5">
            <div className="flex place-items-start">
              <span
                className={` ${
                  faq.answer ? 'bg-green-300' : 'bg-red-300'
                } rounded-md p-5 mx-2 bg`}
              >
                {index + 1}
              </span>
              <div>
                <p>Q. {faq.question}</p>
                <p className="py-3">A. {faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
