// undefined

let a;
console.log(a); //undefined : 변수에 값이 할당되어 있지 않음
console.log(typeof a); // undefined
console.log(typeof b); //선언하지 않은 변수에 typeof -> undefined

// null
// 비어있는 값 , 명시적으로 사용하는 값

let isLoggedIn = true;
let currentUser = {
  name: "licat",
  level: 3,
};

// 로그인이 해제
isLoggedIn = false;
currentUser = null; // 명시적으로 빈 값
currentUser = undefined; //빈 값. 의미론적 부적절 - > 사용 x

console.log("typeof null >>", typeof null); // 오류 그냥 오류임
console.log("" == null); // 일치 연산을 사용해서 확인
console.log(Object.prototype.toString.call(null)); // 타입비교
