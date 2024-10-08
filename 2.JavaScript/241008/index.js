console.log("test...");

export const value = "hello";
export const value2 = "hello";
export const value3 = "hello";

export default function text() {
  console.log("text function");
}

// async function testFetch() {
//
// }

// top level await
// 최상위 공간에 있는 await는 async가 없어도 작성가능
// 최상위 공간 = 상위컨텍스가 존재하지않은 공간

const response = await fetch("test.json");
const data = await response.json();
console.log(data);
