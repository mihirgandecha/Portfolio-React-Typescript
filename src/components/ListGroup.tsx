function ListGroup() {
  //how to render elements dynamically:
    const items = [
    "Turtle in C",
    "SQL in Java",
    "NQueens in C",
    "Game in Processing",
    "Text Game in Java",
  ];
  
  //take each item and convert to item of type <li>
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key = {item}>{item}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
