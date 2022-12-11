type TProps = {
  name: string;
  content: string;
  onChange: (state: string) => void;
};
export const Input = ({ name, content, onChange }: TProps) => {
  return (
    <div className="flex justify-center my-5">
      <label
        htmlFor={name}
        className="mr-2 p-2 bg-yellow-400 rounded-md flex items-center"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        className="border-2 border-black rounded-md p-1 lg:w-80"
        value={content}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
