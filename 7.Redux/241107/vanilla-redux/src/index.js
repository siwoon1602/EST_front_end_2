import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;

const countReducer = (state = 0, action) => {};

const store = createStore(countReducer);

let count = 0;

const updateResult = (c) => {
  number.innerText = count;
  quantity.innerHTML = c;
  totalPrice.innerHTML = c * PRICE;
};

// State Change
const addNumber = () => {
  count += 1;
  minus.disabled = false;
  updateResult(count);
};

// State Change
const substractNumber = () => {
  count -= 1;
  if (count <= 0) {
    minus.disabled = true;
  }
  updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
