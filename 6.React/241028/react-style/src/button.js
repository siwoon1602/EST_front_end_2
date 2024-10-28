import React from "react";
import styled from "styled-components";

export default function button() {
  const btnOne = styled.button`
    background-color: royalblue;
    border: 1px solid black;
    color: white;
  `;
  return (
    <>
      <btnOne />
    </>
  );
}
