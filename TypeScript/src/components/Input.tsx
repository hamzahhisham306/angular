type InputProps = {
  value: string;
  handleChanege: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChanege }: InputProps) => {
  return <input type="text" onChange={handleChanege} value={value} />;
};
export default Input;
