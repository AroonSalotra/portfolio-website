import { AiFillGithub } from "react-icons/ai"
import { FiFigma } from "react-icons/fi"
import { DiTrello } from "react-icons/di"

const Icons2 = () => {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <AiFillGithub />
                <p>Github</p>
            </div>
            <div className="skills-content">
                <FiFigma />
                <p>Figma</p>
            </div>
            <div className="skills-content">
                <DiTrello />
                <p>Trello</p>
            </div>
        </div>
    );
}

export default Icons2;