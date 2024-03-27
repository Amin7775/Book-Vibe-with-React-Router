import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-xl  underline text-fuchsia-500 work-sans">Hello world!</h1>
      <h1 className="text-xl  underline text-fuchsia-500 playfair-display">Hello world!</h1>
    </>
  );
}

export default App;
