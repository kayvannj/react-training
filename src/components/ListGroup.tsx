// make sure you have key for each item in the list
// there are no for loops in jsx so we need to use map instead

function ListGroup() {
  const items = ["San Francisco", "New York", "Los Angles"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
