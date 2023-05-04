import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={() => console.log("clicked")} color="primary">
        Submit
      </Button>
    </div>
  );
}

export default App;
