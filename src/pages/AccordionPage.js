import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Hello, open me!",
      content: "I'm open!",
    },
    {
      id: "2",
      label: "Hello, open me!",
      content: "I'm open!",
    },
    {
      id: "3",
      label: "Hello, open me!",
      content: "I'm open!",
    },
    {
      id: "4",
      label: "Hello, open me!",
      content: "I'm open!",
    },
  ];
  return <Accordion items={items}></Accordion>;
}

export default AccordionPage;
