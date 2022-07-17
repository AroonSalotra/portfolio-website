import { AiFillHtml5 } from "react-icons/ai"
import { SiJavascript } from "react-icons/si"
import { DiCss3 } from "react-icons/di"


const Icons1 = () => {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <AiFillHtml5 className="icon" />
                <p>HTML</p>
            </div>
            <div className="skills-content">
                <DiCss3 className="icon" />
                <p>CSS</p>
            </div>
            <div className="skills-content">
                <SiJavascript className="icon" />
                <p>Javascript</p>
            </div>
            <div className="skills-content">
                <DiCss3 className="icon" />
                <p>Typescript</p>
            </div>
            {/* <div className="skills-content">
                <GrReactjs />
                <p>React</p>
            </div> */}


        </div>
    );
}

export default Icons1;