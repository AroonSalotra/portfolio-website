import { useState } from "react";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs"

const Sidebar = () => {
    const [activeClass, setActiveClass] = useState("sidebar")
    const [activeClass2, setActiveClass2] = useState("hover-color cursor-pointer")
    const [rotate, setRotate] = useState({ transform: "rotate(180deg)" })

    const handleClick = () => {

        if (activeClass === "sidebar") {
            setActiveClass("onscreen sidebar")
            setActiveClass2("")
            setRotate({ transform: "rotate(0deg)" })
        } else {
            setActiveClass("sidebar")
            setActiveClass2("hover-color cursor-pointer")
            setRotate({ transform: "rotate(180deg)" })

        }
    }

    const listContent = [
        { text: "About", hasClass: (activeClass2) },
        { text: "Contact", hasClass: (activeClass2) },
        { text: "Work", hasClass: (activeClass2) },
        { text: "Resume", hasClass: (activeClass2) },
        { text: <BsBoxArrowRight />, hasClass: "icon-sidebar", hasStyle: (rotate), clickEffect: () => handleClick() },
    ]





    return (
        <div className={activeClass}>
            <ul>
                {listContent.map(({ text, clickEffect, hasClass, hasStyle }) =>
                    <li key={text} onClick={clickEffect ? clickEffect : null} style={hasStyle ? hasStyle : null}
                        className={hasClass ? hasClass : null}>{text}</li>
                )}
            </ul>

            {/* <div style={{ height: "2rem", width: "2rem", background: "red", marginLeft: "2.5rem", transform: "rotate(45deg)" }} /> */}
        </div>
    );
}

export default Sidebar;