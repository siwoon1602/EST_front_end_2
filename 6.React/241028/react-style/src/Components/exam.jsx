import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: green;
  transform: scale(1);
  width: 100px;

  &:hover {
    background-color: ${({ color }) => (color === "danger" ? "red" : "green")};
    transform: ${({ size }) => (size === "large" ? "scale(2.5)" : "scale(1)")};
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "100px")};
  }
`;
export default function exam() {
  return (
    <StyledButton color="danger" size="large" fullWidth>
      hello
    </StyledButton>
  );
}
