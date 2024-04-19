import { useState } from "react";

function ListGroup() {
  //how to render elements dynamically:
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
  //state hook - this component has data that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] //variable (selectedIndex)
  // arr[1] //updater function 




  //Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  //rendering based on condition:
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h3>Master's Projects:</h3>
  //         <p>No projects found!</p>
  //       </>
  //     );
  //However inefficient as duplicate of below!

  //take each item and convert to item of type <li>
  return (
    <>
      <h3>Master's Projects:</h3>
      {items.length === 0 && <p>No projects found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // Reapply bootstrap
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // use event to generate SyntheticBasedEvent and properties
            onClick={
              (event) => {
                setSelectedIndex(index);
                console.log(item, index, event);
              }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
