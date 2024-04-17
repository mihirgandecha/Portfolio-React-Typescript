function ListGroup() {
  //how to render elements dynamically:
  let items = [
    "Turtle in C",
    "SQL in Java",
    "NQueens in C",
    "Game in Processing",
    "Text Game in Java",
  ];
  items = [];

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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
