import { useRouter } from 'next/router';
import { useState } from 'react';
import { createFlow } from '../../../apis/flows/create';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
type TProps = {
  userId: string | undefined;
};
export const Form = ({ userId }: TProps) => {
  const router = useRouter();
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  return (
    <div className=" bg-white p-5 mx-auto my-5 w-4/5 shadow-2xl rounded-md">
      <Input name="テーマ" content={formTitle} onChange={setFormTitle} />
      <Input
        name="説明"
        content={formDescription}
        onChange={setFormDescription}
      />
      <div className="text-center mt-8 mb-2">
        <Button
          className="px-20"
          onClick={async () =>
            await createFlow({
              userId: userId as string,
              title: formTitle,
              description: formDescription,
            }).then((res) => {
              console.log(res);
              router.push(`/resolves/${res ? res[0].id : ''}/question/new`);
            })
          }
        >
          作成
        </Button>
      </div>
    </div>
  );
};
