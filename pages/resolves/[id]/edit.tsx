import { useRouter } from 'next/router';
import { EditForm } from '../../../components/organisms/flows/EditForm';
import { Pages } from '../../../components/shared/Pages';
const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Pages>
      <EditForm id={id as string} />
    </Pages>
  );
};
export default Edit;
