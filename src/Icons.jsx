import { FaReact } from "react-icons/fa"
import { BsFillBootstrapFill } from "react-icons/bs"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { SiTypescript, SiRedux } from "react-icons/si"


const Icons = (props) => {
    return (
        // <div className="icon-container">
        //     <FaReact/>
        //     <BsFillBootstrapFill/>
        //     <AiFillGithub/>
        //     <AiFillHtml5/>
        //     <DiCss3/>
        //     <IoLogoJavascript/>
        //     <SiTypescript/>
        //     <SiRedux/>
        // </div>
        <div className="icon-content">
            {props.icon}
            <p className="icon-text">{props.text}</p>
        </div>
    );
}

export default Icons;