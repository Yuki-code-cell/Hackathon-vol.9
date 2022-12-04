import { Pages } from '../components/shared/pages';

export default function Home() {
  return (
    <Pages>
      <div className="grid grid-cols-2 my-20 mx-10">
        {[0, 1, 2].map((v, i) => {
          return (
            <div key={v}>
              <h1 className="text-3xl font-bold p-20 border-4 rounded-md bg-white  border-black">
                メッセージ
              </h1>
            </div>
          );
        })}
      </div>
    </Pages>
  );
}
