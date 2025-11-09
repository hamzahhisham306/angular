type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};
function Toast({ position }: ToastProps) {
  return <div>Toast Position - {position}</div>;
}

export default Toast;
