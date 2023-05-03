// Conditional rendering
// can use ternary operator and return null or can use && as you can see below

function ListGroup() {
  var items = ["San Francisco", "New York", "Los Angles"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Empty Items</p>}
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
