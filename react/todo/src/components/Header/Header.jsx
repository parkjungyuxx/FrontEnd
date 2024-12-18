import React from "react";

export default function Header({ filters, setFilter }) {
  return (
    <header>
      <p>TODO LIST</p>
      <li>
        {filters.map((el, i) => (
          <button onClick={() => setFilter(el)} key={i}>
            {el}
          </button>
        ))}
      </li>
    </header>
  );
}
