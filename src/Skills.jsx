import Icons from "./Icons"
import { FaReact } from "react-icons/fa"
import { BsFillBootstrapFill } from "react-icons/bs"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { SiTypescript, SiRedux } from "react-icons/si"

const Skills = (props) => {
    return (
        <div className="about-container content-align">
            {/* <div className="flex-break"></div> */}
            <h1 className="subtitle highlight-s">Software</h1>
            <div className="icon-container">
                <div className="icon-row">
                    <Icons icon={<AiFillHtml5 />} text={"HTML"} />
                    <Icons icon={<DiCss3 />} text={"CSS"} />
                    <Icons icon={<IoLogoJavascript />} text={"Javascript"} />
                </div>

                <div className="icon-row">
                    <Icons icon={<SiTypescript />} text={"Typescript"} />
                    <Icons icon={<FaReact />} text={"React"} />
                    <Icons icon={<BsFillBootstrapFill />} text={"Bootstrap"} />
                </div>

                <div className="icon-row">
                    <Icons icon={<AiFillGithub />} text={"Git"} />
                    <Icons icon={<SiRedux />} text={"Redux"} />
                </div>
            </div>
        </div>
    );
}

export default Skills;