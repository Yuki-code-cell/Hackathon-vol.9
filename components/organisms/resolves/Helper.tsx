import { useMorphologicalStore } from '../../../libs/store';

type TProps = {
  className?: string;
};
export const Helper = ({ className }: TProps) => {
  const { tokenizedTexts, changeTokenizedTexts } = useMorphologicalStore();
  console.log(tokenizedTexts);
  const mocks = [
    {
      title: '形態素解析',
      content:
        'なんかいい感じに文を解析してくれるアルゴリズムかなんかなのかな。今度もうちょい調べます。',
      url: 'url',
    },
    { title: 'wikimediaAPI', content: '本当に悩みました', url: 'url' },
    {
      title: 'resolver',
      content: ' Service名としては単純すぎるのかなとか思いつつ',
      url: 'url',
    },
  ];
  return (
    <div className={`${className}`}>
      {mocks.map((mock, index) => {
        return (
          <div
            className="text-center bg-white rounded-md border-2 shadow-2xl mb-5 mx-5 p-5"
            key={mock.title}
          >
            <a href="">
              <p>{mock.title}</p>
              <p>{mock.content}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
