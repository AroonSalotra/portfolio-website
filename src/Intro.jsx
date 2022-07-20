import { MdEmail } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillGithub, AiFillMail, AiFillPhone } from "react-icons/ai"


import Underline from "./Underline";
const Intro = () => {
    return (
        <div className="intro-container">
            <div className="highlight-m">
                <h1 className="title">Aroon Salotra</h1>
                <Underline class="underline" />
                <h2 className="subtitle clr-dark">Software Developer</h2>
                <Underline class="underline rotate-180" />
            </div>
            <p className="text-container-s">
                I am a self-taught software developer with an art & design background,
                eager to learn new skills to add to my toolset.
            </p>

            <div className="intro-icons">
                {/* <MdEmail /> */}
                <AiFillMail/>
                {/* <BsFillTelephoneFill /> */}
                <AiFillPhone/>
                <AiFillGithub />
            </div>
        </div>
    );
}

export default Intro;