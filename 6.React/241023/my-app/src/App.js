import "./App.css";

function App() {
  const name = "윤슌";
  const Style = { backgroundColor: "black", color: "white" };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <p style={Style}>안녕, {name}! 1호</p>
      <p>안녕, {name}! 2호</p>
      <div style={Style}>
        <p style={{ color: "red" }}>
          년 :<time dateTime={year}> {year}</time>
        </p>
        <p>
          월/일 :{" "}
          <time dateTime={month + "-" + date}>
            {month}/{date}
          </time>
        </p>
        <p>
          시간 :{" "}
          <time dateTime={hour + ":" + sec + ":" + min}>
            {hour}시{min}분{sec}초
          </time>
        </p>
      </div>
    </div>
  );
}

export default App;
