import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
    </div>
  );
}

export default App;
