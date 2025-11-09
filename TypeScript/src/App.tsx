import Heading from "./components/Heading";
import SayHello from "./components/SayHello";
import Status from "./components/Status";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Loggedin from "./components/Loggedin";
import CustomButton from "./components/CustomButton";
import Text from "./components/Text";
export default function App() {
  const arrayData = [
    {
      firstName: "Hamza",
      lastName: "Khan",
      age: 26,
      size: 12,
    },
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      size: 10,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      size: 8,
    },
  ];
  return (
    <>
      <Text as="input"size="lg">
        <span>This is a text component</span>
      </Text>
      <CustomButton variant="primary" />
      <Loggedin />
      <Status status="loading" />
      <SayHello title="Typescript" arrayData={arrayData} />
      <Layout>
        <Heading>This is a heading component using children prop</Heading>
      </Layout>
      <Button handleClick={(e, id) => console.log(e.target, id)} />
      <Input value="" handleChanege={(e) => console.log(e.target.value)} />
      <Container
        styles={{ border: "1px solid black", padding: "1rem", display: "flex" }}
      />
    </>
  );
}
