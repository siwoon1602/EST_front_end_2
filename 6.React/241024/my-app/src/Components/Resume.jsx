import Hello from "./Hello";
import Color from "./ColorText";

function Resume({ hello, name, hobby, food, color }) {
  return (
    <div style={{ border: "1px solid black", width: "300px" }}>
      <h1>{name}자기소개서</h1>
      <h2>{hello}</h2>
      <p>취미 : {hobby}</p>
      <p>좋아하는 음식 : {food}</p>
      <p style={{ color: color }}>좋아하는 색 : {color}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Color />
      <Hello name="개리" />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
    </div>
  );
}

export default App;
