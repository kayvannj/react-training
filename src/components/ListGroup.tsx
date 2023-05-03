// State
// each instance of the component has its own state using useState
// Hook
// const arr = useState(-1); initialize
// arr[0]; // variable
// arr[1]; // updater function

import { useState } from "react";

function ListGroup() {
  var items = ["San Francisco", "New York", "Los Angles"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Empty Items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
