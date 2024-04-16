function NameHeader() {
  //JSX: .js XML
  const First_Name = "Mihir";
  const Last_Name = "Gandecha";
  //why JSX is so good! can describe the UI using syntax!
  if (First_Name && Last_Name) {
    return (
      <h1>
        {First_Name} {Last_Name} Portfolio
      </h1>
    );
  }
  return <h1>My Portfolio</h1>;
}

export default NameHeader;
