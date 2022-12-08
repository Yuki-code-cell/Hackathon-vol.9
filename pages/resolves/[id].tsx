import { useRouter } from 'next/router';
import { Faqs } from '../../components/organisms/resolves/Faqs';
import { Pages } from '../../components/shared/Pages';
const Resolve = () => {
  const router = useRouter();
  const { id } = router.query;
  const mock = [
    {
      question: 'エラー文をそのまま調べましたか？',
      answer: '調べました。パッケージのエラーでした',
    },
    {
      question: '誰かの記事を読んだりして現在のエラーの原因が分かりましたか？',
      answer: '分かりません。調べてみます',
    },
    {
      question: 'githubのソースコードなど一次ソースを読みましたか？',
      answer: '読みました。エラーとなっていた場所がわかりました。',
    },
    {
      question: 'githubのソースコードなど一次ソースを読みましたか？',
      answer: '',
    },
    {
      question: '解決できましたか？',
      answer: '',
    },
  ];
  return (
    <div>
      <Pages>
        <Faqs faqs={mock} />
      </Pages>
    </div>
  );
};
export default Resolve;
