import NameHeader from "./components/NameHeader";
import ListGroup from "./components/ListGroup";
import { Fragment } from "react/jsx-runtime";

function App() {
  let items = [
    "Portfolio",
    "Minesweeper in C",
    "NQueens in C",
    "Turtle in C",
    "SQL in Java",
    "Text Game in Java",
    "Group Game Project in Processing",
    "Mynt Finance Full Stack Mobile Appliation in Flutter"
  ];
  return (
    <Fragment>
      <NameHeader></NameHeader>
      <Fragment>
        <ListGroup items={items} headings="Bristol MSc Projects:" />
      </Fragment>
    </Fragment>
  );
}

export default App;
