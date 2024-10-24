import React from "react";
import "./App2.css";

const list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function Item(props) {
  console.log(props);
  return (
    <li className={props.data.visited ? "visited" : null}>{props.data.area}</li>
  );
}

export default function App2() {
  const items = list.map((item) => {
    return <Item key={item.no} data={item} />;
  });

  return (
    <ul className="list-area">
      {/* <Item data={list[0]} />
      <Item data={list[1]} />
      <Item data={list[2]} />
      <Item data={list[3]} /> */}

      {items}
    </ul>
  );
}
