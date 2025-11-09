/// Polymorphic Text component


type TextOwnProps <T extends React.ElementType>= {
  children?: React.ReactNode;
  size: "sm" | "md" | "lg";
  as?: T;
};

type TextProps <T extends React.ElementType> = TextOwnProps<T> & Omit<React.ComponentProps<T>, keyof TextOwnProps<T>>;

function Text <T extends React.ElementType = "div">({children, size, as}: TextProps<T>): React.ReactElement {
    const Component = as || "div";
  return (
    <Component className={`text-${size}`}>
      {children}
    </Component>
  )
}

export default Text
