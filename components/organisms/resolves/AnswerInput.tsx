import { useState } from 'react';
import { useMorphologicalStore } from '../../../stores/MorphologicalStore';
import { useWikipediaStore } from '../../../stores/WikipediaStore';
import { Morphologicalize } from '../../../util/morphologicalize';

import { Button } from '../../atoms/Button';
import { TextArea } from '../../atoms/TextArea';
type TProps = {
  answer: string;
};
export const AnswerInput = ({ answer }: TProps) => {
  const [text, setText] = useState(answer);
  const [isEdit, setIsEdit] = useState(answer ? true : false);
  const { changeTokenizedTexts } = useMorphologicalStore();
  const { resetWikiInfo } = useWikipediaStore();
  return (
    <div className="py-3">
      {isEdit ? (
        <p className="py-3">
          A. {text}
          <Button className="mx-2 text-sm" onClick={() => setIsEdit(false)}>
            編集
          </Button>
        </p>
      ) : (
        <>
          <TextArea value={answer} onChange={setText} />
          <Button
            className=" ml-auto block"
            onClick={() => {
              setIsEdit(true);
              Morphologicalize({ text, setTokenizer: changeTokenizedTexts });
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
