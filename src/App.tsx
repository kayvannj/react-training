import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like/Like";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  let alert = (
    <Alert onDismiss={() => setShowAlert(false)}>
      Hello <span>World</span>
    </Alert>
  );

  return (
    <div>
      {showAlert && alert}
      <Button onClick={() => setShowAlert(true)} color="primary">
        Submit
      </Button>
      <Like onClick={() => console.log("clicked")}></Like>
    </div>
  );
}

export default App;
