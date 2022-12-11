import { useQuery } from 'react-query';
import { session } from '../apis/user/session';
import { LinkTo } from '../components/atoms/LinkTo';
import { MyFlows } from '../components/organisms/flows/MyFlows';
import { Pages } from '../components/shared/Pages';
import TemplateData from '../public/data/templates';

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
          {TemplateData.map((v, i) => {
            return (
              <div
                key={v.theme}
                className="rounded-md bg-white shadow-2xl gap-5 p-10 border relative"
              >
                <h3 className="text-lg font-medium border-b-2 border-black pb-1">
                  {v.theme}
                </h3>
                <p className="py-5 text-gray-700">{v.description}</p>
                <div className="absolute bottom-3 right-3">
                  <LinkTo href={`resolves/${v.id}`}>開始</LinkTo>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {userId && <MyFlows userId={userId?.id} />}
    </Pages>
  );
}
