import type { Product } from "../types/app";

function SayHello({ arrayData, title }: Product) {
  return (
    <>
      <h1>Hello {title}</h1>
      {arrayData.map((item, index) => (
        <div key={index}>
          <h2>
            Hello {item.firstName} {item.lastName}
          </h2>
          <p>Your lucky number is {item.age}</p>
          <p>Your size is {item.size}</p>
        </div>
      ))}
    </>
  );
}

export default SayHello;
