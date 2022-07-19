import Icons from "./Icons";
import { FaReact } from "react-icons/fa"
import { BsFillBootstrapFill } from "react-icons/bs"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { SiTypescript, SiRedux } from "react-icons/si"

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="highlight">
                <h1 className="title">Aroon Salotra</h1>
                <h2 className="subtitle clr-dark">Software Developer</h2>
            </div>
            <p className="fs-m">
                I am a self-taught software developer with an art & design background,
                eager to learn new skills to add to my toolset.
            </p>
            {/* <p className="fs-m">
                I have a great understanding with HTML, CSS, Javascript & React alongside
                using Git and Figma for version control and pre production
            </p> */}
            {/* <Icons/> */}
            <div className="icon-container">
                <Icons icon={<AiFillHtml5 />} text={"HTML"} />
                <Icons icon={<DiCss3 />} text={"CSS"} />
                <Icons icon={<IoLogoJavascript />} text={"Javascript"} />
                <Icons icon={<SiTypescript />} text={"Typescript"} />
                <Icons icon={<FaReact />} text={"React"} />
                <Icons icon={<BsFillBootstrapFill />} text={"Bootstrap"} />
                <Icons icon={<AiFillGithub />} text={"Git"} />
                <Icons icon={<SiRedux />} text={"Redux"} />
            </div>
        </div>
    );
}

export default Intro;