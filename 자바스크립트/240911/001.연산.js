// 산술 할당 연산
// 산술 + 할당
// const로 선언한 변수는 사용이 불가하다.
console.log("======= 산술 할당 연산 =======");
let x = 10;
x += 10; // x = x + 10;
console.log(x); // 20

x -= 5; // x = x - 5;
console.log(x); // 15

x *= 2; // x = x * 2;
console.log(x); // 30

x /= 3; // x = x / 3;
console.log(x); // 10

x **= 2; // x = x ** 2;
console.log(x); // 100

x %= 8; // x = x % 8;
console.log(x); // 4

// 비교 연산
console.log("======= 비교 연산 =======");
console.log("1. 동등과 부등");
let y = 10;
console.log(x === y); // x==4 , y ==10
console.log(x === 4); // true
console.log(x === "4"); // true

// 동등 연산 (==)에서는 자동 형 변환이 일어난다 -> 값만 비교한다.
console.log(20 == "20"); //true
console.log(1 == true); //true 불리언값은 0
console.log(0 == false); //true

console.log(x != y); //true
console.log(x != "4"); //false

const obj1 = { nave: "weniv", age: 20 };
const obj2 = { nave: "weniv", age: 20 };
console.log(obj1 == obj2); // false -> 객체의 경우 동등 비교에 있어 값이 아닌 '''참조값'''을 비교

const obj3 = obj2;
console.log(obj2 == obj3); // true

console.log({} == {}); //false

console.log("2. 일치과 불일치");
console.log(x == y); //false
console.log(x === "4"); // false - > === 에선 형 변환을하지않고 -> '''값과 타입'''을 모두 비교
console.log(x === 4); //ture -> 값과 타입이 동일 하기 때문

console.log(x !== y); //true
console.log(x !== "4"); //true
console.log(x !== 4); //false : 값과 타입이 동일한 경우만 false

console.log("======= 논리 연산과 단축 평가 =======");

// 논리연산자 : and (&&) , or (||), not(!)
console.log("1. 논리곱 연산");
//논리곱 -> 피연산자가 모두 true일 때만 true
console.log("Licat" && false && 24 && "wade"); // 단축평가 - > 앞에서 충족되지않으면 평가를 종료함
console.log("Licat" && 24 && "wade"); // Truthy , Falsy
// 모든 값이 Truthy -> 모든 피연산자를 평가하고 마지막 Truthy 한 값을 반환

console.log("Licat" && null && "wade"); //null
//가장 첫번째로 만나는 Falsy 한 값을 반환

let isLoggdIn = true;
isLoggedIn && console.log("사용자님 안녕하세요");

console.log("2. 논리합 연산");
// 논리합 -> 피연산자가 모두 false 일때 , 하나라도 true라면 true
console.log(null || false || 23 || "Wade"); // 23에서 평가를 종료 -> 가장첫번째로 나오는 Truthy한 값을 반환
console.log(null || undefined || false || 0); // 모든 값이 Falsy하다면 가장 마지막 Falsy한 값을 반환

let name = "라이캣";
name = name || "사용자";
console.log(`${name}님 안녕하세요!`);

console.log("======= nullish 병합 연산자 =======");
// ?? -> 논리합 연산의 단축평가와 유사
// null 과 undefined가 아닌 값을 반환
//가장 첫번째로 오는 null또는 undefined 가 아닌 값을 반환 / 둘다 null이나 undefined라면 마지막 값을 반환
console.log("Licat" ?? "Wade"); // Licat
console.log(null ?? "Wade"); // Wade
console.log(null ?? undefined); //undefined
console.log("" ?? "Wade");
console.log(false ?? "Wade");

name = "";
name = name ?? "사용자";
console.log(`${name}님 안녕하세요!`);

const user = {
  name: "Wade",
};

console.log(user.location && user.location.city);

console.log("=======옵셔널 체이닝 =======");
// ?.
const user2 = {
  name: "licat",
  company: "weniv",
  address: {
    city: "Jeju",
  },
};

console.log(user2.address); // undefined
console.log(user2.address.city); //
console.log("단축평가 사용", user2 && user2.address && user2.address.city);

console.log("옵셔널 체이닝 사용", user2?.address?.city); //jeju
console.log("대괄호에서 옵셔널 체이닝", user2?.["address"]?.city); // jeju

console.log(user2.greeting?.()); // 유효한 함수에만 호출이 가능

console.log("======= 쉼표 연산 =======");

let a = 1,
  b = 2,
  c = 3;

console.log(a, b, c); // 1,2,3

let result = (a + 1, b + 2, c + 3);
console.log(result); // 6

console.log("======= 그룹 연산자 =======");

// () 묶는 역할

a = 10;
b = 20;
c = 30;
console.log(a + b * c);
console.log((a + b) * c); // a+b가 우선
