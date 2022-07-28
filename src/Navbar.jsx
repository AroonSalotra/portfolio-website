import { useState } from "react"

const Navbar = () => {


    const listContent = [
        { text: "Home", id: "1", },
        { text: "About", id: "2" },
        { text: "Contact", id: "3" },
        { text: "Work", id: "4" },
    ]

    const handleClick = (e) => {
        let index;
        switch (e.target.id) {
            case "2":
                index = 700
                break;
            case "3":
                index = 1800
                break;
            case "4":
                index = 700
                break;
            default:
                return null
        }
        window.scroll(0, index)
    }

    return (
        <>
            <ul className="navbar-content">
                {listContent.map(({ text, id }) =>
                    <li key={text} id={id} onClick={handleClick} >{text}</li>
                )}
            </ul>
            {/* <button onClick={() => handleClick()}>test</button> */}
        </>
    );
}

export default Navbar;