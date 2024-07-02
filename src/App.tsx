// react + typescript tutorial: https://www.youtube.com/watch?v=SqcY0GlETPk

// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // List group code:
  // const items = ["New York", "San Fran", "Tokyo", "Toronto", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>
        <span>Button 1</span>
      </Button>

      {/* Another example with more complex structure */}
      {/* <Button>
        <span>Button 2</span>
        <div>
          <strong>Click here</strong> to activate.
        </div>
      </Button> */}
    </div>
  );
}

export default App;
