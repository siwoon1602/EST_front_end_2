console.log("=======전개 구문=======");
const fruits = ["사과", "파인애플", "수박"];
const vegetables = ["당근", "오이", "양파"];
const food = [...fruits, ...vegetables];
console.log(food); //concat과 유사한 역활

const fruits2 = [...fruits];
fruits.push("망고");
console.log("fruits", fruits);
console.log("fruits2", fruits2);

console.log("2.객체의 전개 구문");
const weniv1 = { gray: 1, binky: 2 };
const weniv2 = { licat: 3, gray: 4 }; // key과 중복되면 뒤에오는 key가 앞의 key를 덮어버림
const weniv = { ...weniv1, ...weniv2 };
console.log(weniv);

const weniv3 = { ...weniv1 };
weniv1.binky = 5;
console.log(weniv1);
console.log(weniv3);

console.log("=======구조 분해 할당=======");
console.log("1.기존의 구조 분해 할당 방식");
const categories = { food1: "과일", food2: "채소", food3: "육류" };
let food1, food2, food3;

food1 = categories.food1;
food2 = categories.food2;
food3 = categories.food3;

console.log(food1, food2, food3);

console.log("2. 구조 분해 할당");
const { food1: key1, food2: key2, food3: key3 } = categories;
console.log(key1, key2, key3);
