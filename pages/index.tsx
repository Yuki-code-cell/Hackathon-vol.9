import { Pages } from '../components/shared/Pages';
import { useMorphological } from '../hooks/useMorphological';
import { useQuery } from 'react-query';
import { builder } from 'kuromoji';
import { useState } from 'react';
export default function Home() {
  const [t, setT] = useState();
  const { data, isLoading, isError } = useQuery('texts', async () => {
    builder({ dicPath: '/dict' }).build((err: any, tokenizer: any) => {
      if (err) {
        throw new Error('kuromoji');
      } else {
        setT(
          tokenizer.tokenize('私は人間ですs').filter((x: any) => {
            return x.pos === '名詞';
          })
        );
      }
    });
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  console.log(t);
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

      <div className="my-20 lg:mx-16 mx-8">
        <h2 className="text-2xl font-semibold p-5">自作テンプレート一覧</h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
          {[0, 1, 2].map((v, i) => {
            return (
              <div
                key={v}
                className="rounded-md bg-white shadow-2xl gap-5 p-10 border"
              >
                <h3 className="text-lg font-medium border-b-2 border-black pb-1">
                  自作テンプレート{v}
                </h3>
                <p className="py-5 text-gray-700">
                  このテンプレートではエラーが出た際の解決を促します
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Pages>
  );
}
