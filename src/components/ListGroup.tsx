import { MouseEvent } from "react";

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
  let selectedIndex = 0;

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

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
      {/* we can't use conditional in html, however can if use {} */}
      {/* {items.length === 0 ? <p>No projects found!</p> : null} */}
      {/* Easier way without null to render dynamically: */}
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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
