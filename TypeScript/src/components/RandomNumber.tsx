type RandomNumberType = {
    value: number;
};

type RandomNumberProps = RandomNumberType & {
    isPositive?: boolean;
    isNegative?: boolean;
    isZero?: boolean;
};

function RandomNumber({ value, isPositive, isNegative, isZero }:RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "is positive"} {isNegative && "is negative"}{" "}
      {isZero && "is zero"}
    </div>
  );
}

export default RandomNumber;
