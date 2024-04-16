function Message() {
    //JSX: .js XML
    const First_Name = 'Mihir';
    const Last_Name = 'Gandecha';
    //why JSX is so good! can describe the UI using syntax!
    if(First_Name && Last_Name){{First_Name} {Last_Name}
        return <h1>{First_Name} {Last_Name}</h1>
    }
    return <h1>Mihir G</h1>
}

export default Message;
