import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Elige un Color</h1>
      <Form className="classForm" />
    </>
  );
}

export default App;
