import { useState } from "react";
import { Select, SelectOption } from "./select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Forth", value: 4 },
  { label: "Fifth", value: 4 },
];

function App() {
  const [valueOne, setValueOne] = useState<SelectOption[]>([options[0]]);
  const [valueTwo, setValueTwo] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <Select multiple options={options} value={valueOne} onChange={(o) => setValueOne(o)} />
      <br />
      <Select options={options} value={valueTwo} onChange={(o) => setValueTwo(o)} />
    </>
  );
}

export default App;
