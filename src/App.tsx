import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Kayvan" } });
  };

  return (
    <div>
      <p>{game.player.name}</p>
      <Button onClick={handleClick} color="primary">
        change name
      </Button>
    </div>
  );
}

export default App;
