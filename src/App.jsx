import { useState } from "react";
import Form from "./Form";
const App = () => {
  const [a, setA] = useState(0);

  return (
    <>
      <div>
        <h1>{a}</h1>
        <button onClick={() => setA(a + 10)} className="bg-green-500 p-3">
          increment
        </button>{" "}
        <br />
        <button onClick={() => setA(a - 10)} className="bg-red-500 p-3">
          decrement
        </button>
      </div>
      <Form />
    </>
  );
};

export default App;
