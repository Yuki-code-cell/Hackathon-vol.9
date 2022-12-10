import { useQuery } from 'react-query';
import { session } from '../apis/user/session';
import { MyFlows } from '../components/organisms/flows/MyFlows';
import { Pages } from '../components/shared/Pages';
export default function Home() {
  const { data: userId, isLoading } = useQuery('user', () => session());
  if (isLoading) {
    return <div>Loading中</div>;
  }
  return (
    <Pages>
      <div className="my-20 lg:mx-16 mx-8">
        <h2 className="text-2xl font-semibold p-5">テンプレート一覧</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
          {[0, 1, 2, 3, 4].map((v, i) => {
            return (
              <div
                key={v}
                className="rounded-md bg-white shadow-2xl gap-5 p-10 border"
              >
                <h3 className="text-lg font-medium border-b-2 border-black pb-1">
                  テンプレート{v}
                </h3>
                <p className="py-5 text-gray-700">
                  このテンプレートではエラーが出た際の解決を促します
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {userId && <MyFlows userId={userId?.id} />}
    </Pages>
  );
}
