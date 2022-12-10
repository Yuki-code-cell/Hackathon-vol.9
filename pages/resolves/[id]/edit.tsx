import { useRouter } from 'next/router';
import { EditFlows } from '../../../components/organisms/flows/EditFlows';
import { EditQuestions } from '../../../components/organisms/questions/EditQuestions';
import { Pages } from '../../../components/shared/Pages';
const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Pages>
      <EditFlows id={id as string} />
      {/* <EditQuestions flowId={id as string} /> */}
    </Pages>
  );
};
export default Edit;
