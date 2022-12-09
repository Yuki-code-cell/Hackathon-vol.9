import parse from 'html-react-parser';
type TProps = {
  id: number;
  title: string;
  content: string;
};
export const WikiInfo = ({ id, title, content }: TProps) => {
  console.log(id);
  return (
    <div className="text-left bg-white rounded-md border-2 shadow-2xl mb-5 mx-5 p-5">
      <a
        href={`https://ja.wikipedia.org/?curid=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className=" text-lg border-b-2 pb-1 font-semibold">{title}</p>
        <p className="py-3 text-sm">{parse(content)}</p>
      </a>
    </div>
  );
};
