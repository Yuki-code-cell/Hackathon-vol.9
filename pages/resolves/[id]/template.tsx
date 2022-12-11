import { useRouter } from 'next/router';
import { Faqs } from '../../../components/organisms/resolves/Faqs';
import { Advices } from '../../../components/organisms/resolves/Advices';
import { Pages } from '../../../components/shared/Pages';
import { useQuery } from 'react-query';
import { getQuestions } from '../../../apis/questions';
import { useEffect } from 'react';
import { AnswersStore } from '../../../stores/AnswersStore';
const TempResolve = () => {
  const { addAnswers } = AnswersStore();
  const router = useRouter();
  const { id } = router.query;
  const { data: questions, isLoading } = useQuery('questions', () =>
    getQuestions({ flowId: id as string })
  );
  // fetchしてきたデータ分stateにobjectを追加していく
  useEffect(() => {
    questions?.map((_, index) => {
      addAnswers({ index: index, text: '' });
    });
  }, [questions]);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <Pages className="grid grid-cols-3 my-10">
      <Advices />
      <Faqs questions={questions ?? []} className="mx-5 col-span-2" />
    </Pages>
  );
};
export default TempResolve;
