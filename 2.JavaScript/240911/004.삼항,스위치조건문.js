console.log("=======삼항 연산자 =======");
let score = 20;
const result = score > 30 ? "참 잘했어요!" : "조금 더 노력하세요!";
console.log(result);

score = 80;
let grade =
  score > 90
    ? "A"
    : score > 80
    ? "b"
    : score > 70
    ? "c"
    : scroe > 60
    ? "d"
    : "f";

console.log(`점수는 ${grade}`);
// if (score > 90) {
//   grade = "A";
// } else if (score > 80) {
//   // score가 90보다 작거나 같다
//   grade = "B";
// } else if (score > 70) {
//   // score가 80보다 작거나 같다
//   grade = "C";
// } else if (score > 60) {
//   // score가 70보다 작거나 같다
//   grade = "D";
// } else {
//   // score가 60보다 작거나 같다
//   grade = "F";
// }
// console.log(`점수는 ${grade}`);

console.log("======= switch =======");
let gender = "M";
switch (gender) {
  case "M":
    console.log("남성");
  case "F":
    console.log("여성");
  default:
    console.log("기타");
}

const today = new Date();
console.log(today.getDay());
//0일, 1월,2화,3수,4목,5금,6토

switch (today.getDay()) {
  case 1:
    console.log("월요일입니다");
    break;
  case 2:
    console.log("화요일입니다");
    break;
  case 3:
    console.log("수요일입니다");
    break;
  case 4:
    console.log("목요일입니다");
    break;
  case 5:
    console.log("금요일입니다");
    break;
  case 6:
    console.log("주말입니다");
    break;
  case 0:
    console.log("주말입니다");
    break;
  default:
    console.log("몰라요잉");
}

let month = 5;

switch (month) {
  case 3:
  case 4:
  case 5:
    console.log("봄");
    break;
  case 6:
  case 7:
  case 8:
    console.log("여름");
    break;
  case 9:
  case 10:
  case 11:
    console.log("가을");
    break;
  case 12:
  case 1:
  case 2:
    console.log("겨울");
  default:
    console.log("잘못입력하신것같습니다");
}
