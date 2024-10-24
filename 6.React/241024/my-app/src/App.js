import React, { useState } from "react";
import Button from "./Components/buttonList";
import Box from "./Components/Display";
import "./App.css";

function App() {
  const [State, setState] = useState("");

  return (
    <div>
      <h1>오늘의 기분을 선택해주세요!!😀</h1>
      <Button onButtonClick={setState} />
      <br></br>
      <Box content={"기분이 " + State} />
    </div>
  );
}

export default App;
