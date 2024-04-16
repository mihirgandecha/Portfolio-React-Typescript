import NameHeader from "./components/NameHeader";
import ListGroup from "./components/ListGroup";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
    <Fragment>
      <NameHeader></NameHeader>
      <Fragment>
        <ListGroup></ListGroup>
      </Fragment> 
    </Fragment>
  );
}

export default App;
