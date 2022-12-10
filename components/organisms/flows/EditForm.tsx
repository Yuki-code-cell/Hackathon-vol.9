import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { deleteFlow } from '../../../apis/flows/delete';
import { getFlow } from '../../../apis/flows/show';
import { updateFlow } from '../../../apis/flows/update';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';

type TProps = {
  id: string;
};
export const EditForm = ({ id }: TProps) => {
  const router = useRouter();
  const { data, isLoading } = useQuery('flow', () => getFlow({ id: id }));
  console.log(data);
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  useEffect(() => {
    setFormTitle(data ? data[0].title : '');
    setFormDescription(data ? data[0].description : '');
  }, [data]);
  if (isLoading) {
    return <div>loading</div>;
  }
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
          onClick={() => {
            updateFlow({
              flowId: id,
              title: formTitle,
              description: formDescription,
            }).then(() => {
              router.push('/');
            });
          }}
        >
          更新
        </Button>
      </div>
      <div className="text-center">
        <Button
          className="px-20"
          onClick={() => {
            deleteFlow({ flowId: id }).then(() => {
              router.push('/');
            });
          }}
        >
          削除
        </Button>
      </div>
    </div>
  );
};
