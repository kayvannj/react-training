import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup/ListGroup";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText maxChar={100}>Lorem ipsum dolor</ExpandableText>
    </>
  );
}

export default App;
