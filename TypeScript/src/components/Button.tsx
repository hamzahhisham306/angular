type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number) => void;
};

function Button({ handleClick }: ButtonProps) {
  return <button onClick={(event) => handleClick(event, 1)}>Click Me</button>;
}

export default Button;
