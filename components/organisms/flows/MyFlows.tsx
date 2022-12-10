import { useQuery } from 'react-query';
import { getFlows } from '../../../apis/flows/index';
import { LinkTo } from '../../atoms/LinkTo';
import { MyFlow } from './MyFlow';

type TProps = {
  userId: string | undefined;
};

export const MyFlows = ({ userId }: TProps) => {
  const { data: myFlows, isLoading } = useQuery('myflows', () =>
    getFlows({ userId: userId as string })
  );
  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  return (
    <div className="my-20 lg:mx-16 mx-8">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold p-5">自作テンプレート一覧</h2>
        <LinkTo href="resolves/new">作成する</LinkTo>
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
        {myFlows?.map((flow) => {
          return (
            <MyFlow
              key={flow.id}
              id={flow.id}
              title={flow.title}
              description={flow.description}
            />
          );
        })}
      </div>
    </div>
  );
};
