const Navbar = () => {

    const listContent = [
        { text: "Home", id: "1", },
        { text: "About", id: "2" },
        { text: "Contact", id: "3" },
        { text: "Work", id: "4" },
    ]

    return (
        <>
            <ul className="navbar-content">
                {listContent.map(({ text, id }) =>
                    <li key={id}>{text}</li>
                )}
            </ul>
        </>
    );
}

export default Navbar;