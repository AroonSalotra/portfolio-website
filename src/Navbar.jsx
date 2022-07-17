import { useState } from "react";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs"

const Navbar = () => {
    const [display, setDisplay] = useState("Navbar")
    const [hover, setHover] = useState("hover-color cursor-pointer")
    const [rotate, setRotate] = useState("rotate-180 icon-Navbar")
    const [opacity, setOpacity] = useState("")

    const handleClick = () => {

        if (display === "Navbar") {
            setDisplay("onscreen Navbar")
            setHover("")
            setRotate("icon-Navbar")
            setOpacity("opacity-off")
        } else {
            setDisplay("Navbar")
            setHover("hover-color cursor-pointer")
            setRotate("rotate-180 icon-Navbar padding-left")
            setOpacity("")

        }
    }

    const listContent = [
        { text: "About", hasClass: (hover) },
        { text: "Contact", hasClass: (hover) },
        { text: "Work", hasClass: (hover) },
        { text: "Resume", hasClass: (hover) },
        { text: "", hasClass: "li-break" + (opacity) },
        { text: <BsBoxArrowRight />, hasClass: (rotate), clickEffect: () => handleClick() },
    ]

    return (
        <div>
            <div className={display}>
                <ul>
                    {listContent.map(({ text, clickEffect, hasClass }) =>
                        <li key={text} onClick={clickEffect ? clickEffect : null}
                            className={hasClass ? hasClass : null}>{text}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;