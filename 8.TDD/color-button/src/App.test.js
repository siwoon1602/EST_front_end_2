import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("색 변경 버튼이 잘 작동하는가?", () => {
  render(<App />);
  // 인자1 : 찾아야할 요소  , 인자2: 인자안의 해당텍스트가 있는가?
  const button = screen.getByRole("button", { name: "change to blue!" });

  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });

  expect(button.textContent).toBe("change to red!");
});
