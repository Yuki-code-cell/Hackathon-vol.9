type TProps = {
  name: string;
  content: string;
  onChange: (state: string) => void;
};
export const Input = ({ name, content, onChange }: TProps) => {
  return (
    <div className="m-2 flex justify-center">
      <label
        htmlFor={name}
        className="mx-2 w-20 flex justify-center items-center"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        className="border-2 border-black rounded-md p-1"
        value={content}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
