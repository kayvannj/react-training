import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const removeTopping = (item: string) => {
    setPizza({
      ...pizza,
      toppings: pizza.toppings.filter((topping) => topping !== item),
    });
  };

  const addTopping = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Tomato"],
    });
  };

  return (
    <div>
      <div>
        <ListGroup
          items={pizza.toppings}
          heading={pizza.name}
          onSelectItem={removeTopping}
        ></ListGroup>
      </div>
      <Button onClick={addTopping} color="primary">
        change name
      </Button>
    </div>
  );
}

export default App;
