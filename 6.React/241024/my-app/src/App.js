import React from "react";

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function Item(props) {
  return (
    <dl>{props.data.name}
    <dt>{props.data.desc}</dt>
    </dl>
  );
    
}

export default function App2() {
  const list = items.map((item) => {
    return <Item key={item.id} data={item} />;
  });

  return (
    <>
          {list}
    </>



  );
}
