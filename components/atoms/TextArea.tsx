type TProps = {
  value: string;
  onChange: (input: string) => void;
  className?: string;
};
export const TextArea = ({ value, onChange, className }: TProps) => {
  return (
    <textarea
      className={`${className} w-full border-2 border-black rounded-md p-3 h-40`}
      value={value}
      onChange={(t) => onChange(t.target.value)}
    />
  );
};
