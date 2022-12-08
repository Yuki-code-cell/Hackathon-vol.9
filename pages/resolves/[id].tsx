import { useRouter } from 'next/router';
import { SideBar } from '../../components/organisms/SideBar';
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
  ];
  return (
    <div>
      <Pages>
        <SideBar faqs={mock} />
      </Pages>
    </div>
  );
};
export default Resolve;
