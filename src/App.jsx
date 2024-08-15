import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="container  mx-auto px-4  lg:max-w-screen-xl
      "
      >
        <div className="cards flex justify-center align-middle flex-wrap gap-7 lg:grid lg:grid-cols-4  lg:place-items-center lg:justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
