import InputComponent from "./Components/InputComponent";
import SomethingComponent from "./Components/SomethingComponent";
import useMouseLocation from "./Hook/useMouseLocation";
import useIsBottom from "./Hook/useIsBottom";

function App() {
  const isBottom = useIsBottom();
  console.log(isBottom);
  return (
    <>
      <div style={{ height: "200vh", backgroundColor: "royalblue" }}></div>
    </>
  );
}
export default App;
