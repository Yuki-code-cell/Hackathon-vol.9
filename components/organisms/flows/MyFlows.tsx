import { useQuery } from 'react-query';
import { getFlow } from '../../../apis/flows/show';

type TProps = {
  userId: string | undefined;
};

export const MyFlows = ({ userId }: TProps) => {
  const { data: myFlows, isLoading } = useQuery('myflows', () =>
    getFlow({ userId: userId as string })
  );
  if (isLoading) {
    return <div>ローディング中です</div>;
  }
  return (
    <div className="my-20 lg:mx-16 mx-8">
      <h2 className="text-2xl font-semibold p-5">自作テンプレート一覧</h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
        {myFlows?.map((v) => {
          return (
            <div
              key={v.id}
              className="rounded-md bg-white shadow-2xl gap-5 p-10 border"
            >
              <h3 className="text-lg font-medium border-b-2 border-black pb-1">
                {v.title}
              </h3>
              <p className="py-5 text-gray-700">{v.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
