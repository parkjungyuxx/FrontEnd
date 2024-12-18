import React from "react";

export default function Header({ filters }) {
  return (
    <header>
      <p>TODO LIST</p>
      <li>
        {filters.map((el, i) => (
          <button key={i}>{el}</button>
        ))}
      </li>
    </header>
  );
}
