import { AiFillHtml5 } from "react-icons/ai"
import { SiJavascript } from "react-icons/si"
import { DiCss3 } from "react-icons/di"


const Icons1 = () => {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <AiFillHtml5 />
                <p>HTML</p>
            </div>
            <div className="skills-content">
                <SiJavascript />
                <p>Javascript</p>
            </div>
            {/* <div className="skills-content">
                <GrReactjs />
                <p>React</p>
            </div> */}
            <div className="skills-content">
                <DiCss3 />
                <p>CSS</p>
            </div>
        </div>
    );
}

export default Icons1;