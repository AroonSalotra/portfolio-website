import { AiFillGithub } from "react-icons/ai"
import { FiFigma } from "react-icons/fi"
import { DiTrello } from "react-icons/di"

const Icons2 = () => {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <AiFillGithub className="icon" />
                <p>Git</p>
            </div>
            <div className="skills-content">
                <FiFigma className="icon" />
                <p>Figma</p>
            </div>
            <div className="skills-content">
                <DiTrello className="icon" />
                <p>Scrum</p>
            </div>
        </div>
    );
}

export default Icons2;