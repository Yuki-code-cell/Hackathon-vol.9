import { useState } from 'react';
import { Button } from '../../atoms/Button';
type TProps = {
  answer: string;
};
export const AnswerInput = ({ answer }: TProps) => {
  const [text, setText] = useState(answer);
  const [isEdit, setIsEdit] = useState(answer ? true : false);
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
          <textarea
            className="w-full border-2 border-black rounded-md p-3 h-40"
            value={text}
            onChange={(t) => setText(t.target.value)}
          />
          <Button className=" ml-auto block" onClick={() => setIsEdit(true)}>
            保存
          </Button>
        </>
      )}
    </div>
  );
};
