import { useState } from "react";
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom";

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
        { text: "Home", hasClass: (hover), redirect: "/" },
        { text: "Contact", hasClass: (hover), redirect: "/contact" },
        { text: "Work", hasClass: (hover), redirect: "/work" },
        { text: "Resume", hasClass: (hover), redirect: "/resume" },
        { text: "", hasClass: "li-break" + (opacity) },
        { text: <BsBoxArrowRight />, hasClass: (rotate), clickEffect: () => handleClick() },
    ]

    return (
        <div>
            <div className={display}>
                <ul>
                    {listContent.map(({ text, clickEffect, hasClass, redirect }) =>
                        redirect ? <Link to={redirect} key={text} className={opacity} style={{ color: "black", textDecoration: "none" }}>
                            <li onClick={clickEffect ? clickEffect : null}
                                className={hasClass ? hasClass : null}>{text}</li>
                        </Link>
                            :
                            <li key={text} onClick={clickEffect ? clickEffect : null}
                                className={hasClass ? hasClass : null}>{text}</li>

                    )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;