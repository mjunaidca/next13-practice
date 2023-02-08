import { Header, SubHeader, SubSubHeader } from "./components/MyHeadingStyles";

export default function Test02() {
  return (
    <>
      /* We can create predefine heading styles and use them repeatidly */
      <Header>Cool Text</Header>
      <SubHeader>Less Cool Text</SubHeader>
      <SubSubHeader>Kind of boring text</SubSubHeader>
      <br />
      Or we can define them with @apply directive in global.css and apply them
      like this
      <div className="title">Title</div>
      <br /> Still if we create a utility class then it will win over the base
      class.
      <div className="title text-5xl text-green-700">Title</div>
      <br />
      <h1>Test</h1>
    </>
  );
}
