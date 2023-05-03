import ListGroup from "./components/ListGroup";

function App() {
  var cities = ["San Francisco", "New York", "Los Angles"];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
