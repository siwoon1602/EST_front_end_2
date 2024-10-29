import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Normalize from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${Normalize}
  a{
      text-decoration:none;
    }
`;
function App() {
  const [name, setName] = useState("detail");

  return (
    <div>
      <GlobalStyle />
      Hello
    </div>
  );
}
export default App;
