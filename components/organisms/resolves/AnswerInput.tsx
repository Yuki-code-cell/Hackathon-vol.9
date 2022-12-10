import { useState } from 'react';
import { useMorphologicalStore } from '../../../stores/MorphologicalStore';
import { useWikipediaStore } from '../../../stores/WikipediaStore';
import { Morphologicalize } from '../../../util/morphologicalize';
import { Button } from '../../atoms/Button';
type TAnswer = {
  index: number;
  text: string;
};
type TProps = {
  index: number;
  answers: TAnswer[];
  onChange: ({ index, text }: TAnswer) => void;
};
export const AnswerInput = ({ index, answers, onChange }: TProps) => {
  const [isEdit, setIsEdit] = useState(answers ? true : false);
  const { changeTokenizedTexts } = useMorphologicalStore();
  const { resetWikiInfo } = useWikipediaStore();
  console.log(answers);
  return (
    <div className="py-3">
      {isEdit ? (
        <p className="py-3">
          A. {answers[index] ? answers[index].text : ''}
          <Button className="mx-2 text-sm" onClick={() => setIsEdit(false)}>
            編集
          </Button>
        </p>
      ) : (
        <>
          <textarea
            className={` w-full border-2 border-black rounded-md p-3 h-40`}
            value={answers[index] ? answers[index].text : ''}
            onChange={(e) => {
              console.log(`index:${index} text:${e.target.value}`);
              onChange({ index: index, text: e.target.value });
            }}
          />
          <Button
            className=" ml-auto block"
            onClick={() => {
              setIsEdit(true);
              Morphologicalize({
                text: answers[index] ? answers[index].text : '',
                setTokenizer: changeTokenizedTexts,
              });
              resetWikiInfo();
            }}
          >
            保存
          </Button>
        </>
      )}
    </div>
  );
};
