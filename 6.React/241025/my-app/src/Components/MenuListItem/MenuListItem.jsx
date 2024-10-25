import React from "react";
import "../MenuListItem/MenuListItem.css";

export default function MenuListItem({ mood, setMood, isSelected }) {
  return (
    <li classNmae={isSelected ? "selected" : null}>
      <button onClick={() => setMood(mood)}>기분이: {mood}</button>
    </li>
  );
}
