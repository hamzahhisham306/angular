type CustomButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

function CustomButton({ variant }:CustomButtonProps) {
  return <button className={variant}>Click me!</button>;
}

export default CustomButton;
