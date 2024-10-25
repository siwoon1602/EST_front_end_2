import React, { useState } from "react";

export default function FormAdd({ setPets }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setPets((prev) => {
      return [...prev, { name, species, age, id: Date.now() }];
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새로운 애완동물을 추가해보세요!</legend>
        <input
          type="text"
          placeholder="이름"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="species"
          onChange={(event) => setSpecies(event.target.value)}
        />
        <input
          type="text"
          placeholder="나이"
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">추가하기</button>
      </fieldset>
    </form>
  );
}
