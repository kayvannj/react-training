import ListGroup from "./components/ListGroup";

function App() {
  var cities = ["San Francisco", "New York", "Los Angles"];

  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
    </div>
  );
}

export default App;
