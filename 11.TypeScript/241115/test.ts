let userName: string = "김개발";
let userAge: number = 25;
let isStudent: boolean = true;
let number: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["typescript", 100];

let value: number = "Hello";
value = 42;

let numbers: number[] = [1, 2, 3];
numbers.push("4");

let mixed: (number | string)[] = [1, "two", 3];
mixed.push(true);

function logMessage(message): void {
  console.log(message);
}

function throwError(message): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("무한 루프");
  }
}

function lowercase(a: string, b: string): string {
  return a + b;
}

lowercase("Hello", "World").toLowerCase();

//함수와 타입 연습문제

function add1(x: number, y: number): number {
  return x + y;
}

// 문자열을 받아서 콘솔에 출력하는 함수
function printMessage(message: string): void {
  console.log(message);
}

function add(a: number, b?: number): number;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b?: number, c: number): number {
  return;
}

//연습문제 1
type User = {
  readonly id: number;
  name: string;
  email?: string;
};

// 연습문제 2 인터섹션
type Product = {
  name: string;
  price: number;
};

type Discount = {
  discountRate: number;
};

type DiscountedProduct = Product & Discount;

const carrot: DiscountedProduct = {
  name: "당근",
  price: 3000,
  discountRate: 20,
};

//연습문제 3

interface BaseItem {
  id: number;
  name: string;
}

interface Book extends BaseItem {
  author: string;
  pages: number;
}

interface Movie extends BaseItem {
  director: string;
  duration: number;
}
