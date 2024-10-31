import { useState, useRef } from "react";

export default function Stopwatch2() {
  // 시작한 시간
  const startTime = useRef(0);
  // 인터벌함수의 id
  const intervalId = useRef(null);
  // 현재 시간
  // const [now, setNow] = useState(null);
  const [secondsPassed, setSecondsPassed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    startTime.current = Date.now() - secondsPassed * 1000;
    setIsRunning(true);

    //경과시간
    intervalId.current = setInterval(() => {
      setSecondsPassed((Date.now() - startTime.current) / 1000);
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    setIsRunning(false);
  }
  function handleReset() {
    setSecondsPassed(0);
    clearInterval(intervalId.current);
    setIsRunning(false);
  }

  // let secondsPassed = 0;
  // if (startTime.current !== null && now !== null) {
  //   secondsPassed = (now - startTime.current) / 1000; // 기본 단위가 밀리세컨드이기 때문에 초단위로 표현하기 위해서 1000을 나눕니다.
  // }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
