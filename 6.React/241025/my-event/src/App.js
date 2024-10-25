import Login from "./Component/Login";
import { useState } from "react";
import Homepage from "./Component/Homepage";

function App() {
  const user = {
    idUser: "jaehyun@weniv.com",
    pwUser: 1234,
  };

  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {" "}
      {isLogin ? <Homepage /> : <Login userInfo={user} setLogin={setIsLogin} />}
    </>
  );
}
export default App;
