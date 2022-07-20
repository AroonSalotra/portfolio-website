const Navbar = () => {

    const listContent = [
        { text: "Home", id: "1", },
        { text: "About", id: "2" },
        { text: "Contact", id: "3" },
        { text: "Work", id: "4" },
    ]

    return (
        <div className="navbar-container">
            <ul>
                {listContent.map(({ text, id }) =>
                    <li key={id}>{text}</li>
                )}
            </ul>
        </div>
    );
}

export default Navbar;