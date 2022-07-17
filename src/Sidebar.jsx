import { useState } from "react";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs"

const Sidebar = () => {
    const [display, setDisplay] = useState("sidebar")
    const [hover, setHover] = useState("hover-color cursor-pointer")
    const [rotate, setRotate] = useState("rotate-180 icon-sidebar")

    const handleClick = () => {

        if (display === "sidebar") {
            setDisplay("onscreen sidebar")
            setHover("")
            setRotate("icon-sidebar")
        } else {
            setDisplay("sidebar")
            setHover("hover-color cursor-pointer")
            setRotate("rotate-180 icon-sidebar")
        }
    }

    const listContent = [
        { text: "About", hasClass: (hover) },
        { text: "Contact", hasClass: (hover) },
        { text: "Work", hasClass: (hover) },
        { text: "Resume", hasClass: (hover) },
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

export default Sidebar;