//
/*
for(365번의 반복){
  console.log('기상')
  console.log('양치')
  console.log('세수')
  console.log('아침밥')
}
  */

console.log("=======for문 =======");
//1부터 10까지의 수를 출력하겠다.
for (let i = 1; i < 11; i++) {
  //11 < 11 = false
  console.log(i);
}

const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];

let text = "<ul>";
text += "<li>" + weniv_friends[0] + "</li>";
text += "<li>" + weniv_friends[1] + "</li>";
text += "<li>" + weniv_friends[2] + "</li>";
text += "<li>" + weniv_friends[3] + "</li>";
text += "<li>" + weniv_friends[4] + "</li>";
text += "</ul>";

console.log(text);
document.body.innerHTML = text; // DOM파트에서 더 자세히

let text2 = "<ul>";
for (let i = 0; i < weniv_friends.length; i++) {
  text2 += "<li>" + weniv_friends[i] + "</li>";
}
text2 += "</ul>";
document.body.innerHTML = text2; // DOM파트에서 더 자세히

//1. 1부터 10까지 숫자 중 짝수만 출력
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//2. 1부터 100까지 숫자 중 짝수의 합을 구합니다.

let a = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    a += i;
  }
}

console.log(a);

console.log("=======이중 for문 =======");
//구구단
for (let i = 2; i <= 9; i++) {
  console.log(`---${i}단---`);
  for (let j = 1; i <= 0; i++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

console.log("=======for 문의 선택적 사용 =======");
let i = 0; // 변수 선언
for (; i < 7; i++) {
  console.log(`count: ${i}`);
}

// 두 개의 주사위를 던졌을 때 , 주사위 눈의 합이 8이 되는 모든 경우를 출력해주세요
for (let dice1 = 1; dice1 <= 6; dice1++) {
  for (let dice2 = 1; dice2 <= 6; dice2++) {
    if (dice1 + dice2 === 8) {
      console.log(`${dice1},${dice2}`);
      break;
    }
  }
}
