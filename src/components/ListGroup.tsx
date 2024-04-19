import { useState } from "react";

interface Project {
  items: string[];
  headings: string;
  //Treat properties as imutable -> unable to change
  //ie no headings = "new masters"

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, headings, onSelectItem }: Project) {
  //how to render elements dynamically:
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
      <h3>{headings}</h3>
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
              () => {
                setSelectedIndex(index);
                onSelectItem(item);
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
