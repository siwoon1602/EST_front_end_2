function ColorText(props) {
  return (
    <>
      <span style={{ color: props.color }}>색이 바뀌어요!</span>
    </>
  );
}

function App() {
  return (
    <>
      <ColorText color="red" />
      <br></br>
      <ColorText color="green" />
      <br></br>
      <ColorText color="blue" />
    </>
  );
}
export default App;
