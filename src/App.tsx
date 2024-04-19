import NameHeader from "./components/NameHeader";
import ListGroup from "./components/ListGroup";
import { Fragment } from "react/jsx-runtime";

function App() {
  let allProjectsNames = [
    "Portfolio",
    "Minesweeper in C",
    "NQueens in C",
    "Turtle in C",
    "SQL in Java",
    "Text Game in Java",
    "Group Game Project in Processing",
    "Mynt Finance Full Stack Mobile Appliation in Flutter"
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <Fragment>
      <NameHeader></NameHeader>
      <Fragment>
        <ListGroup projectName={allProjectsNames} headings="Bristol MSc Projects:" onSelectItem={handleSelectItem} />
      </Fragment>
    </Fragment>
  );
}

export default App;
